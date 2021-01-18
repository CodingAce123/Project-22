var Star,StarBody,Fairy,FairyVoice
var StarImage,FairyImage,bgImage;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  
StarImage = loadImage("star.png");
FairyImage = loadAnimation("fairyImage1.png","fairyImage2.png");
bgImage = loadImage("starNight.png");
FairyVoice = loadSound("JoyMusic.mp3");
}

function setup(){
createCanvas(800, 750);

FairyVoice.play();
Fairy = createSprite(130,520);
Fairy.addAnimation("fairy",FairyImage);  
Fairy.scale = 0.25;

Star = createSprite(650,30);
Star.addImage(StarImage);
Star.scale = 0.2;

engine = Engine.create();
world = engine.world;

StarBody = Bodies.circle(650,30,5,{restitution:0.5, isStatic:true});
World.add(world,StarBody);
	
Engine.run(engine);
}

function draw(){
background(bgImage);

Star.x = StarBody.position.x 
Star.y = StarBody.position.y 

console.log(Star.y);

if(Star.y > 475 && StarBody.position.y > 475){
Matter.Body.setStatic(StarBody,true);
}

drawSprites();
}

function keyPressed(){

if(keyCode === LEFT_ARROW){
Fairy.x = Fairy.x - 20;
}
	
if(keyCode === RIGHT_ARROW){
Fairy.x = Fairy.x + 20;
}

if(keyCode === DOWN_ARROW){
Matter.Body.setStatic(StarBody,false); 
}
}