class Fox {
  constructor(game) {
    this.game = game;
    this.positionX = GRID_SIZE;
    this.positionY = GRID_SIZE * 10;
    this.height = GRID_SIZE;
    this.width = GRID_SIZE * 2;
    this.box = game.box;
    this.animationSpeed = 150
    this.timer = 0

  }

  drawFox(timestamp) {
    if (this.timer < timestamp - this.animationSpeed) {
      this.timer = timestamp
      switch (currentFrame) {
        case 1: this.game.context.drawImage(foxImage1, this.positionX, this.positionY, this.height, this.width);
          break;
        case 2: this.game.context.drawImage(foxImage2, this.positionX, this.positionY, this.height, this.width);
          break;
        case 3: this.game.context.drawImage(foxImage3, this.positionX, this.positionY, this.height, this.width);
          break;
        case 4: this.game.context.drawImage(foxImage4, this.positionX, this.positionY, this.height, this.width);
          break;
        case 5: this.game.context.drawImage(foxImage5, this.positionX, this.positionY, this.height, this.width);
          break;
        case 6: this.game.context.drawImage(foxImage6, this.positionX, this.positionY, this.height, this.width);
          break;
        case 7: this.game.context.drawImage(foxImage7, this.positionX, this.positionY, this.height, this.width);
          break;
        case 8: this.game.context.drawImage(foxImage8, this.positionX, this.positionY, this.height, this.width);
          break;
        case 9: this.game.context.drawImage(foxImage9, this.positionX, this.positionY, this.height, this.width);
          break;
        case 10: this.game.context.drawImage(foxImage10, this.positionX, this.positionY, this.height, this.width);
          break;
        case 11: this.game.context.drawImage(foxImage11, this.positionX, this.positionY, this.height, this.width);
          break;
        case 12: this.game.context.drawImage(foxImage12, this.positionX, this.positionY, this.height, this.width);
          break;
        case 13: this.game.context.drawImage(foxImage13, this.positionX, this.positionY, this.height, this.width);
          break;
        case 14: this.game.context.drawImage(foxImage14, this.positionX, this.positionY, this.height, this.width);
          break;
        case 15: this.game.context.drawImage(foxImage15, this.positionX, this.positionY, this.height, this.width);
          break;
      }
      if (currentFrame === totalFrame) {
        currentFrame = 1
      } else {
        currentFrame++
      }
    } else {
      switch (currentFrame) {
        case 1: this.game.context.drawImage(foxImage1, this.positionX, this.positionY, this.height, this.width);
          break;
        case 2: this.game.context.drawImage(foxImage2, this.positionX, this.positionY, this.height, this.width);
          break;
        case 3: this.game.context.drawImage(foxImage3, this.positionX, this.positionY, this.height, this.width);
          break;
        case 4: this.game.context.drawImage(foxImage4, this.positionX, this.positionY, this.height, this.width);
          break;
        case 5: this.game.context.drawImage(foxImage5, this.positionX, this.positionY, this.height, this.width);
          break;
        case 6: this.game.context.drawImage(foxImage6, this.positionX, this.positionY, this.height, this.width);
          break;
        case 7: this.game.context.drawImage(foxImage7, this.positionX, this.positionY, this.height, this.width);
          break;
        case 8: this.game.context.drawImage(foxImage8, this.positionX, this.positionY, this.height, this.width);
          break;
        case 9: this.game.context.drawImage(foxImage9, this.positionX, this.positionY, this.height, this.width);
          break;
        case 10: this.game.context.drawImage(foxImage10, this.positionX, this.positionY, this.height, this.width);
          break;
        case 11: this.game.context.drawImage(foxImage11, this.positionX, this.positionY, this.height, this.width);
          break;
        case 12: this.game.context.drawImage(foxImage12, this.positionX, this.positionY, this.height, this.width);
          break;
        case 13: this.game.context.drawImage(foxImage13, this.positionX, this.positionY, this.height, this.width);
          break;
        case 14: this.game.context.drawImage(foxImage14, this.positionX, this.positionY, this.height, this.width);
          break;
        case 15: this.game.context.drawImage(foxImage15, this.positionX, this.positionY, this.height, this.width);
          break;
      }
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
