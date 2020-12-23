var canvas, backgroundImage;

var gameState =0;
var coins = 1000;

var form, player, game;

var archer, redKnight,witch;

var archerImg,redKnightImg,witchImg

function preload(){
  backgroundImg = loadImage("images/Background.jpg");
  archerImg = loadImage("images/Archer.png");
  redKnightImg = loadImage("images/Dark Knight.png");
  witchImg = loadImage("images/witch.jpg");
}

function setup(){
  canvas = createCanvas(1200, 800);
  game = new Game();
  game.start();
  
}


function draw(){
  background(backgroundImg)
  if(gameState === 1){
    game.level1();
  
  }
  if(gameState === 2){
    game.level2();
  }
  if(gameState === 3){
    game.end();
  }
}