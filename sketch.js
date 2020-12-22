
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;

function setup() {
	createCanvas(3000, 900);

	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1100,230,30);
	mango2 = new Mango(1310,250,30);
	mango3 = new Mango(1210,200,30);
	mango4 = new Mango(1150,200,30);
	mango5 = new Mango(1230,300,30);
	mango6 = new Mango(1050,300,30);
  	mango7 = new Mango(1150,280,30);
	
	tree = new Tree(1150,680);
	ground = new Ground(0,850,4000,400);
	boy = new Boy(250,600);
	
	stone = new Stone(160,500,20);
	chain = new Chain(stone.body,{x:160, y:500});

	Engine.run(engine);  
}

function draw() {
	rectMode(CENTER);
	background(500);

	background(131,200,242)
	
	fill('gray');
	textSize(12);
	text("Press Space to Get a Second Chance to Play", 50,100);
	text("Enjoy the Game by Plucking Mangoes",75,125);
	

	ground.display();
	tree.display();
	boy.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	
	stone.display();
	chain.display();

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);

	drawSprites();
	
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
  	if(keyCode === 32){
    	Matter.Body.setPosition(stone.body,{x:160, y:500});
   	 	chain.attach(stone.body);
 	}

}

function detectCollision(lstone,lmango){
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	
	if(distance <= lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}

}