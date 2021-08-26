var garden,rabbit;
var gardenImg,rabbitImg;

var rab
var apple,apple2
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

 
rab = loadImage ("rabbit.png")
apple2 = loadImage ("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rab);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  if (keyDown("right")) {
    rabbit.velocityX= 4
    
    
  }
  if (keyDown("left")) {
    rabbit.velocityX = -4
    
    
  }
  spawnleaf
  spawnapple()
  drawSprites();
}
function spawnapple() {
 if (frameCount % 70 ===0) {
  apple = createSprite (10,10,50,50) 
  apple.addImage (apple2)
  apple.scale = 0.1
  apple.x = Math.round(random(13,400))
  apple.velocityY = 4

}

function spawnleaf() {
  









}