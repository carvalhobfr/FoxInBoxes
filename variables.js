const GRID_SIZE = 50;
const gameOverImage = new Image;
gameOverImage.src = './Images/gameover2.png';

const startImage = new Image;
startImage.src = './Images/pressenter.png';




const obstacleImage = new Image();
obstacleImage.src = './Images/Obstacles/baladomario.png';
const obstacleImage2 = new Image();
obstacleImage2.src = './Images/bullet2.png.jpg';


const foxImage1 = new Image();
foxImage1.src = './Images/Sunny-land-files/PNG/sprites/player/idle/player-idle-1.png'
const foxImage2 = new Image();
foxImage2.src = './Images/Sunny-land-files/PNG/sprites/player/idle/player-idle-2.png'
const foxImage3 = new Image();
foxImage3.src = './Images/Sunny-land-files/PNG/sprites/player/idle/player-idle-3.png'
const foxImage4 = new Image();
foxImage4.src = './Images/Sunny-land-files/PNG/sprites/player/idle/player-idle-4.png'
const foxImage5 = new Image();
foxImage5.src = './Images/Sunny-land-files/PNG/sprites/player/climb/player-climb-1.png'
const foxImage6 = new Image();
foxImage6.src = './Images/Sunny-land-files/PNG/sprites/player/climb/player-climb-2.png'
const foxImage7 = new Image();
foxImage7.src = './Images/Sunny-land-files/PNG/sprites/player/climb/player-climb-3.png'
const foxImage8 = new Image();
foxImage8.src = './Images/Sunny-land-files/PNG/sprites/player/run/player-run-1.png'
const foxImage9 = new Image();
foxImage9.src = './Images/Sunny-land-files/PNG/sprites/player/run/player-run-2.png'
const foxImage10 = new Image();
foxImage10.src = './Images/Sunny-land-files/PNG/sprites/player/run/player-run-3.png'
const foxImage11 = new Image();
foxImage11.src = './Images/Sunny-land-files/PNG/sprites/player/run/player-run-4.png'
const foxImage12 = new Image();
foxImage12.src = './Images/Sunny-land-files/PNG/sprites/player/run/player-run-5.png'
const foxImage13 = new Image();
foxImage13.src = './Images/Sunny-land-files/PNG/sprites/player/run/player-run-6.png'
const foxImage14 = new Image();
foxImage14.src = './Images/Sunny-land-files/PNG/sprites/player/jump/player-jump-1.png'
const foxImage15 = new Image();
foxImage15.src = './Images/Sunny-land-files/PNG/sprites/player/jump/player-jump-2.png'

let shift = 1;
let currentFrame = 1;
let totalFrame = 15;


const foxImageDie = new Image();
foxImageDie.src = './Images/Sunny-land-files/PNG/sprites/player/hurt/player-hurt-1.png'


const boxExplosion = new Image();
boxExplosion.src = './Images/Sunny-land-files/PNG/sprites/item-feedback/item-feedback-4.png'

///Sounds
var audio = new Audio('./Images/Hyper.wav');
var audioDie = new Audio("./Images/foxsounddie.mp3");

var audioBreakCrates = new Audio("./Images/crate-break.mp3")

var audioFoxSay = new Audio("./Images/what-does-the-fox-says-chorus.mp3");
audioFoxSay.loop = true;
