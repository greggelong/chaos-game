let a, b, c, target;

function setup() {
  createCanvas(400, 400);
  background(0);
  a = createVector(width / 2, 0);
  b = createVector(0, height);
  c = createVector(width, height);
  target = createVector(random(width), random(height));
  stroke(0, 255, 0);
  strokeWeight(1);
  point(a.x, a.y);
  point(b.x, b.y);
  point(c.x, c.y);
  point(target.x, target.y);

}

function draw() {
  for (let i = 0; i < 100; i++) {

    point(target.x, target.y);

    let r = floor(random(3));
    if (r == 0) {
      stroke(255, 0, 0);
      target.x = lerp(target.x, a.x, 0.5);
      target.y = lerp(target.y, a.y, 0.5);


    } else if (r == 1) {
      stroke(0, 255, 0);
      target.x = lerp(target.x, b.x, 0.5);
      target.y = lerp(target.y, b.y, 0.5);


    } else if (r == 2) {
      stroke(0, 0,255);
      target.x = lerp(target.x, c.x, 0.5);
      target.y = lerp(target.y, c.y, 0.5);


    }
  }
}