var knife,knifeImage,knifeGroup;
var ninjaBackground,ninjaBackgroundImage;
var banana,bananaImage;
var fruit,fruitGroup;
var watermelon,watermelonImage;
var score=0;
var bom,bomImage,bomGroup;
var Play=1;
var End=0;
var gamestate=Play;
var kaboom,kaboomImage;
var knifeSound;
var gameEndSound;

function preload(){
ninjaBackgroundImage=loadImage("fruit-ninja-background.jpg");
  knifeImage=loadImage("knife.png");
  bananaImage=loadImage("banana.png");
  watermelonImage=loadImage("watermelon.png");
  bomImage=loadImage("bom.png");
  kaboomImage=loadImage("gameover.png");
  knifeSound=loadSound("knife sound.mp3")
  gameEndSound=loadSound("game over.mp3")
  
//============================================================//
//                            END PRELOAD                     //
//============================================================//
 
}

function setup(){
  createCanvas(600,400);
  ninjaBackground=createSprite(300,200,20,20);
  ninjaBackground.addImage(ninjaBackgroundImage);
  ninjaBackground.scale=0.35;
  
  
  knife=createSprite(200,200,20,20);
  knife.addImage("dagger",knifeImage);
  knife.scale=0.1;
  
  kaboom=createSprite(300,200,20,20);
  kaboom.addImage(kaboomImage);
  
  
  fruitGroup=createGroup();
  bomGroup=createGroup();
 
 
//===========================================================//
//                          END SETUP                        // 
//===========================================================//
}


function draw(){
  background("white");
  
 
  knife.setCollider("rectangle",0,0,30,20,45);
  
  kaboom.scale=0.0001;
  if (keyDown("space")){
      gameState=Play;
      }
  
 if (gamestate===Play){
     knife.x=mouseX;
     knife.y=mouseY;
     if (fruitGroup.isTouching(knife)){
      fruitGroup.destroyEach();
      score=score+1;
       kaboom.scale=0.0001
       knifeSound.play();
       
      }    
     
   if (knife.isTouching(bomGroup)){
       gamestate=End;
       
       }
     
   if (gamestate===End){
       fruit.velocity=0;
     bom.velocity=0;
     kaboomImage.visible=true
     kaboom.scale=0.1
     gameEndSound.play();
       }
   
   
     }
  

  
  
  fruits();
  bomb();
   drawSprites();
  fill("white");
  text("SCORE="+score,280,20)
  
//===========================================================//
//                          END DRAW                         //
//===========================================================//
}

function fruits(){
  if(frameCount%120===0){
     position=Math.round(random(1,2))
     fruit=createSprite(200,200,10,10);
    var r =Math.round(random(1,2));
    if(r===1){
       fruit.addImage(bananaImage);
      
       }else if (r===2){
          fruit.addImage(watermelonImage);    
                 }
    fruit.velocityY=(7+score/5);
    fruit.scale=0.1;
    fruit.x=Math.round(random(50,550));
    fruitGroup.add(fruit);

  }
       
}
  
  function bomb(){
    if (World.frameCount%200===0){
        bom=createSprite(400,20,10,10);
        bom.addImage("moving",bomImage);
        bom.scale=0.2;
        bom.x=Math.round(random(550,50));
        bom.velocityY=(8+score/10);
        bom.lifetime=50;
        bomGroup.add(bom)
      
        }
  }

