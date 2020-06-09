const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball , hanger;



function setup(){
  var canvas = createCanvas(1500,500);
  engine = Engine.create();
  world = engine.world;

  
  ball = new Box(200, 40, 20, 20);
  hanger = new Hanger(ball.body,{x: 200 , y:40});
  ground = new Ground(700,480,1400,20);
  paddle1= new Ground(650,400,200,15);
  paddle2= new Ground(1100,320,200,15);
  box1 = new Boxes(590,390,50,50);
  box2 = new Boxes(640,390,50,50);
  box3 = new Boxes(590,390,50,50);
  

}

function draw(){
  background(58,224,121);  
  Engine.update(engine);
  strokeWeight(4);
  
  
  ball.display();
  hanger.display();
  ground.display();
  paddle1.display();
  paddle2.display();
  box1.display();

  
  
  
  
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body , {x: mouseX, y: mouseY})
}

function mouseReleased(){
    hanger.fly();
}



