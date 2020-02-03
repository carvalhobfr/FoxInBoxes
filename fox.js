class Fox {
  constructor(game) {
    this.game = game;
    this.positionX = 50;
    this.positionY = 500;
    this.height = 50;
    this.width = 100;
    this.setKeyboardEventListeners()
  }

  /*
  runLogic() {
    switch (this.direction) {
      case 'down':
        next.positionX += this.width;
        break;
      case 'up':
        next.positionX -= this.width;
        this.drawBox();
        break;
    }
  };
  */

  drawFox() {
    //console.log("im draw fox")
    const foxImage = new Image();
    foxImage.src = './Images/jump.gif';
    this.game.context.drawImage(foxImage, this.positionX, this.positionY, 50, 100);
  }

  drawBox() {
    const boxImage = new Image();
    boxImage.src = './Images/big-crate.png';
    this.game.context.drawImage(boxImage, this.positionX, this.positionY + this.height, 40, 50);
    for (let i = 0; i < 5; i++) {
      box.push(boxs);   /// máximo de caixas na tela 11 abaixo da raposa.
    }
  }

  moveUp() {
    console.log("im being called")
    if (this.positionX + this.width < this.game.context.canvas.width && this.positionY > 0) {
      console.log("condition met")
      this.positionY -= this.width;
      //drawBox();
    }
  }

  moveDown() {
    if (this.positionX + this.width < this.game.context.canvas.width && this.positionY < 490) {
      this.positionY += this.width;
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
