
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var leftBox, rightBox, bottomBox;
var paperBall;
var land

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new paper(10,560,15);

	leftBox = new dustbin(540,560,15,100);
	rightBox = new dustbin(700,560,15,100);
	bottomBox = new dustbin(620,610,150,15);
	
	land = new ground(400,635,1000,25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

	paperBall.display();
	
	leftBox.display();
	rightBox.display();
	bottomBox.display();

	land.display();

    drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:10, y:-8});

	}

}

