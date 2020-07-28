var ground;
var girl,girlImg;

function preload(){
  girlImg=loadImage("images/download.png");
  

}

function setup() {
  createCanvas(400,400);
 girl =  createSprite(120,265,20,50);
 girl.addAnimation("girl1",girlImg);
 girl.scale = 3.5;

  ground = createSprite(200,380,400,10);

  ground.shapeColor = "red";
  ground.x = width/2;
  ground.velocityX = -3; 
}

function draw() {
 
 
  background(0); 
  if(ground.x<0){
   ground.x = ground.width/2 
  }
  spawnObject();
  drawSprites();
}
function spawnObject(){
  if(frameCount % 60===0){
  var targets = createSprite(200,200,20,20);
  targets.velocityX = -2;
  }
}