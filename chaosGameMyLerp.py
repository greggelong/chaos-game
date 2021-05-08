import turtle
import random

turtle.setup(800, 800)
wn = turtle.Screen()
wn.bgcolor("grey")
ax = 0
ay = 300
bx = -300
by = -300
cx = 300
cy = -300
greg = turtle.Turtle()
greg.speed('fastest')
turtle.tracer(False)
greg.color("red")
greg.penup()
greg.goto(ax, ay)
greg.dot()
greg.goto(bx, by)
greg.dot()
greg.goto(cx, cy)
greg.dot()
greg.color("blue")
greg.goto(random.randint(-300, 300),random.randint(-300,300))
greg.dot()


          


for i in range(2500):
    
    
    # get a random number from 0 to 2 pick a random vertex
    
    vert = random.randint(0,2)
    if vert == 0:
        
        # get half way a
        greg.color("red")
        gx, gy = greg.position()
        #  lerp to find the mid point of the line
        newx = ((gx-ax) * 0.5) +ax
        newy = ((gy-ay) * 0.5) +ay
        greg.goto(newx,newy)
        greg.dot()
        
    elif vert == 1:
        # get half way b
         greg.color("blue")
         gx, gy = greg.position()
         newx = ((gx-bx) * 0.5)+bx
         newy = ((gy- by) * 0.5)+by
         greg.goto(newx,newy)
         greg.dot()
    else:
        # get half way c
         greg.color("yellow")
         gx, gy = greg.position()
         newx = ((gx-cx) * 0.5) +cx
         newy = ((gy-cy) * 0.5) +cy
         greg.goto(newx,newy)
         greg.dot()
         
   # print(gx,gy)
        
        
             
 
  
wn.exitonclick()