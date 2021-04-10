
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground
var man,manImage
var drops,drop2,drop3,drops4,drops5,drops6,drops7,drops8,drops9,drops10

function preload(){
    
//manImage = loadImage("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png")


}

function setup(){
 createCanvas(1000,620)  
 engine = Engine.create();
 world = engine.world;

//man = createSprite(200,200,200,200)
man = new Man(200,590,50,50)
//man.velocityX = 5
//man.addAnimation("walk",manImage)
ground = new Ground(504,620,1000,20)
//ground.velocityX = -5

drops = new Drops(50,50,50)
//drops.velocityY =5 
drops2 = new Drops(110,50,50)
//drops2.velocityY =5 
drops3 = new Drops(159,50,50)
//drops3.velocityY =5 
drops4 = new Drops(210,50,50)
//drops4.velocityY =5 
drops5 = new Drops(259,50,50)
//drops5.velocityY =5 
drops6 = new Drops(310,50,50)
//drops6.velocityY =5 
drops7 = new Drops(359,50,50)
//drops7.velocityY =5 
drops8 = new Drops(410,50,50)
//drops8.velocityY =5 
drops9 = new Drops(459,50,50)
//drops9.velocityY =5 
drops10 = new Drops(510,50,50)
drops10.velocityY =5 
drops10.y=drops10.width/2




 Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
    background("white")

  drops.display() 
  drops2.display()
  drops3.display()
  drops4.display()
  drops5.display()
  drops6.display()
  drops7.display()
  drops8.display()
  drops9.display()
  drops10.display()
  man.display()


    ground.display()
  //  man.display()












  
    drawSprites()
}   

