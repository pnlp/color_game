var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
// var randomIndex = Math.floor(Math.random() * 6);
var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById('message');
var titleDisplay = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyMode = document.querySelector("#easyMode");
var hardyMode = document.querySelector("#hardyMode");


easyMode.addEventListener("click", function(){
	easyMode.classList.add("selected");
	hardMode.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		// this works because colors has only 3 items in it
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
})

hardMode.addEventListener("click", function(){
	easyMode.classList.remove("selected");
	hardMode.classList.add("selected");
	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		// this works because colors has only 3 items in it
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
})
colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
	// generate all new colors
	colors = generateRandomColors(numSquares);
	console.log(colors)
	// change colorDisplay to match new picked color
	pickedColor = pickColor();
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	titleDisplay.style.backgroundColor = "steelblue";
	messageDisplay.textContent = ""
	this.textContent = "New Colors";
	colorDisplay.textContent = pickedColor;
});


for(var i = 0; i < squares.length; i++) {
	// add inital colors to squares
	var currentSquare = squares[i]
	currentSquare.style.backgroundColor = colors[i];

	// add click listeners to squares
	currentSquare.addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			// messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			// alert("YOU WON!");
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
};

function changeColors (color) {
	// loop through all squares setting them to right color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color
	};
	titleDisplay.style.backgroundColor = color
};

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};


function generateRandomColors(num) {
	// makes array
	var arr = []
	// add num random number to array
	for (var i = 0; i < num; i++){
		// get random color
		arr.push(randomColor())
	}
	//return array
	return arr 
}

function randomColor(){
	var redStr = Math.floor(Math.random() * 256);
	var greenStr = Math.floor(Math.random() * 256);
	var blueStr = Math.floor(Math.random() * 256);

	return "rgb(" + redStr + ", " + greenStr + ", " + blueStr + ")"		
}