var seaImg, sea;
var ship, ship_moving, edges;

function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(1000,700);
  
  sea = createSprite(200,50,95,10);
  sea.addImage("sea",seaImg);
  sea.x = sea.width /2;
  sea.velocityX = -4;

  ship = createSprite(180,160,20,50);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.5;
  
}

function draw() {
  background("blue");
  
  if (sea.x < 0){
    sea.x = sea.width/2;
  }
  
  drawSprites();
}