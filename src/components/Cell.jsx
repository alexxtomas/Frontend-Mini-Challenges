export default function Cell({ children, index, setCells, cells, option, turn, setTurn }) {
  const handleClick = () => {
    const cellsCopy = [...cells]
    let targetCell = cellsCopy[index]
    if (targetCell === null) {
      targetCell = turn === option.x ? option.x : option.o
      setTurn((curr) => (curr === option.x ? option.o : option.x))
    }
    cellsCopy[index] = targetCell
    setCells(cellsCopy)
  }
  return (
    <div
      onClick={handleClick}
      className='border min-w-full h-[100px] flex items-center justify-center text-5xl cursor-pointer'
    >
      {children}
    </div>
  )
}
