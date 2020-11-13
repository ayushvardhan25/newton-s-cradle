
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball,ballobject2,ballobject3,ballobject4,ballobject5
var rope1, rope2, rope3, rope4
var ball1, ball2, ball3, ball4
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new ground1(300,200,600,30)

ball1 = new BOB(300,400,50);
ball2 = new BOB(100,400,50);
ball3 = new BOB(200,400,50);
ball4 = new BOB(400,400,50);
ball5 = new BOB(500,400,50);


rope1 = new Rope(ball1.body,ground.body,20,0);
rope2 = new Rope(ball2.body,ground.body,-220,0);
rope3 = new Rope(ball3.body,ground.body,-120,0);
rope4 = new Rope(ball4.body,ground.body,120,0);
  
Engine.run(engine);
  
}


function draw() {
	background('white')
	rectMode(CENTER);
  background('white');
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  ground.display();

 drawSprites();
 
}


function keyPressed(){

  if (keyCode===32){
  
  Matter.Body.applyForce(ball2.body,ball2.body.position,{x:-80,y:-80});
  
  }
  
  
  }



