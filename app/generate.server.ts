import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

function generatePrompt(animal: string) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase()
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`
}

type Result = {
  result: string
}

type Error = {
  error: {
    message: string
  }
}

async function generate(animal: string): Promise<Result | Error> {
  if (!configuration.apiKey) {
    return {
      error: {
        message:
          'OpenAI API key not configured, please follow instructions in README.md',
      },
    }
  }

  if (animal.trim().length === 0) {
    return {
      error: {
        message: 'Please enter a valid animal',
      },
    }
  }

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: generatePrompt(animal),
      temperature: 0.6,
    })
    return { result: completion.data.choices[0].text as string }
  } catch (error: any) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data)
      return { error: { message: error.response.data } }
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`)
      return {
        error: {
          message: 'An error occurred during your request.',
        },
      }
    }
  }
}

export { generate }
