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
        positionX: this.positionX,
        positionY: 550 - GRID_SIZE * (this.boxes.length)
      })
    };

  };

  deleteBox() {
    let k = 0;
    for (let obstacle in this.game.obstacles) {
      //console.log(obstacle)
      for (let box in this.boxes) {
        let boxY = this.boxes[box].positionY;
        let boxX = this.boxes[box].positionX;
        let boxW = 50;
        let boxH = 50;
        let obsX = this.game.obstacles[obstacle].positionX;
        let obsY = this.game.obstacles[obstacle].positionY;
        let obsH = this.game.obstacles[obstacle].height;
        let obsW = this.game.obstacles[obstacle].width;
        if (boxX + boxW > obsX && boxX < obsX + obsW && boxY + boxH > obsY && boxY < obsY + obsH) {
          k += 1;
        }
        else if (obsX < 0) {
          this.game.obstacles.splice([obstacle], 1);
        }
      }
    }

    if (k != 0) {
      this.game.context.drawImage(boxExplosion, this.game.box.positionX - 60, this.game.obstacles[0].positionY + 10, this.game.fox.width * 2, this.game.fox.height * 2);
      this.boxes.splice(-2, 2);
      this.game.obstacles.splice(0, 1);
      this.game.fox.positionY = this.game.fox.positionY + 2 * GRID_SIZE;
      this.game.score += 1
      audioBreakCrates.play();

    }
  }

}


const boxImage = new Image()
boxImage.src = './Images/big-crate.png';