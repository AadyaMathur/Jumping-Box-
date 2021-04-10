var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music=loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "red";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "blue";

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "green";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
   
    ball.velocityX =5;
    ball.VelocityY= 7;
    
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(ball.x<0){
        music.stop()
        ball.velocityX=3
    }else if(ball.x>800){
        music.stop()
        ball.velocityX=-3
    }

    if(isTouching(ball,block4)){
        music.play()
        ball.shapecolor="green";
        bounceOff(ball,block4)
    }

    else if(isTouching(ball,block3)){
        music.stop()
        ball.shapecolor="blue";
        bounceOff(ball,block3)
    }

    else if(isTouching(ball,block2)){
        music.stop()
        ball.shapecolor="orange";
        bounceOff(ball,block2)
        ball.velocityX=0;
        ball.VelocityY=0;
    }
    
    else if(isTouching(ball,block1)){
        music.stop()
        ball.shapecolor="red";
        bounceOff(ball,block1)
    }
    

    if(ball.y<0){
        music.stop()
        ball.VelocityY=3
    }
    //write code to bounce off ball from the block1 
    
    drawSprites();
}
