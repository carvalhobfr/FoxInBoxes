const GRID_SIZE = 50;
const gameOverImage = new Image;
gameOverImage.src = './Images/gameover2.png';

const startImage = new Image;
startImage.src = './Images/pressenter.png';

const foxImage1 = new Image();
foxImage1.src = './Images/Sunny-land-files/PNG/sprites/player/idle/player-idle-1.png'
const foxImage2 = new Image();
foxImage2.src = './Images/Sunny-land-files/PNG/sprites/player/idle/player-idle-2.png'
const foxImage3 = new Image();
foxImage3.src = './Images/Sunny-land-files/PNG/sprites/player/idle/player-idle-3.png'
const foxImage4 = new Image();
foxImage4.src = './Images/Sunny-land-files/PNG/sprites/player/idle/player-idle-4.png'
let shift = 1;
let currentFrame = 1;
let totalFrame = 4;


const foxImageDie = new Image();
foxImageDie.src = './Images/Sunny-land-files/PNG/sprites/player/hurt/player-hurt-1.png'