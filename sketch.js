const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world
var time = 0


function setup() {
  createCanvas(1600,800);
  
  engine = Engine.create();
  world = engine.world

  //first pyramid

  box1 = new Box(530,400,60,60);
  box2 = new Box(590,400,60,60);
  box3 = new Box(650,400,60,60);
  box4 = new Box(710,400,60,60);
  box5 = new Box(470,400,60,60);
  box6 = new Box(410,400,60,60);
  box7 = new Box(770,400,60,60);

  box8 = new Box(590,340,60,60);
  box9 = new Box(650,340,60,60);
  box10 = new Box(710,340,60,60)
  box11 = new Box(470,340,60,60)
  box12 = new Box(530,340,60,60);

  box13 = new Box(650,280,60,60);
  box14 = new Box(590,280,60,60);
  box15 = new Box(530,280,60,60);

  box16 = new Box(590,220,60,60)

  //second pyramid

  box17 = new Box(200,300,40,40);
  box18 = new Box(240,300,40,40);
  box19 = new Box(280,380,40,40);
  box20 = new Box(160,300,40,40);
  box21 = new Box(120,380,40,40);

  box22 = new Box(200,340,40,40);
  box23 = new Box(240,340,40,40);
  box24 = new Box(160,340,40,40);

  box25 = new Box(200,380,40,40);

  //third pyramid

  box26 = new Box(800,150,20,20);
  box27 = new Box(820,150,20,20);
  box28 = new Box(840,150,20,20);
  box29 = new Box(780,150,20,20);
  box30 = new Box(760,150,20,20);

  box31 = new Box(820,170,20,20);
  box32 = new Box(800,170,20,20);
  box33 = new Box(780,170,20,20);

  box34 = new Box(800,190,20,20);

  //left border

   border1 = new Bor(20,400,20,800)

   //right border

   border2 = new Bor(1580,400,20,800)

   //top border

   border3= new Bor(800,20,1600,20)

   //bottom border

   border4 = new Bor(800,780,1600,20)

  //first pyramids base

  ground = new Ground(600,700,600,20)

  //second pyramids base

  ground2 = new Ground(200,400,300,20)

  //third pyramid base

  ground3 = new Ground(800,200,150,20)


  ball = new Ball(1300,300,40);

  sling = new Sling(ball.body,{x : 1300,y : 300});
 
}

function draw() {
  background("black");
  Engine.update(engine);

  time = second();


  textSize(20)
  fill("lightgreen")
  text("Pull the ball to release it",1100,200);

  textSize(40)
  fill("lavender")
  text("Level 3",600,50)

  textSize(20)
  fill("red")
  text("Level 4 coming soon",580,100)

  textSize(20)
  fill("Yellow");
  text("Time taken too clear the boxes : "+time,20,200);


  textSize(20)
  fill("magenta")
  text("Press SPACE to attach the ball to the starting point ",540,250)


  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();



  border1.display();
  border2.display();  
  border3.display();
  border4.display();
 
 

  ball.display();

  ground.display();
  ground2.display();
  ground3.display();

  sling.display();
}

function mouseDragged() {
	Matter.Body.setPosition(ball.body,{x : mouseX,y : mouseY});

}

function mouseReleased() {
sling.fly();

}

function keyPressed(){
  if(keyCode === 32){
     sling.attach(ball.body);
  }
}