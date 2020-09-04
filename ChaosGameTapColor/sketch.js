
let nop = 3; // number of points around the circle
let seedPoints =[];
let theta;
let r;
let target;
let ppoint = -1;// so it will be diff the first time
let clrs;

let perc = 0.50;    


function setup() {
  
  if (windowHeight > windowWidth){
  createCanvas(windowWidth, windowWidth);
    
    
    
  }else{
    createCanvas(windowHeight, windowHeight);
  }
  r =width/2
  translate(width/2,height/2);
  clrs = [color(255,0,0), color(0,255,0), color(0,0,255), color(255,255,0), color(255,0,255), color(0,255,255), color(100,100,100)]
  seedIt();
   
}



function draw() {
  translate(width/2,height/2);
  for (let i = 0; i < 1000; i++) {

   
    
    //let randPoint = random(seedPoints);
     let rand =  floor(random(nop));
     if (rand != ppoint){
     
      
      target.x = lerp(target.x, seedPoints[rand].x, perc);
      target.y = lerp(target.y, seedPoints[rand].y, perc);
      stroke(clrs[rand%7]);
      strokeWeight(1);
      point(target.x,target.y);
      ppoint = rand;
     }
  }
}

function mousePressed(){
  
  nop = floor(random(3,10));
  perc = random(0.50,0.59);
  seedIt();
  
  
  
}

function seedIt(){
  seedPoints =[];
  background(0);
  // populate the array with seed points
  stroke(255,255,0);
  strokeWeight(3);
  target = createVector(random(width),random(height));
  point(target.x,target.y);
  
   
  noFill();
  stroke(0,255,0);
  strokeWeight(1);
  ellipse(0,0,r*2,r*2);
  
  for (let i=0;i<nop;i++){
    theta = (TWO_PI/nop)*i;
    let y = sin(theta)*r;
    let x = cos(theta)*r;
    
    let seed = createVector(x,y);
    seedPoints.push(seed);
    
  }
  
   for (let seed of seedPoints){  // print seed poins
     push();
    
     stroke(255,0,0);
     strokeWeight(1);
     point(seed.x,seed.y);
     
     pop();
     
     
   }
  textSize(20);
  text(nop,-width/2+20,-height/2+20);
  text(perc.toFixed(2),-width/2+5,-height/2+50); //only 2 decimal places
  
  
  
}
  
