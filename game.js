class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext("2d");
    this.obstacles = [];
    this.fox = new Fox(this);
    this.box = new Box(this);
    this.createObstacles();
    this.gameIsRunning = false;
    this.score = 0;
    this.scoreboard = new Scoreboard(this);
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
      this.box.deleteBox();
    }
  }

  cleanCanvas = () => {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  };

  start() {
    this.gameIsRunning = true;
    this.loop();

  }

  loop = timestamp => {
    this.paint();
    this.runLogic();
    if (this.gameIsRunning === true) {
      window.requestAnimationFrame(this.loop);
    }
  };

  reset() {
    this.box.boxes = []
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