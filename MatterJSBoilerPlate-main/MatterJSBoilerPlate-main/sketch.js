
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
let engine;
let world;
var ground,bucket1,bucket2,up,right,left;
var ball

function setup() {
	createCanvas(1000, 1000);

	engine = Engine.create();
	world = engine.world;

	ground= new Ground(500,1000,997,20)
	bucket1= new Ground(500,965,10,50)
	bucket2= new Ground(700,965,10,50)
	up= new Ground(500,20,965,10)
	right= new Ground(980,495,10,975)
	left= new Ground(20,495,10,975)
	//Create the Bodies Here.
	var ballOptions={
	restitution:0.3,

	}


	ball=Bodies.circle(200,200,20,ballOptions)
	World.add(world,ball)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20)
  ground.show()
  bucket1.show()
  bucket2.show()
  up.show()
  right.show()
  left.show()
  Engine.update(engine);
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==DOWN_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05})
	}
}



