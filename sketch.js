
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world,backgroundImg;
var ground,canvas;
var block,block1,block2,block3;
var blockSpritedata,blockSpritesheet;

var isGameOver = false;

function preload(){
  backgroundImg=loadImage("bg.png")

}




function setup() {
  canvas=createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  
}


function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);
  Engine.update(engine);

  
  push();
  translate(ground.position.x, ground.position.y);
  fill("brown");
  rectMode(CENTER);
  rect(0, 0, width * 2, 1);
  pop();

  ground.visible=true;

  function showBox() {
    if (box.length > 0) {
      if (
        block.length < 4 &&
        block[ block.length - 1]. block.position.x < width - 300
      ) {
        var positions = [-40, -60, -70, -20];
        var position = random(positions);
        var  block = new  block(
          width,
          height - 100,
          170,
          170,
          position,
        
        );
  
        block.push( block);
      }}

      for (var i = 0; i < block.length; i++) {
        Matter.Body.setVelocity(block[i].body, {
          x: -0.9,
          y: 0
        });

        block[i].display();

        
 


  
      }}}
