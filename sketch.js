const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world=engine.world;

  var ground_options={
    isStatic: true
  }
  var ball_options={
    restitution:1.5
  }

  ground=Bodies.rectangle(300,570,600,20,ground_options);
  World.add(world,ground);
  ball = Bodies.circle(200,200,30,ball_options);
  World.add(world,ball);
  console.log(ground);
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30);
}