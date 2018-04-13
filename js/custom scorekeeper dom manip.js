var P1btn = document.querySelector(".btnOne");
var P2btn = document.querySelector(".btnTwo");
var reset = document.querySelector(".reset");
var scoreboard = document.querySelector(".scoreboard");
var maxScoreSlider = document.querySelector(".maxScoreSlider");
var maxScoreDisplay = document.querySelector("h2")

var maxScore = 5;
var P1score = 0;
var P2score = 0;
var gameOver = false;

function updateScoreboard() {
	scoreboard.textContent = P1score + " to "+ P2score;
}

maxScoreSlider.addEventListener("change", function(){
	maxScore = Number(maxScoreSlider.value);
	maxScoreDisplay.textContent = "Playing to: " + maxScore;
});

P1btn.addEventListener("click", function(){
	if (!gameOver) {
		P1score++;
		if (P1score === maxScore) {
			gameOver = true;
		}
		updateScoreboard();
	}
});

P2btn.addEventListener("click", function(){
	if (!gameOver) {
		P2score++;
		if (P2score === maxScore) {
			gameOver = true;
		}
		updateScoreboard();
	}
});


reset.addEventListener("click", function(){
	P1score = 0;
	P2score = 0;
	gameOver = false;
	updateScoreboard();
	maxScore = 5;
	maxScoreSlider.value = 5;
	maxScoreDisplay.textContent="Playing to: " + maxScore;
});

