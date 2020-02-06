class Fox {
  constructor(game) {
    this.game = game;
    this.positionX = GRID_SIZE;
    this.positionY = GRID_SIZE * 10;
    this.height = GRID_SIZE;
    this.width = GRID_SIZE * 2;
    this.box = game.box;
  }

  drawFox() {
    const foxImage = new Image();
    foxImage.src = './Images/jump.gif';
    this.game.context.drawImage(foxImage, this.positionX, this.positionY, this.height, this.width);
  }

  moveUp() {
    if (this.positionX + this.width < this.game.context.canvas.width && this.positionY > -GRID_SIZE) {
      this.positionY -= this.height;
      this.game.box.createaBox();
    }
  }

  moveDown() {
    if (this.positionX + this.width < this.game.context.canvas.width && this.positionY < 490) {
    }
  }


};
