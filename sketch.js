var frect, mrect

function setup() {
  createCanvas(800, 400);
  frect = createSprite(400, 200, 50, 90);
  mrect = createSprite(200, 100, 50, 80)
  frect.shapeColor = "green"
  mrect.shapeColor = "green"

}

function draw() {
  background(255, 255, 255);
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;

  if (mrect.x - frect.x < mrect.width / 2 + frect.width / 2 &&
    frect.x-mrect.x <   mrect.width / 2 + frect.width / 2)
   {
    frect.shapeColor = "red"
    mrect.shapeColor = "red"
  }
  else {
    frect.shapeColor = "green"
    mrect.shapeColor = "green"
  }
  drawSprites();
}