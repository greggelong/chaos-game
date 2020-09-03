
int nop = 3; // number of points around the circle
PVector[] seedPoints;
float theta;
float r = 350;
PVector target;
 

float perc = 0.55;    


void setup() {
  size(700, 700);
  translate(width/2,height/2);
  seedIt();
   
}



void draw() {
  translate(width/2,height/2);
  for (int i = 0; i < 1000; i++) {

   
    
     int rand =  floor(random(nop));
      
      target.x = lerp(target.x, seedPoints[rand].x, perc);
      target.y = lerp(target.y, seedPoints[rand].y, perc);
      stroke(255, 161, 0);
      strokeWeight(1);
      point(target.x,target.y);
  }
}

void mousePressed(){
  
  nop = floor(random(3,10));
  perc = random(0.55,0.75);
  seedIt();
  
  
  
}

void seedIt(){
  seedPoints = new PVector[nop];
  background(0);
  // populate the array with seed points
  stroke(255,255,0);
  strokeWeight(3);
  target = new PVector(random(width),random(height));
  point(target.x,target.y);
  
   
  noFill();
  stroke(0,255,0);
  strokeWeight(1);
  ellipse(0,0,r*2,r*2);
  
  for (int i=0;i<nop;i++){
    theta = (TWO_PI/nop)*i;
    float y = sin(theta)*r;
    float x = cos(theta)*r;
    
 
    seedPoints[i] = new PVector(x,y);
    
  }
  
     for (int i=0;i<nop;i++){// print seed poins
     pushMatrix();
    
     stroke(255,0,0);
     strokeWeight(4);
     point(seedPoints[i].x,seedPoints[i].y);
     
     popMatrix();
     
     
   }
  
  textSize(39);
   text(nop,-300,-300);
   text(perc,-350,-250);
  
  
}
  
