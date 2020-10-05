var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rectangle1, rectangle2, rectangle3;
var rectangleSprite1, rectangleSprite2, rectangleSprite3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadAnimation("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addAnimation("heli", helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	rectangleSprite1 = createSprite(width/2, 200, 20, 100);
	rectangleSprite1.shapeColor = "red";

	rectangleSprite2 = createSprite(width/2, 200, 200, 20);
	rectangleSprite2.shapeColor = "red";

	rectangleSprite3 = createSprite(width/2, 200, 20, 100);
	rectangleSprite3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	 
	 rectangle1 = Bodies.rectangle(width/2 - 90, 530, 20, 100 , {isStatic:true});
	 World.add(world, rectangle1);
	 
	 rectangle2 = Bodies.rectangle(width/2, 580, 200, 20 , {isStatic:true} );
	 World.add(world, rectangle2);
	 
	 rectangle3 = Bodies.rectangle(width/2 + 90, 530, 20, 100 , {isStatic:true} );
 	 World.add(world, rectangle3);

	 ground = Bodies.rectangle(width/2, 600, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 

  groundSprite.x = ground.position.x;
  groundSprite.y = ground.position.y;

  rectangleSprite1.x = rectangle1.position.x;
  rectangleSprite1.y = rectangle1.position.y;
  rectangleSprite2.x = rectangle2.position.x;
  rectangleSprite2.y = rectangle2.position.y;
  rectangleSprite3.x = rectangle3.position.x;
  rectangleSprite3.y = rectangle3.position.y;

  if (collided(packageSprite, rectangleSprite2)) {
	rectangleSprite1.shapeColor = "green";
	rectangleSprite2.shapeColor = "green";
	rectangleSprite3.shapeColor = "green";
  } else {
	rectangleSprite1.shapeColor = "red";
	rectangleSprite2.shapeColor = "red";
	rectangleSprite3.shapeColor = "red";
  }
  
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
  }
}
