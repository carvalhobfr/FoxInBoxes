class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext("2d");
    this.obstacles = [];
    this.fox = new Fox(this);
    this.box = new Box(this);
    this.createObstacles();
    this.gameIsRunning = true
    // create an array of boxes 
    this.boxs = [];
  }

  // Create a logic that pushes new Boxes to the box array everytime you move

  createaBox() {
    if (this.boxs.length < 11) {
      this.boxs.push({
        positionX: 50,
        positionY: 550 - GRID_SIZE * (this.boxs.length)
      })
    };
    //console.log(this.boxs)
  };

  createObstacles() {
    for (let i = 0; i < 100; i++) {
      let obstacle = new Obstacle(this, i * 370);
      this.obstacles.push(obstacle);
      this.positionY = 50 + Math.random() * 450;
      this.positionX -= 10;
      // console.log(this.obstacles);
    }
    // for (let k = 0; k < 100; k++) {
    //   let obstacle2 = new Obstacle(this, k * 50000);
    //   this.obstacles.push(obstacle2);
    //   this.box.positionY = 0 + Math.random() * 50;
    //   // console.log(this.obstacles);
    // }
  }

  deleteBox() {
    let k = 0;
    for (let obstacle in this.obstacles) {
      for (let box in this.boxs) {
        let boxY = this.boxs[box].positionY;
        let boxX = this.boxs[box].positionX;
        let boxW = 50;
        let boxH = 50;
        let obsX = this.obstacles[obstacle].positionX;
        let obsY = this.obstacles[obstacle].positionY;
        let obsH = this.obstacles[obstacle].height;
        let obsW = this.obstacles[obstacle].width;
        // console.log("check colision", boxY, boxX, boxW, boxH, obsX, obsY, obsH, obsW);

        // if (boxX + boxW > obsX + obsW && boxX < obsX + obsW && boxY + boxH * 2 > obsY && boxY < obsY + obsH / 2) 
        // console.log("i dont know")
        if (boxX + boxW > obsX && boxX < obsX + obsW && boxY + boxH > obsY && boxY < obsY + obsH) {
          k += 1;


        };
      }
    }
    if (k != 0) {
      this.boxs.splice(-2, 2);
      this.fox.positionY = this.fox.positionY + 2 * GRID_SIZE;
      this.fox.drawFox();
      this.obstacles.splice(0, 1);

    }


  }
  paint() {
    this.cleanCanvas();
    this.box.drawBox();
    this.fox.drawFox();
    //loop through the box array to draw
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].drawObstacle();
    }
  }
  lose() {
    // this.isRunning = false;
    this.reset();
  }

  runLogic() {
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].runLogic();
      this.cleanCanvas();
      this.deleteBox();
    }
  }

  cleanCanvas = () => {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  };

  start() {
    //this.reset();
    this.loop();

  }

  loop = timestamp => {
    this.runLogic();
    this.paint();
    // console.log("hello")
    if (this.gameIsRunning) {
      window.requestAnimationFrame(this.loop);
    }
  };


};



  // reset() {
  //   this.fox = new Fox(this);
  //   this.obstacle = new Obstacle(this);
  //   this.cleanCanvas();
  //   this.gameIsRunning = true;
  // }