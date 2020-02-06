class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext("2d");
    this.obstacles = [];
    this.gameIsRunning = false;
    this.score = 0;
    this.timer = 0
    this.speed = 950
    this.setKeyboardEventListeners();

  }
  createObstacles() {
    let obstacle = new Obstacle(this, 500);
    this.obstacles.push(obstacle);
    this.positionY = 100 + Math.random() * 450;
  }


  paint(timestamp) {
    this.cleanCanvas();
    this.box.drawBox();
    this.fox.drawFox(timestamp);
    this.scoreboard.paint();
    //loop through the box array to draw
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].drawObstacle();
    }
  }

  runLogic(timestamp) {

    //TODO - Create a logic that pushes obstacles to an array every x seconds
    if (this.timer < timestamp - this.speed) {
      this.speed *= 0.991
      this.createObstacles();
      this.timer = timestamp

      console.log(timestamp)
    }

    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].runLogic();
    }
    this.box.deleteBox();
  }

  cleanCanvas = () => {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  };

  start() {
    audio.play();
    this.reset()
    if (!this.gameIsRunning) {
      this.gameIsRunning = !this.gameIsRunning;
      this.loop();
    }
    setKeyboardEventListeners();

  }

  loop = timestamp => {
    this.paint(timestamp);
    this.runLogic(timestamp);
    if (this.gameIsRunning) {
      window.requestAnimationFrame(this.loop);
    }
  };




  reset() {
    this.score = 0;
    this.speed = 950;
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

  setKeyboardEventListeners() {
    //console.log("im being called")
    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 32:
          this.fox.moveUp();
          break;
        case 40:
          this.fox.moveDown();
          break;
      }
    });
  };

};


    // lose() {
    //   if (this.isRunning == false) {
    //     this.reset();
    //   }
    // }
