const $canvas = document.querySelector('canvas');
const ctx = $canvas.getContext("2d");
const game = new Game($canvas);

window.addEventListener("load", function paintStart() {
  ctx.drawImage(startImage, 150, 0, 600, 600);
});


if (!game.gameIsRunning) {
  window.addEventListener('keydown', event => {
    switch (event.keyCode) {
      case 13:
        game.start();
    }
  });

}



// document.getElementById('start-button').onclick = function () {
//   game.start();
// }

