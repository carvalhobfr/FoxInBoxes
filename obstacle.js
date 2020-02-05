class Obstacle {
  constructor(game, posX) {
    this.game = game;
    this.positionX = posX + 900;
    this.positionY = 0;
    this.width = 0;
    this.height = 0;
    this.setRandomPosition();
  }

  setRandomPosition() {
    this.height = 50 + Math.random() * 50;
    this.width = 100 + Math.random() * 10;
    this.positionY = 50 + Math.random() * 450;
  }

  drawObstacle() {
    const obstacleImage = new Image();
    obstacleImage.src = './Images/Obstacles/baladomario.png';
    this.game.context.drawImage(obstacleImage, this.positionX, this.positionY, this.width, this.height);
  }

  checkCollision() {
    const fox = this.game.fox
    let foxX = fox.positionX;
    let foxY = fox.positionY;
    let foxW = fox.width;
    let foxH = fox.height;

    let obsX = this.positionX;
    let obsY = this.positionY;
    let obsW = this.width;
    let obsH = this.height;

    if (foxX + foxW > obsX + obsW && foxX < obsX + obsW / 2 && foxY + foxH * 2 > obsY && foxY < obsY + obsH / 2) {
      this.game.gameIsRunning = false;
    }
  }


  runLogic() {
    let speed = Math.random() * 20;
    this.positionX -= speed;
    this.checkCollision();
  }
};
