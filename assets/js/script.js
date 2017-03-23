// document.addEventListener('DOMContentLoaded', function () {
//   // put code inside here
//   var firstNumInput = document.getElementById('firstNum')
//   var secondNumInput = document.getElementById('secondNum')
//   var operatorInput = document.getElementById('operator')
//   var button = document.getElementById('button')
//   var resultsContainer = document.getElementById('resultsContainer')
//
//   button.addEventListener('click', function () {
//     button.style.top = '500px'
//     var firstNum = firstNumInput.value
//     console.log(firstNum)
//     var secondNum = secondNumInput.value
//     var operator = operatorInput.value
//
//     // if(firstNum.match(/[0-9]+/) && secondNum.match(/[0-9]+/) && (operator === '+' || operator === '-' || operator === '*' || operator === '/')){
//     if (firstNum.match(/[0-9]+/) && secondNum.match(/[0-9]+/) && operator.match(/[-+\/*]/)) {
//       resultsContainer.textContent = eval(firstNum + operator + secondNum)
//     } else {
//       alert('not valid input')
//     }
//   }) // end of addEventListener
//
// }) //end of document.addEventListener

// console.log('it worked')
//
// var listItems = document.getElementsByClassName('list-item')
//
// console.log(listItems)
//
// for (var i = 0; i < listItems.length; i++) {
//   listItems[i].textContent = 'something'
// }
//
// function list(names){
//   var finalStr = names.reduce(function(accu, val, index){ //remember to set the return of the annonymous function to a variable!!!
//   if(index === names.length-1){ //check if we're in the last index
//   accu += ' & ' + val.name
//   } else if(index === names.length-2){ //check if we're at right before the last index
//   accu+= val.name}
//   else {
//   accu+= val.name + ', '
//   }
//   return accu
//   }, '') //set the first accu as a string because in this case, the first accu is an object
//   return finalStr
// }
//
//
//
// function printAllNames(){
//   alert('printAllNames')
//   var allNames = document.querySelectorAll('.list-item')
//   list(allNames)
// }
//
// var button = document.querySelector('button')
// button.addEventListener('click', printAllNames)

$(document).ready(function () {
  var $container = $('.container')
  var $boxArray = $container.find('.box')
  var $restartButton = $('.restart')
  var player = 2
  var grid = [null, null, null, null, null, null, null, null, null]

  $boxArray.on('click', function (e) {

    var box = e.target
    var index = $boxArray.index(e.target)

    playTurnResult = playTurn(index)
    updateGrid(box)
    isGameOver()
  }) // end of on click boxArray

  $restartButton.on('click', restart)

  function updateGrid (box) {
    if (playTurnResult) {
      console.log(player)
      if(player === 1){
        box.textContent = 'X'
      } else {
        box.textContent = 'O'
      }

    } else {
      console.log('cannot')
    }
  }
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
    if (whoWon() === 1 || whoWon() === 2) {
      alert('player ' + player + ' has won')
      return true
    } else if(whoWon()===3){
      alert("it's a tie")
      return true
    } else {
      return false
    }
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
    $grid = $('.grid')
    $grid.children().text('')
    player = 1
  }
}) // end of document.ready function
