const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

function setup() {
  createCanvas(800,400);
   engine = Engine.create()
  var world = engine.world
 var g_op = {
   isStatic : true
 }
  ground = Bodies.rectangle(200,390,200,20,g_op)
   World.add(world,ground)
  var b_op = {
    restitution : 1.0
  }
  ball = Bodies.circle(200,100,20,b_op)
  World.add(world,ball)
 
}

function draw() {
  background('black'); 
  Engine.update(engine) 
 rectMode (CENTER) 
 rect (ground.position.x,ground.position.y,200,20)
  ellipse (ball.position.x,ball.position.y,20)
  drawSprites();
}