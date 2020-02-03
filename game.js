class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext("2d");
    this.obstacles = []
    this.fox = new Fox(this)
    this.createObstacles()
    this.gameIsRunning = true

  }
  paint() {
    //console.log("im paint and im running")
    this.cleanCanvas();
    this.fox.drawFox();
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].drawObstacle();
    }
  }

  createObstacles() {
    for (let i = 0; i < 50; i++) {
      let obstacle = new Obstacle(this, i * 800);
      this.obstacles.push(obstacle);
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

