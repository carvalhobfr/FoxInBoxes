class Obstacle {
  constructor(positionX) {
    this.positionX = positionX;
    this.positionY = 100;
    this.width = 0;
    this.height = 0;
    this.setRandomPosition();
  }

  setRandomPosition() {
    this.height = 10 + Math.random() * 200;
    this.width = 100 + Math.random() * 30;
    this.positionY = Math.random() * 700 + 20;
  }

  drawObstacle() {
    const obstacleImage = new Image();
    obstacleImage.src = './Images/platform-long.png';
    context.drawImage(obstacleImage, this.positionX, this.positionY, this.width, this.height);
  }

  checkCollision() {
    let foxX = fox.positionX;
    let foxY = fox.positionY;
    let foxW = fox.width;
    let foxH = fox.height;

    let obsX = this.positionX;
    let obsY = this.positionY;
    let obsW = this.width;
    let obsH = this.height;

    if (foxX + foxW > obsX && foxX < obsX + obsW && foxY + foxH - 20 > obsY && foxY < obsY + obsH - 30) {
      gameIsRunning = false;
    }
  }

  runLogic() {
    this.positionX -= 2;
    this.checkCollision();
  }
}
