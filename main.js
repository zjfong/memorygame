


var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//console.log(cardOne === cardTwo);
//console.log(cardOne == cardFour);
/*if (cardOne === cardTwo) {
	alert('You found a match!');
} else if (cardThree === cardFour) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}*/

var gameBoard = document.getElementById('game-board');

var createBoard = function(){

for (var i=0; i<4; i++){
	var createDiv = document.createElement('div');
	createDiv.className = 'card';
    gameBoard.appendChild(createDiv);
}



}
createBoard();