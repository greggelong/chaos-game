let a, b, c, target;
let axoff =0;
let ayoff =1000;
let bxoff =2000;
let byoff =3000;
let cxoff =4000
let cyoff =5000;

function setup() {
  createCanvas(400, 400);
  background(0);
  //mousePressed();
}

function draw() {
  
  updateIt();
  
  for (let i = 0; i < 1000; i++) {

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


function updateIt(){
  background(0);
  a = createVector(noise(axoff)*width, noise(ayoff)*height);
  b = createVector(noise(bxoff)*width, noise(byoff)*height);
  c = createVector(noise(cxoff)*width, noise(cyoff)*height);
  target = createVector(random(width), random(height));
  stroke(0, 255, 0);
  strokeWeight(1);
  point(a.x, a.y);
  point(b.x, b.y);
  point(c.x, c.y);
  point(target.x, target.y);
  
  axoff+=0.007;
  ayoff+=0.007;
  bxoff+=0.007;
  byoff+=0.007;
  cxoff+=0.007;
  cyoff+=0.007;

  

  
  
  
  
  
}