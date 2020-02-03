const $canvas = document.querySelector('canvas');

const context = $canvas.getContext('2d');

let gameIsRunning = true;




///bg---------------->
const imageUrls = new Image;
imageUrls.src = './Images/back.png'


class Background {
  constructor(width, height) {
    width = this.width;
    height = this.height
  }

  drawBg() {
    const $canvas = context.canvas;
    const width = $canvas.width;
    const height = $canvas.height;

    const foxImage = new Image();
    foxImage.src = './Images/back.png';
    context.drawImage(imageUrls, this.width, this.height);
  }
}
let background = new Background;



///end of bg--------<

////Fox ------------------>

class Fox {
  constructor() {
    this.positionX = context.canvas.width - 800;
    this.positionY = context.canvas.height - 130;
    this.width = 50;
    this.height = 100;
    this.setKeyboardEventListeners();
  }

  drawFox() {
    const foxImage = new Image();
    foxImage.src = './Images/jump.gif';
    context.drawImage(foxImage, this.positionX, this.positionY, this.width, this.height);
  }

  drawBox() {
    const boxImage = new Image();
    boxImage.src = './Images/big-crate.png';
    context.drawImage(boxImage, this.positionX, this.positionY + this.height, 40, 50);
    for (let i = 0; i < 5; i++) {
      box.push(boxs);   /// máximo de caixas na tela 11 abaixo da raposa.
    }



  }

  moveUp() {
    if (this.positionX > this.width && this.positionY > 0) {
      this.positionY -= this.width;
      drawBox()
    }
  }

  moveDown() {
    if (this.positionX + this.width * 2 < context.canvas.width && this.positionY < 490) {
      this.positionY += this.width;

    }
  }

  setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 38:
          this.moveUp();
          break;
        case 40:
          this.moveDown();
          break;
      }
    });
  }
}
var boxs = [];
let fox = new Fox();


///End of Fox--------<


///Obstacle-------->

class Obstacle {
  constructor(positionX) {
    this.positionX = positionX;
    this.positionY = 100;
    this.width = 0;
    this.height = 0;
    this.setRandomPosition();
  }

  setRandomPosition() {
    this.height = 10 + Math.random() * 20;
    this.width = 100 + Math.random() * 30;
    this.positionY = Math.random() * 700 + 20;
  }

  drawObstacle() {
    const obstacleImage = new Image();
    obstacleImage.src = './Images/platform-long.png';
    context.drawImage(obstacleImage, this.positionX, this.positionY, this.width, this.height);
  }

  checkCollision() {
    let foxX = fox.positionX;
    let foxY = fox.positionY;
    let foxW = fox.width;
    let foxH = fox.height;

    let obsX = this.positionX;
    let obsY = this.positionY;
    let obsW = this.width;
    let obsH = this.height;

    if (foxX + foxW > obsX && foxX < obsX + obsW && foxY + foxH > obsY && foxY < obsY + obsH) {
      gameIsRunning = false;
    }
  }

  runLogic() {
    this.positionX -= 1;
    this.checkCollision();
  }
}

let obstacles = [];
for (let i = 0; i < 50; i++) {
  let obstacle = new Obstacle(i * 800);
  obstacles.push(obstacle);
}

let runLogic = () => {
  for (let obstacle of obstacles) {
    obstacle.runLogic();
  }
};


///End of Obstacle--------<

const cleanCanvas = () => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
};

window.onload = function () {
  document.getElementById('start-button').onclick = function () {
    startGame();

    function startGame() {
      function drawEverything() {
        cleanCanvas();
        background.drawBg();
        fox.drawFox();

        for (let obstacle of obstacles) {
          obstacle.drawObstacle();
        }
      }
      let loop = timestamp => {
        drawEverything();
        runLogic();
        if (gameIsRunning) {
          window.requestAnimationFrame(loop);
        }
      };
      loop();
    }
  };
};