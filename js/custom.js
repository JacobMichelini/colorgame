


var askedColor = document.querySelector(".topbar h1");

var squares = document.querySelectorAll(".color-box");

var feedback = document.querySelector(".feedback");

var topbar = document.querySelector(".topbar");

var easyButton = document.querySelector(".easy");
var hardButton = document.querySelector(".hard");

var resetButton = document.querySelector(".new-colors");

var score = 0;

var colors = generateRandColorArray(6);
var winColor = pickRandomColorFromArray();
askedColor.textContent = winColor;
feedback.textContent = score;

//change all squares to a set color
function changeAllColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	topbar.style.backgroundColor = winColor;
}

function pickRandomColorFromArray() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandColorArray(num) {
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

//reset the game (auto)
function reset() {
	colors = generateRandColorArray(6);
	winColor = pickRandomColorFromArray();
	askedColor.textContent = winColor;
	topbar.style.backgroundColor = "skyblue";
	feedback.classList.toggle("scored");
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
}

//reset manual
resetButton.addEventListener("click", function() {
	colors = generateRandColorArray(6);
	winColor = pickRandomColorFromArray();
	askedColor.textContent = winColor;
	topbar.style.backgroundColor = "skyblue";
	score = 0;
	feedback.textContent = score;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
});

easyButton.addEventListener("click", function() {
	alert("easy");
});

hardButton.addEventListener("click", function() {
	alert("hard");
});

for (var i = 0; i < squares.length; i++) {
	//set colors
	squares[i].style.backgroundColor = colors[i];
	//add click event
	squares[i].addEventListener("click", function() {
		//detects color clicked
		var clickedColor = this.style.backgroundColor;
		//if correct
		if (clickedColor === winColor) {
			changeAllColors(winColor);
			score++;
			feedback.textContent = score;
			feedback.classList.toggle("scored");
			askedColor.textContent = "CORRECT!!!";
			setTimeout(reset, 1000);
		} else {
			//if wrong 
			score = 0;
			feedback.textContent = score;
			this.style.backgroundColor = "transparent";
		}
	});
};

