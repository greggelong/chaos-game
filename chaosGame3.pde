float ax, ay;
float bx, by;
float cx, cy;
float tx, ty;
float dist;

void setup() {
  fullScreen();
  //size(700, 700);
  background(0);
  dist=0.5;
  ax = width/2;
  ay = 0;
  bx = 0;
  by = height;
  cx = width;
  cy = height;
  tx = random(width);
  ty = random(height);
  stroke(0, 255, 0);
  strokeWeight(2);
  point(ax, ay); 
  point(bx, by);
  point(cx, cy);
  point(tx, ty);
}

void draw() {

  for (int i=0; i<50; i++) {

    point(tx, ty);
    int r = floor(random(3));
    if (r==0) {
      stroke(255, 0, 0);
      tx= lerp(tx, ax, dist);
      ty= lerp(ty, ay, dist);
    } else if (r==1) {
      stroke(0, 255, 0);
      tx= lerp(tx, bx, dist);
      ty= lerp(ty, by, dist);
    } else if (r==2) {
      stroke(0, 0, 255);
      tx= lerp(tx, cx, dist);
      ty= lerp(ty, cy, dist);
    }
  }
}

void mousePressed(){
  
  background(0);
  dist = random(0.2,0.7);
  textSize(40);
  text(dist,10,50);
  tx = random(width);
  ty = random(height);
  stroke(0, 255, 0);
  strokeWeight(2);
  point(ax, ay); 
  point(bx, by);
  point(cx, cy);
  point(tx, ty);
}