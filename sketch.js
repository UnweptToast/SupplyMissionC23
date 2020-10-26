var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxBase, boxLeftEdge, boxRightEdge
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var body, engine, world;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	var package_options = {restitution:0.3, isStatic:true, friction: 0.1};
	packageBody = Bodies.circle(width/2 , 200 , 5 , package_options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, groundSprite.y-10, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 boxBase = new BoxEdge(helicopterSprite.x,groundSprite.y-10,200,20);
	 boxLeftEdge = new BoxEdge(helicopterSprite.x - 100,groundSprite.y-50,20,100);
	 boxRightEdge = new BoxEdge(helicopterSprite.x + 100,groundSprite.y-50,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
  boxBase.display();
  boxLeftEdge.display();
  boxRightEdge.display();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Body.setStatic(packageBody,false);  
	}
}



