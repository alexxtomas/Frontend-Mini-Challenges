import HeaderLayout from '@/components/layouts/HeaderLayout'
import { useState } from 'react'
export default function Counter() {
  const [counter, setCounter] = useState(0)
  const [by, setBy] = useState(1)

  return (
    <>
      <HeaderLayout>Counter</HeaderLayout>
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
    </>
  )
}
