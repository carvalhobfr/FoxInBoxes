const $canvas = document.querySelector('canvas');

const game = new Game($canvas);




document.getElementById('start-button').onclick = function () {
  if (game.gameIsRunning === false) {
    game.reset();

  }
}
game.start();

