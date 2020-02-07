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
    this.activateAudioOnOffKey();
    this.audioOnOff = true;
  }
  createObstacles() {
    let obstacle = new Obstacle(this, 500);
    this.obstacles.push(obstacle);
    this.positionY = 100 + Math.random() * 400;
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

      // console.log(timestamp)
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
    this.openFullscreen();
    this.reset()
    if (!this.gameIsRunning) {
      this.gameIsRunning = !this.gameIsRunning;
      this.loop();
    }
    setKeyboardEventListeners();

  }


  activateAudioOnOffKey = () => {
    let _this = this;
    document.getElementById('audioOnOff').onclick = function () {
      if (_this.audioOnOff === true) {
        audio.pause();
        audioFoxSay.pause();
        _this.audioOnOff = false;
      } else {
        audio.play();
        _this.audioOnOff = true;
      }
    };
  };


  loop = timestamp => {
    this.paint(timestamp);
    this.runLogic(timestamp);
    if (this.gameIsRunning) {
      window.requestAnimationFrame(this.loop);
    }
  };


  reset() {
    audioFoxSay.pause();
    audio.play();
    audio.loop = true;
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
    window.addEventListener('keyup', event => {
      // console.log("key released")
      event.preventDefault();
      switch (event.keyCode) {
        case 32:
          this.fox.moveUp();
          break;
        case 40:
          event.preventDefault();
          this.fox.moveDown();
          break;
      }
    })
    window.addEventListener('keydown', event => {
      // console.log("key released")
      event.preventDefault();
    })
  };

  openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
  closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }
  }



};

