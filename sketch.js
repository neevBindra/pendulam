
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Platform(390,200,400,40)
	bob1 = new Bob(240,400,50);
	bob2 = new Bob(300,400,50);
	bob3 = new Bob(360,400,50);
	bob4 = new Bob(420,400,50);
	bob5 = new Bob(480,400,50);
	rope1 = new Rope(bob1.body,ground.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  drawSprites();
 
}



