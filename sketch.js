
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var BobObj1,BobObj2,BobObj3,BobObj4,BobObj5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(700,250,350,30);
	BobObj1 = new bob(580,550,30);
	BobObj2 = new bob(640,550,30);
	BobObj3 = new bob(700,550,30);
	BobObj4 = new bob(760,550,30);
	BobObj5 = new bob(820,550,30);
	rope1 = new Rope(BobObj3.body,roof.body,0,0);
	rope2 = new Rope(BobObj4.body,roof.body,60,0);
	rope3 = new Rope(BobObj5.body,roof.body,120,0);
	rope4 = new Rope(BobObj2.body,roof.body,-60,0);
	rope5 = new Rope(BobObj1.body,roof.body,-120,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  BobObj1.display();
  BobObj2.display();
  BobObj3.display();
  BobObj4.display();
  BobObj5.display();

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(BobObj1.body,BobObj5.body.position,{x:-155,y:-155});
  }
}


