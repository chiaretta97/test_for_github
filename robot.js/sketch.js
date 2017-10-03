function setup() {

 createCanvas(800, 600);

 background(225, 100, 70);
}

function draw() {

 colorMode(RGB);

 strokeWeight(0.5);
 stroke(150, 0, 0);
 line(pmouseX, pmouseY, 400, 200);

 //capelli
 strokeWeight(1.5);
 stroke(225, 225, 0);
 line(400, 200, 250, 100);
 line(400, 200, 300, 160);
 line(400, 200, 420, 30);
 line(400, 200, 460, 130);
 line(400, 200, 370, 130);
 line(400, 200, 500, 130);

 //collo
 strokeWeight(1.5);
 stroke(150, 0, 0);
 line(385, 200, 385, 320);
 line(400, 200, 400, 320);
 line(415, 200, 415, 320);

 //gambe
 strokeWeight(5);
 fill(150, 0, 0);
 ellipse(400, 435, 70, 70);

 //corpo
 stroke(150, 0, 0);
 fill(200, 20, 0)
 triangle(400, 450, 450, 300, 350, 300)

 //viso
 strokeWeight(5);
 stroke(150, 0, 0);
 fill(200, 20, 0);
 ellipse(400, 200, 100, 100);

 //occhi
 strokeWeight(7);
 stroke(150, 0, 0);
 fill(225, 225, 225);
 ellipse(380, 190, 10, 10);
 ellipse(420, 190, 10, 10);

 //bocca
 strokeWeight(10);
 stroke(225, 225, 225)
 fill(150, 0, 0);
 ellipse(400, 205, 20, 20);

}