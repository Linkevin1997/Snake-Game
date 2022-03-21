//create the board. this board has 144 cells inside the grid.
const grid = document.querySelector('.grid');
let snake = document.querySelector('.Snake');

let currentSpot = 77, lastSpot
let snakeSegments = []

for (let i = 1; i <= 144; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  grid.append(cell)
}

// grid.children[77].append(snake)
if (snakeSegments.length === 0) {
  // grid.children[77].classList.add("Snake")
  snakeSegments.push(grid.children[currentSpot])
  for (let i = 0; i < snakeSegments.length; i++) {
    snakeSegments[snakeSegments.length - 1]?.classList?.remove("Snake")
  }
  updateSnakeSegments() // Update segments to correct area
  for (let i = 0; i < snakeSegments.length; i++) {
    snakeSegments[i]?.classList?.add("Snake")
  }
}

//create food first:
let food = document.querySelector('.Food')
let foodSpot = [Math.floor((Math.random() * 144) + 1)]
grid.children[foodSpot].append(food)

//food changes location after the snake eats the food
let scoreCount = 0
let score = document.querySelector('.score')
score.innerHTML = scoreCount

function eatFood() {
  if (currentSpot === foodSpot[0]) {
    scoreCount += 1
    score.innerHTML = scoreCount
    grid.children[currentSpot].removeChild(food)
    addSegment()
    foodSpot = [Math.floor((Math.random() * 144) + 1)]
    grid.children[foodSpot].append(food)
  }
}

//eat the food increase the snake by one.
function addSegment() {
  snakeSegments.push(grid.children[currentSpot])
}

// let snakeSegments = [grid.children[75], grid.children[76]]

// [RESOLVE] => Update snakesegment so that it copies element at previous index
function updateSnakeSegments() {
  for (let i = snakeSegments.length - 1; i > 1; i--) {
    console.log(snakeSegments[i], snakeSegments[i - 1])
    snakeSegments[i] = snakeSegments[i - 1]
  }

  snakeSegments[0] = grid.children[currentSpot]
}

//make the snake move.
document.onkeydown = checkKey;
function checkKey(e) {
  const event = window.event ? window.event : e;
  if (e.keyCode == '38') {
    lastSpot = currentSpot
    currentSpot -= 12
    // grid.children[currentSpot].append(snake) // This draws snake
    for (let i = 0; i < snakeSegments.length; i++) {
      snakeSegments[snakeSegments.length - 1]?.classList?.remove("Snake")
    }
    eatFood() // Eat food and add segment
    updateSnakeSegments() // Update segments to correct area
    for (let i = 0; i < snakeSegments.length; i++) {
      snakeSegments[i]?.classList?.add("Snake")
    }
    // up arrow
  }
  else if (e.keyCode == '40') {
    currentSpot += 12
    // grid.children[currentSpot].append(snake)
    for (let i = 0; i < snakeSegments.length; i++) {
      snakeSegments[snakeSegments.length - 1]?.classList?.remove("Snake")
    }
    eatFood() // Eat food and add segment
    updateSnakeSegments() // Update segments to correct area
    for (let i = 0; i < snakeSegments.length; i++) {
      snakeSegments[i]?.classList?.add("Snake")
    }
    // down arrow
  }
  else if (e.keyCode == '37') {
    currentSpot -= 1
    // grid.children[currentSpot].append(snake)
    for (let i = 0; i < snakeSegments.length; i++) {
      snakeSegments[snakeSegments.length - 1]?.classList?.remove("Snake")
    }
    eatFood() // Eat food and add segment
    updateSnakeSegments() // Update segments to correct area
    for (let i = 0; i < snakeSegments.length; i++) {
      snakeSegments[i]?.classList?.add("Snake")
    }
    // left arrow
  }
  else if (e.keyCode == '39') {
    lastSpot = currentSpot
    currentSpot += 1
    // grid.children[currentSpot].append(snake)
    for (let i = 0; i < snakeSegments.length; i++) {
      snakeSegments[snakeSegments.length - 1]?.classList?.remove("Snake")
    }
    eatFood() // Eat food and add segment
    updateSnakeSegments() // Update segments to correct area
    for (let i = 0; i < snakeSegments.length; i++) {
      snakeSegments[i]?.classList?.add("Snake")
    }
    // right arrow
  }
}