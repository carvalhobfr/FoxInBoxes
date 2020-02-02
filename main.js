const $canvas = document.querySelector('canvas');

const context = $canvas.getContext('2d');

let gameIsRunning = true;

function drawBoard() {
  context.fillStyle = 'black';
}


class Fox {
  constructor() {
    this.positionX = context.canvas.width - 500;
    this.positionY = context.canvas.height - 200;
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
    context.drawImage(boxImage, this.positionX - 40, this.positionY - 40, this.width, this.height);   ////como desenhar a caixa abaixo da raposa ?
  }

  moveUp() {
    if (this.positionX > this.width) {
      this.positionY -= 40;
      drawBox(); ///isso não deu certo
      drawEverything();
    }
  }

  moveDown() {
    if (this.positionX + this.width * 2 < context.canvas.width) {
      this.positionY += 40;
      drawEverything();
    }
  }

  setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 38:
          fox.moveUp();
          break;
        case 40:
          fox.moveDown();
          break;
      }
    });
  }
}

let fox = new Fox();

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
    this.positionY = Math.random() * 15git 0;
  }

  drawObstacle() {
    context.fillStyle = 'pink';
    context.fillRect(this.positionX, this.positionY, this.width, this.height);
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
    this.positionX -= 2;
    this.checkCollision();
  }
}

let obstacles = [];
for (let i = 0; i < 50; i++) {
  let obstacle = new Obstacle(i * 500);
  obstacles.push(obstacle);
}

let runLogic = () => {
  for (let obstacle of obstacles) {
    obstacle.runLogic();
  }
};

const cleanCanvas = () => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
};

window.onload = function () {
  document.getElementById('start-button').onclick = function () {
    startGame();

    function startGame() {
      function drawEverything() {
        cleanCanvas();
        drawBoard();
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