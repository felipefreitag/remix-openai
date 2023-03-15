import { Form } from '@remix-run/react'
import type { ActionArgs } from '@remix-run/node'
import type { Result } from '~/generate.server'
import { generate } from '~/generate.server'
import { typedjson, useTypedActionData } from 'remix-typedjson'

export async function action({ request }: ActionArgs) {
  const body = await request.formData()
  const animal = body.get('animal')
  if (typeof animal !== 'string') {
    return typedjson({
      success: false,
      error: 'Animal is required',
    } as Result<string>)
  }
  const generated = await generate(animal)
  return typedjson(generated)
}

export default function Index() {
  const data = useTypedActionData<typeof action>()

  return (
    <div>
      <main className="flex flex-col items-center pt-16">
        <img src="/dog.png" alt="dog icon" className="w-9" />
        <h3 className="mb-10 mt-4 text-3xl font-bold leading-10 text-slate-800">
          Name my pet
        </h3>
        <Form method="post" className="flex w-80 flex-col">
          <input
            type="text"
            name="animal"
            placeholder="Enter an animal"
            className="mb-6 rounded border border-solid border-emerald-600 px-3 py-4 outline-emerald-600 placeholder:text-slate-400 placeholder:opacity-100"
          />
          <button
            type="submit"
            className="rounded bg-emerald-600 p-4 text-white"
          >
            Generate names
          </button>
        </Form>
        {data?.success === true ? (
          <div className="mt-10 w-80">{data.value}</div>
        ) : null}
        {data?.success === false ? (
          <div className="mt-10 w-80 text-red-500">{data?.error as string}</div>
        ) : null}
      </main>
    </div>
  )
}
