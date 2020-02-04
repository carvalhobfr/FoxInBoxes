class Fox {
  constructor(game) {
    this.game = game;
    this.positionX = 50;
    this.positionY = 500;
    this.height = 50;
    this.width = 100;
    this.box = game.box;
    this.setKeyboardEventListeners()
  }


  drawFox() {
    const foxImage = new Image();
    foxImage.src = './Images/jump.gif';
    this.game.context.drawImage(foxImage, this.positionX, this.positionY, 50, 100);
  }

  moveUp() {
    if (this.positionX + this.width < this.game.context.canvas.width && this.positionY > -50) {
      this.positionY -= this.height;
      console.log(game.box.positionY);
    }
  }

  moveDown() {
    if (this.positionX + this.width < this.game.context.canvas.width && this.positionY < 490) {
      this.positionY += this.height;
      //drawBox();

    }
  }

  setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 38:
          this.moveUp();
          break;
        case 40:
          this.moveDown();
          break;
      }
    });
  }
};
