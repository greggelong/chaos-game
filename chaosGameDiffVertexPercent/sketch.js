let a, b, c, target;

//three different line segment lengths
//for the three different seed points

let perc = 0.50;   //red  
let perc1 = 0.15;  // green
let perc2 = 0.75;  //  blue



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
      target.x = lerp(target.x, a.x, perc);
      target.y = lerp(target.y, a.y, perc);


    } else if (r == 1) {
      stroke(0, 255, 0);
      target.x = lerp(target.x, b.x, perc1);
      target.y = lerp(target.y, b.y, perc1);


    } else if (r == 2) {
      stroke(0, 0,255);
      target.x = lerp(target.x, c.x, perc2);
      target.y = lerp(target.y, c.y, perc2);


    }
  }
}