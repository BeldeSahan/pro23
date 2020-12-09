var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,staticBody1,staticBody2,staticBody3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	staticBody1=createSprite(260,600,20,120);
	staticBody1.shapeColor="red";
	
	staticBody2=createSprite(440,600,20,120);
	staticBody2.shapeColor="red";
	
	staticBody3=createSprite(350,670,200,20);
	staticBody3.shapeColor="red";

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
		
}
   

function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
   
  
 drawSprites();
function keyPressed(){
	if(keyCode === DOWN_ARROW){
	
		//Matter.Body.setStatic(packageBody,{isStatic:false});
		Matter.Body.setStatic(packageBody,false);
		
		}	
		if (keyCode === LEFT_ARROW) {
			helicopterSprite.x=helicopterSprite.x-5;
			//Create a Ground
			ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
			 World.add(world, ground);
			 translation={x:-5,y:0};
			 //Matter.Body.translate(packageBody, translation);
		
			Engine.run(engine);
		  
		}
		
		if (keyCode === RIGHT_ARROW) {
			helicopterSprite.x=helicopterSprite.x+5;
			//Create a Ground
			ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
			 World.add(world, ground);
			 translation={x:+5,y:0};
			 //Matter.Body.translate(packageBody, translation);
		
			Engine.run(engine);
		  
		}
}






  }



