var trex,trexRunnning

// preload is used to load the images or sounds or videos
function preload(){
  trexRunnning=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage = loadImage("ground2.png")
}


// Create object once
function setup(){
  createCanvas(400,400)

  // Creating Trex animation
  trex = createSprite(20,350,30,30);
  trex.addAnimation("running",trexRunnning)
  trex.scale=0.5

  // Ground
  ground = createSprite(200,370,400,20)
  ground.addImage("ground",groundImage)

}

// Display objects and their functions multiple times
function draw(){
  background("white")
  drawSprites()

  if(keyDown("space")){
    trex.velocityY = -10
  }

  trex.velocityY=trex.velocityY+0.8

  // Collide
  trex.collide(ground)
}
