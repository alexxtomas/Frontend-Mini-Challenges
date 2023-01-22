import Cell from '@/components/Cell'
import Head from '@/components/Head'
import HeaderLayout from '@/components/layouts/HeaderLayout'
import MainLayout from '@/components/layouts/MainLayout'
import Modal from '@/components/Modal'
import { useEffect, useState } from 'react'

const OPTION = {
  X: 'X',
  O: 'O'
}

const WIN_CONDITIONS = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(OPTION.X)
  const [winner, setWinner] = useState(null)

  const handleBoardClick = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === OPTION.X ? OPTION.O : OPTION.X
    setTurn(newTurn)

    for (let combo of WIN_CONDITIONS) {
      const [a, b, c] = combo
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        setWinner(OPTION[newBoard[a]])
      }
    }
    const areAllboardOccuped = newBoard.every((cell) => cell !== null)
    areAllboardOccuped && setWinner(false)
  }
  const handleRestartGameClick = () => {
    setBoard(Array(9).fill(null))
    setTurn(OPTION.X)
    setWinner(null)
  }
  return (
    <>
      <Head title='Tic Tac Toe' />
      <HeaderLayout>Tic Tac Toe</HeaderLayout>
      <MainLayout>
        <section className='grid grid-cols-3 w-[300px] h-[300px] justify-items-center'>
          {board.map((cell, index) => {
            return (
              <Cell key={index} index={index} handleClick={handleBoardClick}>
                {cell}
              </Cell>
            )
          })}
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
        </section>
        {winner !== null && <Modal winner={winner} handleClick={handleRestartGameClick} />}
      </MainLayout>
    </>
  )
}
