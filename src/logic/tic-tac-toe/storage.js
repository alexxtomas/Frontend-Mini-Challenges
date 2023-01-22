export function saveGameToStroage({ cells, turn }) {
  window.localStorage.setItem('tic-tac-toe', JSON.stringify({ cells, turn }))
}
export function resetGameStorage() {
  window.localStorage.removeItem('tic-tac-toe')
}
