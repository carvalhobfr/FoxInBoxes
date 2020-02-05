const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

document.getElementById('start-button').addEventListener("click", () => {
  game.start();

})

console.log(game.box)

// document.getElementById('start-button').onclick = function () {
//   game.start();
// }

