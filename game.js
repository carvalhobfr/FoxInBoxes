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
    for (let i = 0; i < 50; i++) {
      let obstacle = new Obstacle(this, i * 500);
      this.obstacles.push(obstacle);
      // console.log(this.obstacles);
    }
  }

  deleteBox() {
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
          this.boxs.pop();
          this.fox.positionY = this.obstacle.positionY 
        };
      }
    }
  }
  paint() {
    this.cleanCanvas();
    this.fox.drawFox();
    this.box.drawBox();
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
    }
    this.deleteBox();
  }

  cleanCanvas = () => {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  };

  start() {
    //this.reset();
    this.loop();

  }

  // reset() {
  //   this.fox = new Fox(this);
  //   this.obstacle = new Obstacle(this);
  //   this.cleanCanvas();
  //   this.gameIsRunning = true;
  // }

  loop = timestamp => {
    this.paint();
    this.runLogic();
    // console.log("hello")
    if (this.gameIsRunning) {
      window.requestAnimationFrame(this.loop);
    }
  };


};

