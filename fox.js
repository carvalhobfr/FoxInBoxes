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
    switch (currentFrame) {
      case 1: this.game.context.drawImage(foxImage1, this.positionX, this.positionY, this.height, this.width);
        break;
      case 2: this.game.context.drawImage(foxImage2, this.positionX, this.positionY, this.height, this.width);
        break;
      case 3: this.game.context.drawImage(foxImage3, this.positionX, this.positionY, this.height, this.width);
        break;
      case 4: this.game.context.drawImage(foxImage4, this.positionX, this.positionY, this.height, this.width);
        break;

      default:
        break;
    }
    if (currentFrame === totalFrame) {
      currentFrame = 1
    } else {
      currentFrame++
    }
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
