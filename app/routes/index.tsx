import { useState } from 'react'

export default function Index() {
  const [animalInput, setAnimalInput] = useState('')
  const [result, setResult] = useState()

  const styles = { main: '', icon: '', result: '' }
  const onSubmit = () => {}

  return (
    <div>
      <main className="flex flex-col items-center pt-16">
        <img src="/dog.png" alt="dog icon" className="w-9" />
        <h3 className="mb-10 mt-4 text-3xl font-bold leading-10 text-slate-800">
          Name my pet
        </h3>
        <form onSubmit={onSubmit} className="flex w-80 flex-col">
          <input
            type="text"
            name="animal"
            placeholder="Enter an animal"
            className="mb-6 rounded border border-solid border-emerald-600 px-3 py-4 outline-emerald-600 placeholder:text-slate-400 placeholder:opacity-100"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <button
            type="submit"
            className="rounded bg-emerald-600 p-4 text-white"
          >
            Generate names
          </button>
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  )
}
