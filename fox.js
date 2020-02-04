class Fox {
  constructor(game) {
    this.game = game;
    this.positionX = GRID_SIZE;
    this.positionY = GRID_SIZE * 10;
    this.height = GRID_SIZE;
    this.width = GRID_SIZE * 2;
    this.box = game.box;
    this.setKeyboardEventListeners()
  }


  drawFox() {
    const foxImage = new Image();
    foxImage.src = './Images/jump.gif';
    this.game.context.drawImage(foxImage, this.positionX, this.positionY, this.height, this.width);
  }

  moveUp() {
    if (this.positionX + this.width < this.game.context.canvas.width && this.positionY > -GRID_SIZE) {
      this.positionY -= this.height;
    }
    this.game.createaBox();
    //console.log("im running")
  }

  moveDown() {
    if (this.positionX + this.width < this.game.context.canvas.width && this.positionY < 490) {
      this.positionY += this.height;
      //drawBox();

    }
  }

  setKeyboardEventListeners() {
    //console.log("im being called")
    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 38:
          this.moveUp();
          console.log("keypressed")
          break;
        case 40:
          this.moveDown();
          console.log("keypressed")
          break;
      }
    });
  }
};
