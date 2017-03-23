// function restart () {
//   grid = []
// }
// //
// function isGameOver () {
//   if (grid.length === 0) return false
//   // if (grid[0] === 0 && grid[2] === 1 && grid[4] === 2) {
//   //   return true
//   if (!whoWon) {
//     return true
//   } else {
//     return false
//   }
// }
//
// // simulateGame('P1 Top Row Victory', [0, 3, 1, 4, 2], playerOne)
// // simulateGame('P2 Top Row Victory', [8, 0, 3, 1, 4, 2], playerTwo)
// // simulateGame('P1 Middle Row Victory', [3, 0, 4, 1, 5], playerOne)
// // simulateGame('P2 Middle Row Victory', [8, 3, 0, 4, 1, 5], playerTwo)
// // simulateGame('P1 Bottom Row Victory', [6, 0, 7, 4, 8], playerOne)
// // simulateGame('P2 Bottom Row Victory', [2, 6, 0, 7, 4, 8], playerTwo)
// // simulateGame('P1 Left Col Victory', [0, 4, 3, 5, 6], playerOne)
// // simulateGame('P2 Left Col Victory', [1, 0, 4, 3, 5, 6], playerTwo)
// // simulateGame('P1 Middle Col Victory', [1, 2, 4, 3, 7], playerOne)
// // simulateGame('P2 Middle Col Victory', [0, 1, 2, 4, 3, 7], playerTwo)
// // simulateGame('P1 Right Col Victory', [2, 1, 5, 3, 8], playerOne)
// // simulateGame('P2 Right Col Victory', [0, 2, 1, 5, 3, 8], playerTwo)
// // simulateGame('P1 TL to BR Victory', [0, 2, 4, 5, 8], playerOne)
// // simulateGame('P1 TL to BR Victory', [1, 0, 2, 4, 5, 8], playerTwo)
// // simulateGame('P2 TR to BL Victory', [2, 1, 4, 3, 6], playerOne)
// // simulateGame('P2 TR to BL Victory', [0, 2, 1, 4, 3, 6], playerTwo)
// // simulateGame('Draw Game', [0, 1, 2, 3, 5, 4, 6, 8, 7], playerDraw)
//
// function whoWon () {
//   if (grid.length === 0) { return 0 }
//
//   if (grid[0] === 0 && grid[2] === 1 && grid[4] === 2 ||
//       grid[0] === 3 && grid[2] === 4 && grid[4] === 5 ||
//       grid[0] === 6 && grid[2] === 7 && grid[4] === 8 ||
//       grid[0] === 0 && grid[2] === 3 && grid[4] === 6 ||
//       grid[0] === 1 && grid[2] === 4 && grid[4] === 7 ||
//       grid[0] === 2 && grid[2] === 5 && grid[4] === 8 ||
//       grid[0] === 0 && grid[2] === 4 && grid[4] === 8 ||
//       grid[0] === 2 && grid[2] === 4 && grid[4] === 6
//     ) {
//     return currentPlayer
//   } else if (
//       grid[1] === 0 && grid[3] === 1 && grid[5] === 2 ||
//       grid[1] === 3 && grid[3] === 4 && grid[5] === 5 ||
//       grid[1] === 6 && grid[3] === 7 && grid[5] === 8 ||
//       grid[1] === 0 && grid[3] === 3 && grid[5] === 6 ||
//       grid[1] === 1 && grid[3] === 4 && grid[5] === 7 ||
//       grid[1] === 2 && grid[3] === 5 && grid[5] === 8 ||
//       grid[1] === 0 && grid[3] === 4 && grid[5] === 8 ||
//       grid[1] === 2 && grid[3] === 4 && grid[5] === 6) {
//     return currentPlayer
//   } else if (grid.length === 9) {
//     return 3
//   } else {
//     return false
//   }
// }
//
// function playTurn (index) { // index indicates where the current player's token should be played
//   // return Boolean value
//   if (currentPlayer === 1) {
//     currentPlayer = currentPlayer + 1
//   } else {
//     currentPlayer = currentPlayer - 1
//   }
//   var varForIsGameOver = isGameOver()
//   if (!isGameOver) {
//     return false
//   } else if (grid.includes(index)) {
//     return false
//   } else {
//     if (varForIsGameOver === false) {
//       grid.push(index)
//       console.log(grid)
//       return true
//     }
//   }
// }
//
// var grid = []
// var currentPlayer = 2



var grid = [null, null, null, null, null, null, null, null, null]
var player = 1
function playTurn (index) {
  if (grid[index] || isGameOver()) {
    return false
  } else {
    grid[index] = player
    if (player === 1) player = 2
    else player = 1
    return true
  }
}

function isGameOver () {
  if (whoWon()) return true
  return false
}

function whoWon () {
  if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
  if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) return grid[3]
  if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) return grid[6]
  if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) return grid[0]
  if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) return grid[1]
  if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) return grid[2]
  if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) return grid[0]
  if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) return grid[2]
  if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
    grid[5] && grid[6] && grid[7] && grid[8]) return 3
  return 0
}

function restart () {
  grid = [null, null, null, null, null, null, null, null, null]
  player = 1
}
