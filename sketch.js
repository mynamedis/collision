var wall
var waffle



function setup() {

  createCanvas(800,400);
  wall=createSprite(400,200,90,90)
  wall.shapeColor= "purple"
  waffle.createSprite(600,300,50,50)
    waffle.shapeColor= "yellow"
    
}

function draw() {
  background(255,255,255);  
waffle.x=World.mouseX
waffle.y=World.mouseY

if(waffle.x-wall.x<wall.width/2+waffle.width/2) {

waffle.shapeColor = "red"
wall.shapeColor = "red"
}

drawSprites();
}