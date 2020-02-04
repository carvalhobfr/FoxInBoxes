class Box {
  constructor(game) {
    this.game = game;
    this.height = GRID_SIZE;
    this.width = GRID_SIZE;
    this.positionX = GRID_SIZE;
    this.positionY = GRID_SIZE * 10;
  }

  drawBox() {
    for (let box of this.game.boxs) {
      this.game.context.drawImage(boxImage, box.positionX, box.positionY, this.width, this.height);
      //console.log(box);
    }
  };
}

///box.positionX game.fox.positionX + 10
const boxImage = new Image()
console.log("draw box now!!!")
boxImage.src = './Images/big-crate.png';