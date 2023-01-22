import { WIN_CONDITIONS } from '@/constants/tic-tac-toe'
export function checkWinnerFrom(board) {
  for (let combo of WIN_CONDITIONS) {
    const [a, b, c] = combo
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

export function checkEndGame(board) {
  return board.every((cell) => cell !== null)
}
