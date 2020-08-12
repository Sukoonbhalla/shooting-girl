var ground,groundImage;
var girl,girlImg;
var invisibleGround,targets;
var target1,target1Img;
var target2,target2Img;
var target3,target3Img;
var target4,target4Img;
var target5,target5Img;
var target6,target6Img;
var bullet;


function preload(){
  girlImg=loadImage("images/download.png");
  groundImage = loadImage("images/ground.png");
  target1Img = loadImage("images/target 1.png");
  target2Img = loadImage("images/target 2.png");
  target3Img = loadImage("images/target 3.png");
  target4Img = loadImage("images/target 4.png");
  target5Img = loadImage("images/target 5.png");
  target6Img = loadImage("images/target 6.png");



  }

function setup() {
  createCanvas(windowWidth,windowHeight);
 girl =  createSprite(120,height-200,20,70);
 girl.addAnimation("girl1",girlImg);
 girl.scale = 0.3;
 

 invisibleGround = createSprite(width/2,height-10,width,125);  
 invisibleGround.shapeColor =  "#f4cbaa";
 //invisibleGround.visible = false;

 ground = createSprite(width/2,height,width,2);
 // ground.shapeColor = "red";
  ground.addImage("ground",groundImage);
  ground.scale = 4
  ground.x = width/2;
  ground.velocityX = -6; 

  targetsGroup = new Group();
  bulletGroup = new Group();

 

 //  targets = createSprite(windowWidth,height-290,20,30);
 //targets.velocityX = -5;
  //targets.velocityY = 5;
}

function draw() {

 
  background(0); 
  if(ground.x<0){
   ground.x = ground.width/2 
   }
  spawnObject();

 if(bulletGroup.isTouching(targetsGroup)){
   targetsGroup.destroyEach();
   
 }
  drawSprites();
  
  
}
function spawnObject(){
  if(frameCount % 200===0){
    targets = createSprite(windowWidth,height-290,20,30);
    targets.velocityX = -5;
    //targets.velocityY = 5;
   // targets.bounceOff(invisibleGround);
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: targets.addImage(target1Img);
              break;
      case 2: targets.addImage(target2Img);
              break;
      case 3: targets.addImage(target3Img);
              break;
              case 4: targets.addImage(target4Img);
              break;
              case 5: targets.addImage(target5Img);
              break;
              case 6: targets.addImage(target6Img);
              break;
      default: break;
      targetsGroup.add(target);
    }
    targets.setCollider("circle",0,0,350);
      }
}
function keyPressed(){
  if (keyCode === 32){
  createBullet();
  }
}
function createBullet(){
  bullet = createSprite(120,height - 290,20,5);
    bullet.velocityX = 10 ;
   // bullet.x = 360;
    bullet.shapeColor = "red";
   // bullet.x = girl.x;
   //  return bullet;
     bulletGroup.add(bullet);
  
}

