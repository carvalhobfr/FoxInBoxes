var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// images

var runner = new Image();
runner.src = "Images/run.gif";

var bg = new Image();
bg.src = "Images/back.png";

var fg = new Image();
fg.src = "images/fg.png";

var obstacle1 = new Image();
obstacle1.src = "Images/platform-long.png";

var obstacle2 = new Image();
obstacle2.src = "Images/big-crate.png";



//-------------images done--------------///

runnerXposition = 10
runnerYposition = 300
gravity = 0.1;
score = 0;


// obstacles

var espaçoObst = [];

espaçoObst[0] = {
  x: cvs.width,
  y: 0
}

//----obstacles done---//

//-run logic----//

switch (this.runnerYposition) {
  case '38':
    this.runnerYposition -= 25;
    gravity = 5;
    clearScreen()
    break;
  case '40':
    this.runnerYposition += 25;
    gravity = 5;
    clearScreen()
    break;

}

//----run logic done---//

//--draw---//
function clearScreen() {
  ctx.clearRect(0, 0, 300, 200);
}
function draw() {
  clearScreen()
  ctx.drawImage(bg, 0, 0);

  ctx.drawImage(fg, 0, cvs.height - fg.height);

  ctx.drawImage(runner, this.runnerXposition, this.runnerYposition);


  ctx.fillStyle = "white";
  ctx.font = "20px Verdana";
  ctx.fillText("Score : " + score, 10, cvs.height - 20);
  requestAnimationFrame(draw);
}


draw();























