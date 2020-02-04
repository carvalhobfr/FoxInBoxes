class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext("2d");
    this.obstacles = [];
    this.fox = new Fox(this);
    this.createObstacles();
    this.gameIsRunning = true
    // create an array of boxes 
    this.boxs = [];
  }

  // Create a logic that pushes new Boxes to the box array everytime you move

  // createBox() {
  //   let box = new Box(this.positionX, this.positionY + game.fox.height * 2);
  //   this.boxs.push(box);

  // }


  createObstacles() {
    for (let i = 0; i < 50; i++) {
      let obstacle = new Obstacle(this, i * 500);
      this.obstacles.push(obstacle);
    }
  }

  paint() {
    //console.log("im paint and im running")
    this.cleanCanvas();
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
    }

  }

  cleanCanvas = () => {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  };

  start() {
    this.reset();
    this.loop();

  }

  reset() {
    this.fox = new Fox(this);
    this.obstacle = new Obstacle(this);
    this.cleanCanvas();
    this.gameIsRunning = true;
  }

  loop = timestamp => {
    this.paint();
    this.runLogic();

    if (this.gameIsRunning) {
      window.requestAnimationFrame(this.loop);
    }
  };


}

