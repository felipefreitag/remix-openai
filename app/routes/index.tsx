import { Form, useActionData } from '@remix-run/react'
import type { ActionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { generate } from '~/generate.server'

export async function action({ request }: ActionArgs) {
  const body = await request.formData()
  const animal = body.get('animal')
  if (typeof animal !== 'string') {
    return json({ error: { message: 'Animal is required' } })
  }
  const generated = await generate(animal)
  return json(generated)
}

export default function Index() {
  const data = useActionData<typeof action>()

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
        {data && data?.result ? (
          <div className="mt-10 w-80">{data.result}</div>
        ) : null}
        {data?.error ? (
          <div className="mt-10 w-80 text-red-500">{data.error?.message}</div>
        ) : null}
      </main>
    </div>
  )
}
