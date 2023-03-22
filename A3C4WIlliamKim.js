function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);

  sped = 5;

  xLoc = 200;
  yLoc = 350;

  siz = 10;
  coll = siz * 10;

  projX = random(width);
  projY = 0;
  projSpd = 5;

  score = 0;

  anim = 0;
}

function draw() {
  //xLoc = 200
  //yLoc = 200
  background(220);
  projCaught = false;
  spawnProj(projX, projY);
  projY += projSpd;
  if (projY >= 400 || projCaught) {
    projY = 0;
    projX = random(width);
  }
  noStroke();
  fill("white");
  //rect(xLoc, yLoc, coll);
  catcherSprite(xLoc, yLoc, siz);
  if (keyIsDown(LEFT_ARROW)) {
    xLoc -= sped;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xLoc += sped;
  }
  if (xLoc >= width - coll / 2) {
    xLoc = width - coll / 2;
  }
  if (xLoc <= coll / 2) {
    xLoc = coll / 2;
  }
  if (projCaught) {
    projSpd += random(0, 0.25);
    console.log(projSpd);
  }
  if (projSpd >= 25) {
    projSpd = 24;
  }
  anim += 1;
}

function catcherSprite(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  noStroke();
  fill("dimgray");
  rect(0, 0, 5);
  fill("darkgray");
  if (anim < 5) {
    triangle(0, -5, -2.5, 2.5, 0, -1);
    triangle(0, -5, 2.5, 2.5, 0, -1);
  } else {
    triangle(-5, -5, -2.5, 2.5, -2, -2);
    triangle(5, -5, 2.5, 2.5, 2, -2);
  }
  pop();
}

function spawnProj(x, y) {
  push();
  noStroke();
  translate(x, y);
  fill("red");
  ellipse(0, 0, 15);
  if (
    projX < xLoc + coll / 2 &&
    projX > xLoc - coll / 2 &&
    projY > yLoc - coll / 2 &&
    projY < yLoc - coll / 4
  ) {
    projCaught = true;
    score += 1;
    console.log("caught " + score);
    anim = 0;
  }
  pop();
}
