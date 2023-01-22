import { OPTION } from '@/constants/tic-tac-toe'
import Cell from './Cell'
export default function Turn({ highlight, option }) {
  return (
    <Cell
      key={option}
      styles={` ${highlight && 'bg-zinc-100'} rounded-xl w-[80px] h-[80px]  text-6xl border-none `}
    >
      {option}
    </Cell>
  )
}
