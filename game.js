class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext("2d");
    this.obstacles = [];
    this.fox = new Fox(this);
    this.box = new Box(this);
    this.createObstacles();
    this.gameIsRunning = false;
    // create an array of boxes 
    this.score = 0;
    this.scoreboard = new Scoreboard(this);
  }


  createObstacles() {
    for (let i = 0; i < 100; i++) {
      let obstacle = new Obstacle(this, i * 370);
      this.obstacles.push(obstacle);
      this.positionY = 50 + Math.random() * 500;
      // console.log(this.obstacles);
    }
    // this.score = this.score + 3;
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
      this.obstacles.splice(0, 1);
      this.cleanCanvas();
      this.fox.drawFox();
      this.fox.positionY = this.fox.positionY + 2 * GRID_SIZE;
    }
  }

  paint() {
    this.cleanCanvas();
    this.box.drawBox();
    this.fox.drawFox();
    this.scoreboard.paint();
    //loop through the box array to draw
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].drawObstacle();
    }
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
    this.gameIsRunning = true;
    // this.reset();
    this.loop();
    // this.lose()

  }

  loop = timestamp => {
    this.runLogic();
    this.paint();
    if (this.gameIsRunning === true) {
      window.requestAnimationFrame(this.loop);
    }
  };

  reset() {
    this.boxs = []
    this.obstacles = [];
    this.fox = new Fox(this);
    this.box = new Box(this);
    this.score = 0;
    console.log("hello")
    this.gameIsRunning = true;
    this.cleanCanvas();
    this.loop();
    this.paint();
  }



};



    // lose() {
    //   if (this.isRunning == false) {
    //     this.reset();
    //   }
    // }

    // reset() {
    //   this.cleanCanvas();
    //   this.fox = new Fox(this);
    //   this.obstacle = new Obstacle(this);
    //   this.gameIsRunning = true;
    // }