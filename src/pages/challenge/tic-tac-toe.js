import Cell from '@/components/Cell'
import Head from '@/components/Head'
import HeaderLayout from '@/components/layouts/HeaderLayout'
import MainLayout from '@/components/layouts/MainLayout'
import { useState } from 'react'

const OPTION = {
  x: 'X',
  o: 'O'
}

export default function TicTacToe() {
  const [cells, setCells] = useState(['', '', '', '', '', '', '', '', ''])
  const [turn, setTurn] = useState(OPTION.x)
  return (
    <>
      <Head title='Tic Tac Toe' />
      <HeaderLayout>Tic Tac Toe</HeaderLayout>
      <MainLayout>
        <section className='grid grid-cols-3 w-[300px] h-[300px] justify-items-center'>
          {cells.map((cellValue, index) => {
            return (
              <Cell
                key={index}
                setCells={setCells}
                index={index}
                cells={cells}
                turn={turn}
                option={OPTION}
                setTurn={setTurn}
              >
                {cellValue}
              </Cell>
            )
          })}
          <section className='flex w-[300px] h-[300px] justify-evenly mx-auto gap-10 mt-4 text-4xl '>
            <div className='border w-[100px] h-[100px] text-center  '>{OPTION.x}</div>
            <div>{OPTION.o}</div>
            {/* {
              Object.keys(OPTION).map()
            } */}
          </section>
        </section>
      </MainLayout>
    </>
  )
}
