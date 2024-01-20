const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
const logsLeft = document.querySelectorAll(".log-left");
const logsRight = document.querySelectorAll(".log-right");
const carsLeft = document.querySelectorAll(".car-left");
const carsRight = document.querySelectorAll(".car-right");

let currentIndex = 76;

function moveFrog() {
 switch (e.key) {
   case "ArrowLeft":
     if (currentIndex % width !== 0) currentIndex -= 1;
     break;
   case "ArrowRight":
     if (currentIndex % width < width - 1) currentIndex += 1;
     break;
   case "ArrowUp":
     if (currentIndex - width >= 0) currentIndex -= width;
     break;
   case "ArrowDown":
     if (currentIndex + width < width * width) currentIndex += width;
     break;
 }

  squares[currentIndex].classList.add('frog');
}

document.addEventListener('keyup', moveFrog);