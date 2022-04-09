
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world,backgroundImg;
var ground,canvas;
var block,block1,block2,block3,block4;
var boxAnimation=[];
var boxSpritedata,boxSpritesheet;

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

  var boxFrames = boxSpritedata.frames;
  for (var i = 0; i < boxFrames.length; i++) {
    var pos = boxFrames[i].position;
    var img = boxSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
  }
  
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

  function showBox() {
    if (box.length > 0) {
      if (
        box.length < 4 &&
        box[ box.length - 1]. box.position.x < width - 300
      ) {
        var positions = [-40, -60, -70, -20];
        var position = random(positions);
        var  box = new  box(
          width,
          height - 100,
          170,
          170,
          position,
        
        );
  
        box.push( box);
      }}

 


  
    }}