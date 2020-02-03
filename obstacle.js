class Obstacle {
  constructor(game, posX) {
    this.game = game;
    this.positionX = posX;
    this.positionY = 0;
    this.width = 0;
    this.height = 0;
    this.setRandomPosition();
  }

  setRandomPosition() {
    this.height = 10 + Math.random() * 200;
    this.width = 100 + Math.random() * 30;
    this.positionY = 20 + Math.random() * 450;
  }

  drawObstacle() {
    const obstacleImage = new Image();
    obstacleImage.src = './Images/platform-long.png';
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





    if (foxX + foxW > obsX + obsW / 2 && foxX < obsX + obsW && foxY + foxH > obsY && foxY < obsY + obsH) {
      this.game.gameIsRunning = false;
    }
  }

  runLogic() {
    this.positionX -= 2;
    this.checkCollision();
  }
};
