import { OPTION } from '@/constants/tic-tac-toe/index'
import Cell from './Cell'
import Turn from './Turn'
export default function GameTurns({ turn }) {
  return (
    <section className='flex w-[300px] h-32 justify-evenly mx-auto gap-10 mt-8 bg-z '>
      {Object.values(OPTION).map((option) => {
        return <Turn key={option} highlight={turn === option} option={option} />
      })}
    </section>
  )
}
