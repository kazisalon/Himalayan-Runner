// game.js
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const game = {
	score: 0,
	isGameOver: false,
	obstacles: [],
};

const backgroundColors = ["#FFD700", "#228B22", "#87CEEB", "#8B4513"];

function gameLoop() {
	updateGame();
	renderGame();
	if (!game.isGameOver) {
		requestAnimationFrame(gameLoop);
	}
}

function updateGame() {
	updatePlayer();
	updateObstacles();
	checkCollisions();
	addNewObstacles();
}

function renderGame() {
	clearCanvas();
	drawBackground();
	drawPlayer();
	drawObstacles();
	drawScore();
	drawGameOver();
}

// Start the game
gameLoop();
