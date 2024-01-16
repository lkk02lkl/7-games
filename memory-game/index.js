const cardArray = [
  {
    name: "fries",
    img: "img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "pizza",
    img: "img/pizza.png",
  },
  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
  {
    name: "hotdog",
    img: "img/hotdog.png",
  },
  {
    name: "fries",
    img: "img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "pizza",
    img: "img/pizza.png",
  },
  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
  {
    name: "hotdog",
    img: "img/hotdog.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector('#result');
let cardChosen = [];
let cardChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {

    const card = document.createElement("img");

    card.setAttribute('src', 'img/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    grid.append(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll('img');
  const option1 = cardChosenIds[0];
  const option2 = cardChosenIds[1];

  if (option1 == option2) {
    cards[option1].setAttribute("src", "img/blank.png");
    cards[option2].setAttribute("src", "img/blank.png");
    alert('You have clicked the same image!');
  }

  if (cardChosen[0] == cardChosen[1]) {
    alert('You found a match!');
    cards[option1].setAttribute('src', 'img/white.png');
    cards[option2].setAttribute('src', 'img/white.png');
    cards[option1].removeEventListener('click', flipCard);
    cards[option2].removeEventListener('click', flipCard);
    cardsWon.push(cardChosen);
  } else {
    cards[option1].setAttribute("src", "img/blank.png");
    cards[option2].setAttribute("src", "img/blank.png");
    alert('Sorry, try again!');
  }
  resultDisplay.textContent = cardsWon.length;
  cardChosen = [];
  cardChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "Congrats";
  }

 }

function flipCard() {
  const cardId = this.getAttribute('data-id');
  cardChosen.push(cardArray[cardId].name);
  cardChosenIds.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout( checkMatch, 500 );
  }
}