import Head from '@/components/Head'
import HeaderLayout from '@/components/layouts/HeaderLayout'
import MainLayout from '@/components/layouts/MainLayout'
import Board from '@/components/tic-tac-toe/Board'
import Cell from '@/components/tic-tac-toe/Cell'
import GameTurns from '@/components/tic-tac-toe/GameTurns'
import Modal from '@/components/tic-tac-toe/Modal'
import { OPTION, WIN_CONDITIONS } from '@/constants/tic-tac-toe/index'
import { checkEndGame, checkWinnerFrom } from '@/logic/tic-tac-toe/board'
import { useEffect, useState } from 'react'

export default function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(OPTION.X)
  const [winner, setWinner] = useState(null)

  const handleCellClick = (index) => {
    if (cells[index] || winner) return
    const newCells = [...cells]
    newCells[index] = turn
    setCells(newCells)

    const newTurn = turn === OPTION.X ? OPTION.O : OPTION.X
    setTurn(newTurn)

    const newWinner = checkWinnerFrom(newCells)
    if (newWinner) setWinner(newWinner)
    else if (checkEndGame(newCells)) setWinner(false)
  }
  const handleRestartGameClick = () => {
    setCells(Array(9).fill(null))
    setTurn(OPTION.X)
    setWinner(null)
  }
  return (
    <>
      <Head title='Tic Tac Toe' />
      <HeaderLayout>Tic Tac Toe</HeaderLayout>
      <MainLayout>
        <Board cells={cells} handleCellClick={handleCellClick} />
        <GameTurns turn={turn} />
        {winner !== null && <Modal winner={winner} handleClick={handleRestartGameClick} />}
      </MainLayout>
    </>
  )
}
