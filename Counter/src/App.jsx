import { useState } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0)
  const [by, setBy] = useState(1)

  return (
    <div className='bg-zinc-900 min-h-screen'>
      <header className='flex justify-center items-center h-20 border-b-2 border-gray-400'>
        <h1 className='text-3xl font-medium text-gray-200  '>Counter</h1>
      </header>
      <main className='flex flex-col justify-center items-center text-gray-200 '>
        <p className='text-5xl mt-10'>{counter}</p>
        <div className='p-5 '>
          <button
            className='py-1 px-4 rounded text-3xl  bg-blue-500 m-2'
            onClick={() => setCounter((curr) => (curr += by))}
          >
            +
          </button>
          <button
            className='py-1 px-5 rounded text-3xl bg-red-500  m-2'
            onClick={() => setCounter((curr) => (curr -= by))}
          >
            -
          </button>
        </div>
        <label className='text-xl'>
          Increment/Decrement by:{' '}
          <input
            className='text-center text-black font-medium w-14 rounded ml-2'
            type='number'
            min='1'
            onChange={({ target }) => {
              setBy(target.value === '' ? target.value : Math.abs(target.valueAsNumber))
            }}
            value={by}
          />
        </label>
      </main>
    </div>
  )
}
