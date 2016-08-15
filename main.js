


/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/

//console.log(cardOne === cardTwo);
//console.log(cardOne == cardFour);
/*if (cardOne === cardTwo) {
  alert('You found a match!');
} else if (cardThree === cardFour) {
  alert('You found a match!');
} else {
  alert('Sorry, try again.');
}*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

var createBoard = function(){

for (var i=0; i<cards.length; i++){
  var cardElement = document.createElement('div');
  cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    gameBoard.appendChild(cardElement);
}




var isKingOrQueen = function(){
  if (cardElement.getAttribute('data-card') === 'king'){
    cardElement.innerHTML = '<img src="my_king.png" alt="King of Spades" />';
  } else if (cardElement.getAttribute('data-card') === 'queen'){
    cardElement.innerHTML = '<img src="my_queen.png" alt="Queen of Hearts" />';
  }
}

var isTwoCards = function(){
  cardsInPlay.push(this.getAttribute('data-card'));
  if (cardsInPlay.length === 2){
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

var isMatch = function(x){
  if (x[0] === x[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry, try again.');
  }
  cardElement.innerHTML = '';
}


for (var i=0; i<cards.length; i++){
  //cardElement.addEventListener('click', isKingOrQueen);
  cardElement.addEventListener('click', isTwoCards);
}





}
createBoard();
