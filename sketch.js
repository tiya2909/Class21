
var fixedRect, movingRect;
var gameObject1 , gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "violet";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "violet";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
  if (isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "pink";
    gameObject1.shapeColor = "pink";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";

  }

  drawSprites();
}






