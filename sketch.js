const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bgImage;
var snow=[];
var snowflake=[];
var personImg;
var person;

function preload(){
  bgImage=loadImage("snow1.jpg");
  personImg=loadImage("person.png");
}


function setup() {
  createCanvas(800,400);
 person=createSprite(300,350);
 person.addImage(personImg);
 person.scale=0.3;
 
 
  engine = Engine.create();
  world = engine.world;


  Engine.run(engine);
  
}

function draw() {
  background(bgImage); 
  person.display();
  if(frameCount%10===0){
    snow.push(new Snow(random(100,700), 10, 10));
  }
  
  for (var i = 0; i < snow.length; i++) {
    snow[i].display();   
  }
  
  if(frameCount%60===0){
    snowflake.push(new Snowflake(random(100,700), 10, 10));
  }
  
  
  for (var j = 0; j < snowflake.length; j++) {
    snowflake[j].display();   
  }
  
 
  drawSprites();
}

