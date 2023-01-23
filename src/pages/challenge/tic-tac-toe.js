import Head from '@/components/Head'
import HeaderLayout from '@/components/layouts/HeaderLayout'
import MainLayout from '@/components/layouts/MainLayout'
import Board from '@/components/tic-tac-toe/Board'
import EndGameModal from '@/components/tic-tac-toe/EndGameModal'
import GameTurns from '@/components/tic-tac-toe/GameTurns'
import ResetGame from '@/components/tic-tac-toe/ResetGame'
import { OPTION } from '@/constants/tic-tac-toe/index'
import { checkEndGame, checkWinnerFrom } from '@/logic/tic-tac-toe/board'
import { resetGameStorage, saveGameToStroage } from '@/logic/tic-tac-toe/storage'
import confetti from 'canvas-confetti'
import { useEffect, useState } from 'react'

export default function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(OPTION.X)
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    const gameState = JSON.parse(window.localStorage.getItem('tic-tac-toe'))
    console.log(gameState)
    if (gameState?.cells && gameState?.turn) {
      setCells(gameState.cells)
      setTurn(gameState.turn)
    }
  }, [])

  const handleCellClick = (index) => {
    if (cells[index] || winner) return
    const newCells = [...cells]
    const newTurn = turn === OPTION.X ? OPTION.O : OPTION.X

    newCells[index] = turn

    setCells(newCells)
    setTurn(newTurn)
    saveGameToStroage({ cells: newCells, turn: newTurn })

    const newWinner = checkWinnerFrom(newCells)
    if (newWinner) {
      confetti({
        spread: 80,
        particleCount: 200
      })
      setWinner(newWinner)
      resetGameStorage()
    } else if (checkEndGame(newCells)) {
      setWinner(false)
      resetGameStorage()
    }
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
        <ResetGame handleClick={handleRestartGameClick} />
        {winner !== null && <EndGameModal winner={winner} handleClick={handleRestartGameClick} />}
      </MainLayout>
    </>
  )
}
