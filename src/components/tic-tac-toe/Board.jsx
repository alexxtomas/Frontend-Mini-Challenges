import Cell from './Cell'
export default function Board({ cells, handleCellClick }) {
  return (
    <section className='grid grid-cols-3 w-[300px] h-[300px] justify-items-center'>
      {cells.map((cell, index) => {
        return (
          <Cell key={index} index={index} handleClick={handleCellClick}>
            {cell}
          </Cell>
        )
      })}
    </section>
  )
}
