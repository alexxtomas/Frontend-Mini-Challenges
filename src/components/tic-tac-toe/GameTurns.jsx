import { OPTION } from '@/constants/tic-tac-toe/index'
import Cell from './Cell'
export default function GameTurns({ turn }) {
  return (
    <section className='flex w-[300px] h-[300px] justify-evenly mx-auto gap-10 mt-8 text-4xl '>
      <Cell
        styles={` ${
          turn === OPTION.X && 'bg-green-500'
        } rounded-xl w-[100px] h-[100px] flex items-center justify-center`}
      >
        {OPTION.X}
      </Cell>
      <Cell
        styles={` ${
          turn === OPTION.O && 'bg-green-500'
        } rounded-xl w-[100px] h-[100px] flex items-center justify-center`}
      >
        {OPTION.O}
      </Cell>
    </section>
  )
}
