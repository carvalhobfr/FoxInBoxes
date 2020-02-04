class Box {
  constructor(game) {
    this.game = game;
    this.height = 50;
    this.width = 25;
    this.positionX = 50;
    this.positionY = 500;
  }

  drawBox() {
    const boxImage = new Image();
    console.log("draw box now!!!")
    boxImage.src = './Images/big-crate.png';
    this.game.context.drawImage(boxImage, game.fox.positionX + 10, game.fox.positionY + height * 2, this.width, this.height);

  }
};