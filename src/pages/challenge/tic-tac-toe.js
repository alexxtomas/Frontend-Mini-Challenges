import Cell from '@/components/Cell'
import Head from '@/components/Head'
import HeaderLayout from '@/components/layouts/HeaderLayout'
import MainLayout from '@/components/layouts/MainLayout'
import { useEffect, useState } from 'react'

const OPTION = {
  x: 'X',
  o: 'O'
}

export default function TicTacToe() {
  const [cells, setCells] = useState([null, null, null, null, null, null, null, null, null])
  const [turn, setTurn] = useState(OPTION.x)
  const [finish, setFinish] = useState(null)

  useEffect(() => {
    if (finish === 'tie') {
      setCells([null, null, null, null, null, null, null, null, null])
      setTurn(OPTION.x)
      setFinish(null)
    }
  }, [turn, finish])

  const handleClick = (index) => {
    const newCells = [...cells]
    let targetCell = newCells[index]
    if (targetCell === null) {
      targetCell = turn === OPTION.x ? OPTION.x : OPTION.o
      setTurn((curr) => (curr === OPTION.x ? OPTION.o : OPTION.x))
    }
    newCells[index] = targetCell
    setCells(newCells)
    const areAllCellsOccuped = newCells.every((cell) => cell !== null)
    areAllCellsOccuped && setFinish('tie')
  }
  return (
    <>
      <Head title='Tic Tac Toe' />
      <HeaderLayout>Tic Tac Toe</HeaderLayout>
      <MainLayout>
        <section className='grid grid-cols-3 w-[300px] h-[300px] justify-items-center'>
          {cells.map((cellValue, index) => {
            return (
              <Cell key={index} index={index} handleClick={handleClick}>
                {cellValue}
              </Cell>
            )
          })}
          <section className='flex w-[300px] h-[300px] justify-evenly mx-auto gap-10 mt-8 text-4xl '>
            <Cell
              styles={` ${
                turn === OPTION.x && 'bg-green-500'
              } rounded-xl w-[100px] h-[100px] flex items-center justify-center`}
            >
              {OPTION.x}
            </Cell>
            <Cell
              styles={` ${
                turn === OPTION.o && 'bg-green-500'
              } rounded-xl w-[100px] h-[100px] flex items-center justify-center`}
            >
              {OPTION.o}
            </Cell>
          </section>
        </section>
      </MainLayout>
    </>
  )
}
