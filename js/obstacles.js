// obstacles.js
const obstacleWidth = 60;
const obstacleHeight = 80;

function updateObstacles() {
	game.obstacles.forEach((obstacle, i) => {
		obstacle.x -= 5;
		if (obstacle.x + obstacleWidth < 0) {
			game.obstacles.splice(i, 1);
			game.score++;
		}
	});
}

function addNewObstacles() {
	if (
		game.obstacles.length === 0 ||
		game.obstacles[game.obstacles.length - 1].x < canvas.width - 200
	) {
		game.obstacles.push({
			x: canvas.width,
			y: canvas.height - obstacleHeight,
		});
	}
}

function drawObstacles() {
	ctx.fillStyle = "#000";
	game.obstacles.forEach((obstacle) => {
		ctx.fillRect(obstacle.x, obstacle.y, obstacleWidth, obstacleHeight);
	});
}

function checkCollisions() {
	game.obstacles.some((obstacle) => {
		if (
			player.x < obstacle.x + obstacleWidth &&
			player.x + player.width > obstacle.x &&
			player.y < obstacle.y + obstacleHeight &&
			player.y + player.height > obstacle.y
		) {
			game.isGameOver = true;
			return true;
		}
		return false;
	});
}
