
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload(){
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new pendulum(280,500,40);
	bob2=new pendulum(400,500,40);
	bob3=new pendulum(520,500,40);
	bob4=new pendulum(640,500,40);
	bob5=new pendulum(760,500,40);
 
	rope1=new rope(bob1.body, {x:280, y:100});
	rope2=new rope(bob2.body, {x:400, y:100});
	rope3=new rope(bob3.body, {x:520, y:100});
	rope4=new rope(bob4.body, {x:640, y:100});
	rope5=new rope(bob5.body, {x:760, y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX, y:mouseY});
}

