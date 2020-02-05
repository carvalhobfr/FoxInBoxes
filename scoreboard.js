class Scoreboard {
  constructor(game) {
    this.game = game;

    this.$scoreSpan = document.querySelector('Score-point');
  }

  paint() {
    const score = 0;

    this.$scoreSpan.innerText = score;
    /*
    const context = this.game.context;

    context.save();

    context.font = '50px sans-serif';
    context.fillText(score, 25, 475);

    context.restore();
    */
  }
}