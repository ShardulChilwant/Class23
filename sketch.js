const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var box1;
var ground;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
 box1 = new Box();
 ground = new Ground(0,390,400,5);
}

function draw(){
    background(0);
    Engine.update(engine);
   box1.display();
   ground.display();
}
