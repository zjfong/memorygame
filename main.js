console.log("JS file is connected to HTML! Woo!")


var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log(cardOne === cardTwo);
console.log(cardOne == cardFour);

if (cardOne === cardTwo) {
	alert('You found a match!');
} else if (cardThree === cardFour) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}