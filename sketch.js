var skeleton, door, tower, skeletonImage, doorImage, towerImage, climber, climberImage, doorGroup, climberGroup;
var PLAY = 1; 
var END = 0; 
var gameState = PLAY;
var blackScreen;

function preload() {

climberImage = loadImage("climber.png");
doorImage = loadImage("door.png");
towerImage = loadImage("tower.png");
skeletonImage = loadImage("ghost-standing.png");

}

function setup() {

 createCanvas(600,600);
 
tower = createSprite(300,300);
tower.addImage(towerImage);
tower.velocityY = -5;

skeleton = createSprite(175,175,10,10);
skeleton.addImage(skeletonImage);
skeleton.scale = 0.4;

 skeleton.setCollider("rectangle",0,0,skeleton.width,      skeleton.height);
 
 
 skeleton.debug = true;
 
 climberGroup = createGroup();
 doorGroup = createGroup();
 
 blackScreen = createSprite(300,300,600,600);
 blackScreen.shapeColor = "black";
 
 
}

function draw() {

background(110);





if (gameState === PLAY) {

blackScreen.visible = false;

if (tower.y < 0) {

tower.y = tower.width/2;

}

if (keyWentDown("space")) {

skeleton.velocityY = -9;

}


if(keyWentDown(LEFT_ARROW)) {

skeleton.velocityX = -9;

}

if(keyWentDown(RIGHT_ARROW)) {

skeleton.velocityX = 9;

}

skeleton.velocityY = skeleton.velocityY + 0.7;

spawnDoor();

 if(skeleton.isTouching(doorGroup) ||     skeleton.isTouching(climberGroup)) {

gameState = END;

}

}

else if(gameState === END) {

blackScreen.visible = true;

 skeleton.velocityY = 0;
 skeleton.velocityX = 0;
 
 tower.velocityY = 0;

 

}





drawSprites();
}


function spawnDoor() {

if (frameCount % 60 === 0 ) {
 
climber = createSprite(125,196,10,10);
climber.addImage(climberImage);
climber.lifetime = 600;
climberGroup.add(climber);

door = createSprite(125,125,10,10);
door.addImage(doorImage);
door.lifetime = 600;
doorGroup.add(door);


}





}











