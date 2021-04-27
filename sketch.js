
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var BALL
var dust
var dust1
var dudt2
var GROUND

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	BALL=new Ball(50,495,10);
	BALL.scale=0.1

	dust=new Dustbin(650,500,100,10,option);
	dust.scale=0.1
    
	dust1=new Dustbin(600,470,10,70,option);
    dust2=new Dustbin(700,470,10,70,option);

	GROUND=new Boll(width/2,510,1000,10);

	var option={

isStatic:true


	}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
BALL.display();
dust.display();
dust1.display();
dust2.display();
GROUND.display();



  drawSprites();


}
function keyPressed(){


	if(keyCode=== UP_ARROW){
	
	
	Matter.Body.applyForce(BALL.body,BALL.body.position,{
	
	x:12,
	y:-13
	
	
	 })
	}
   }
 
