const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelectorAll('#time-left');
const score = document.querySelectorAll('#scoret');

let result = 0;

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole');
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add('mole');

  hitPosition = randomSquare.id;
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id === hitPosition) {
      result++;
      score.textContext = result;
      hitPosition = null;
    }
  })
});

function moveMole() {
  let timeId = null;
  timeId = setInterval(randomSquare, 500);
}

moveMole();