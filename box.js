class Box {
  constructor(game) {
    this.game = game;
    this.height = GRID_SIZE;
    this.width = GRID_SIZE;
    this.positionX = GRID_SIZE;
    this.positionY = GRID_SIZE * 10;
    this.boxes = [];
  }

  drawBox() {
    for (let box of this.boxes) {
      this.game.context.drawImage(boxImage, box.positionX, box.positionY, this.width, this.height);
    }
  };


  createaBox() {
    if (this.boxes.length < 11) {
      this.boxes.push({
        positionX: 50,
        positionY: 550 - GRID_SIZE * (this.boxes.length)
      })
      this.game.score += 1
    };
    //console.log(this.boxs)
  };
}


///box.positionX game.fox.positionX + 10
const boxImage = new Image()
// console.log("draw box now!!!")
boxImage.src = './Images/big-crate.png';