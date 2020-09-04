# chaos-game
The Chaos Game in processing 3 and p5js

![sierpinski1.png](sierpinski1.png)

The last couple days I have been doing some coding and math review in the yard with the dogs. While reading 'Fractals: a graphic guide', I came across the Chaos game. I had never tried to code it and thought it would be a nice distraction.  I think it is refreshing to do some math and code stuff in the sun, on paper around the dogs. It is a nice change from a dark room while everyone else is sleeping. I coded on my android in processing3 using APDE. Later at home I refactored it to p5.js on a laptop. I also consulted some youtube videos #thecodingtrain and #numberphile. #creativecoding #fractal

Instructions from [Wikipedia](https://en.wikipedia.org/wiki/Chaos_game):

>The fractal is created by iteratively creating a sequence of points, starting with the initial random point, in which each point in the sequence is a given fraction of the distance between the previous point and one of the vertices of the polygon; the vertex is chosen at random in each iteration. Repeating this iterative process a large number of times, selecting the vertex at random on each iteration, and throwing out the first few points in the sequence, will often (but not always) produce a fractal shape. Using a regular triangle and the factor 1/2 will result in the Sierpinski triangle, while creating the proper arrangement with four points and a factor 1/2 will create a display of a "Sierpinski Tetrahedron", the three-dimensional analogue of the Sierpinski triangle. 
