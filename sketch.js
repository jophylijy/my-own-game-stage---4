var boy,boy_running;
var dog;
var ground;
var food;
var home;
var ground_img;
var rock_img;
var sticks_img;
var ObstaclesGroup;
var gameState;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;
function preload(){
boy_running = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png");
ground_img = loadImage("ground.png");
rock_img = loadImage("rocks.png");
sticks_img = loadImage("sticks.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
boy = createSprite(100,700,14,10);
boy.addAnimation("running",boy_running);
ground = createSprite(50,720,4000,10);
ground.shapeColor = "green"
//  ground.addImage("ground",ground_img);
  ground.x = width/2
  ground.velocityX = -5
invisibleGround = createSprite(200,750,400,10);
invisibleGround.visible = false;
obstaclesGroup = new Group();

}

function draw(){
  background("white");
  console.log(boy.y);
  text("Score: "+ score, 500,50);
  if(gameState === PLAY){
    score = score + Math.round(frameCount/60);
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
    if (keyDown("SPACE") && boy.y>=520){
      boy.velocityY = -25;
    }
    boy.velocityY = boy.velocityY+1;
    boy.collide(invisibleGround);
    
    spawnRocks();
    if (obstaclesGroup.isTouching(boy)){
      gameState = END
    }
  }
  if(gameState === END){
  text("Game Over!",800,800);
  boy.velocityX
  }
    drawSprites();


}
function spawnRocks(){
  if(frameCount%100===0){
    var obstacle = createSprite(1000,650,10,40)
    obstacle.velocityX = -6;
    obstacle.scale = 0.3
 
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(sticks_img);
              break;
      case 2: obstacle.addImage(rock_img);
              break;
      default: break;
  }
  obstaclesGroup.add(obstacle);
}
}