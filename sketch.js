function setup() {

 createCanvas(800, 600);
 
 //se metto qua il background lo avrò sempre, non posso toglierlo più!
 background(220,220,220); 

}

function draw() {

 //modalità di colore utilizzata, ?!?!?!?!con HSB, non funziona l'opacità!?!?!?!
 colorMode(HSB);

 //colore background
 //background(200, 200, 200)

 //ti rende la traccia visibile a tot punti, 0 è invsibile, + grande più è spessa
 strokeWeight(10);

 //noStroke(): ti rende le tracce non visibili

 //colora la traccia stroke(R,G,B,opacity --0/255-- )
 stroke(255, 0, 0);

 //riempi fill(R,G,B,opacity)
 fill(125, 125, 255)

 //noFill non riempe niente

 //linea(x1,y1,x2,y2)
 line(200, 200, 400, 400);

 //ogni volta che lo scrivi tutto quello che sta sotto prende la regola
 colorMode(RGB);
 stroke(0, 0, 0, 50);
 strokeWeight(5);
 //rettangolo(x1,y1,width,height)
 rect(50, 50, 300, 150);

 noFill();
 //oltre che le percentuali colore, puoi mettere tra le " " il #codice 
 stroke("#00ff00");
 strokeWeight(0.5);
 //ellissi(x1,y1 --dove si trova nella pagine, centro-- ,width,height)
 ellipse(400, 400, 400, 350)
 
 //ellipse((width/4)*0.25,height/2,-- si spistano nello spazio a seconda delle width e height della tavola, w=150,h=150);
 ellipse((width/4)*0.25,height/2,150,150);
 
 //il backgrund qua non ci fa vedere più le cose di prima e a he la scia dell'ellissi.
 //background(220,220,220);
 strokeWeight(0.5);
 stroke(0,0,0);
 //ci dice che la ellissi x,y segue il nostro mouse, se togliamo il background, vedremo una succesisone di ellissi
ellipse(mouseX,mouseY,100,100);

//background(255,20,20);
//con "pmouseX,pmouseY, stiamo dicendo di fare una linea nella posizione precedente del nostro mouse. 
//Se mettiamo mouseX, mouseY, continueremo a fare la linea, se mettiamo 2 valori x,y, 
//metteremo un "punto di ancoraggio" alla nostra linea. Se togliamo lo sfondo vedremo tutti i passaggi
stroke(0,200,0);
line(pmouseX,pmouseY,200,200);
stroke(0,200,255);
line(pmouseX,pmouseY,mouseX,mouseY);

//p5 references: guida completa elle funzioni, API=istruzioni

 //hue(che colore), sauturation(lati), brightness= HSB, diversa scala colore
 
 //DOMANDE: come faccio a mettere l'opacrà con il #codice colore?
 
 //GitHub permette di copiare il codice  e visualizzarlo su internet
}