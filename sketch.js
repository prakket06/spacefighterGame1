const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var BackGround, spaceImg,space2Img,space3Img,level1Img,level2Img,level3Img ;

var  spaceShip1Img, spaceShip2, spaceShip2Img, spaceShip3,spaceShip3Img;

var a = 0;

function preload() {
    spaceImg = loadImage("space2.png");
    space2Img = loadImage("space3.png");
    space3Img = loadImage("space4.png");

    level1Img = loadImage("level1.png");
    level2Img = loadImage("level2.png");
    level3Img = loadImage("level3.png");

    spaceShip1Img = loadImage("spaceship1.png");
    spaceShip2Img = loadImage("spaceship2.png");
    spaceShip3Img = loadImage("spaceShip3.png");
} 

function setup(){
    createCanvas(displayWidth - 20 ,displayHeight - 200);
    engine = Engine.create();
    world = Engine.world;
    title = createElement('h1');
    title.html("Space Fighter");
    title.position(displayWidth /2-50, 0);
    BackGround = loadImage("space.png");
    button2 = createButton('Tutorial');
    button2.position(displayWidth/2+22.5, displayHeight/2 + 50);
    button = createButton('Play');
    button.position(displayWidth/2+30, displayHeight/2);
    button.mousePressed(()=>{
        this.button.hide();
        title.hide();
        this.button2.hide();
        levelSelection();
    });
    button2.mousePressed(()=>{
        this.button.hide();
        title.hide();
        this.button2.hide();
        tutorial();
    })

    
   

   

}

function draw(){
    background(BackGround);

   

    if(a == 2){
        textFont("Trebuchet");
        textSize(40);
        text("Welcome space fighter",displayWidth/2-120, displayHeight/2 - 325 );
        textSize(30);
        text("If you are playing on computer use right & left arrow keys to control the spaceship and space button to attack.",displayWidth/2-675, displayHeight/2 - 250);
        text("If you are playing on mobile or tablet press the keys given on the screen to control.",displayWidth/2-675, displayHeight/2 - 150)
        text("Press 'L' to go to select level",displayWidth/2, displayHeight/2 - 50);
        
        
    }
    if(keyCode == 76){
        a = 1;
    }

    

    if(a == 1){
        var level1 = createSprite(displayWidth/2-250,displayHeight/2,10,10);
        level1.addImage("level1Img",level1Img);
        var level2 = createSprite(displayWidth/2,displayHeight/2,10,10);
        level2.addImage("level2Img",level2Img);
        var level3 = createSprite(displayWidth/2+250,displayHeight/2);
        level3.addImage("level3Img",level3Img);
        drawSprites();
        if(mousePressedOver(level1)){
            a = 3;
            level1.x = displayWidth+2000;
            level2.x = displayWidth+2000;
            level3.x = displayWidth+2000;

        }

        if(mousePressedOver(level2)){
            a = 4;
            level1.x = displayWidth+2000;
            level2.x = displayWidth+2000;
            level3.x = displayWidth+2000;

        }

        if(mousePressedOver(level3)){
            a = 5;
            level1.x = displayWidth+2000;
            level2.x = displayWidth+2000;
            level3.x = displayWidth+2000;

        }
    }

    if(a == 3){
        backGround();

        var spaceShip1 = createSprite(displayWidth/2, displayHeight/2+100,10,10);
        spaceShip1.addImage("spaceShip1Img",spaceShip1Img);
        spaceShip1.scale = 0.25;

        if(keyDown (RIGHT_ARROW)){
           spaceShip1.velocityX = 2;


        }

        

        if(keyCode == 39){
           spaceShip1.velocityX = -2;
        }
        drawSprites();
    }

    if(a == 4){
        backGround2();

        var spaceShip2 = createSprite(displayWidth/2, displayHeight/2+100,10,10);
        spaceShip2.addImage("spaceShip2Img",spaceShip2Img);
        spaceShip2.scale = 0.25;

        if(keyCode == 37){
           spaceShip2.velocityX = 2;


        }

        

        if(keyCode == 39){
           spaceShip2.velocityX = -2;
        }
        drawSprites();
    }

    if(a == 5){
        backGround3();

        var spaceShip3 = createSprite(displayWidth/2, displayHeight/2+100,10,10);
        spaceShip3.addImage("spaceShip3Img",spaceShip3Img);
        spaceShip3.scale = 0.25;

        if(keyCode == 37){
           spaceShip3.velocityX = 2;


        }

        

        if(keyCode == 39){
           spaceShip3.velocityX = -2;
        }
        drawSprites();
    }

    
}   

function levelSelection (){
    a = a + 1;
    
}

function level1 (){
    a = 4;
}

function level1 (){
    a = 5;
}

function level1 (){
    a = 3;
}

function tutorial(){
    a = a + 2;
}

function backGround(){
    space = createSprite(displayWidth/2,displayHeight/2);
    space.addImage("spaceImg",spaceImg);
    space.scale = displayWidth/-275;
    drawSprites();
}
function backGround2(){
    space2 = createSprite(displayWidth/2,displayHeight/2);
    space2.addImage("space2Img",space2Img);
    space2.scale = displayWidth/-275;
    drawSprites();
}

function backGround3(){
    space3 = createSprite(displayWidth/2,displayHeight/2);
    space3.addImage("space3Img",space3Img);
    space3.scale = displayWidth/-275;
    drawSprites();
}

