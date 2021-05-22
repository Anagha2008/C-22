
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myWorld,myEngine;
var ground,ball;

function setup() {
  createCanvas(400,400);

myEngine = Engine.create();
myWorld = myEngine.world

var ground_options = {

isStatic : true

}

ground = Bodies.rectangle (200,390,400,20,ground_options);
World.add(myWorld,ground);


var ball_options = {
  
restitution:1

  }
  
  ball = Bodies.circle (200,200,25,ball_options);
  World.add(myWorld,ball);
  
}

function draw() {
  background(255,255,255); 
  
Engine.update(myEngine);

  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,50);
  ellipseMode(RADIUS);
  ellipse (ball.position.x,ball.position.y,25,25)

}


