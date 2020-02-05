class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext("2d");
    this.obstacles = [];
    this.gameIsRunning = false;
    this.score = 0;
  }


  createObstacles() {
    for (let i = 0; i < 100; i++) {
      let obstacle = new Obstacle(this, i * 370);
      this.obstacles.push(obstacle);
      this.positionY = 50 + Math.random() * 500;
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
    }
    this.box.deleteBox();
  }

  cleanCanvas = () => {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  };

  start() {
    this.reset()
    if (!this.gameIsRunning) {
      this.gameIsRunning = !this.gameIsRunning;
      this.loop();
    }
  }

  loop = timestamp => {
    this.paint();
    this.runLogic();
    if (this.gameIsRunning) {
      window.requestAnimationFrame(this.loop);
    }
  };

  reset() {
    this.score = 0;
    //Reset obstacles array
    this.obstacles = [];
    this.createObstacles();
    // Creates a new fox, reseting it
    this.fox = new Fox(this);
    // Creates a new box, reseting it
    this.box = new Box(this);
    this.box.boxes = []
    //New scoreboard
    this.scoreboard = new Scoreboard(this);
  }
};


    // lose() {
    //   if (this.isRunning == false) {
    //     this.reset();
    //   }
    // }
