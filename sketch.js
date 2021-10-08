var girl, girlImg;
var ground, groundImg;
var edges;
var platform, platformImg, platformGroup;
var coin, coinImg, coinGroup;
var stone, stoneImg,stoneGtoup;
var trunk, trunkImg,trunkGroup;
var gold, goldImg, goldGroup;
var snake,snakeImg,snakeGroup;



function preload() {
  groundImg = loadImage("Images/background.png");
  girlImg = loadAnimation(
    "Girl/girl00.png",
    "Girl/girl01.png",
    "Girl/girl02.png",
    "Girl/girl03.png",
    "Girl/girl04.png",
    "Girl/girl05.png",
    "Girl/girl06.png",
    "Girl/girl07.png",
    "Girl/girl08.png",
    "Girl/girl09.png",
    "Girl/girl10.png",
    "Girl/girl11.png"
  );
  platformImg = loadImage("Images/bricks_2.png");
  coinImg = loadImage("Images/coin.png");
  goldImg = loadImage("Images/gold.png");
  stoneImg=loadImage("Images/Stone.png");
  trunkImg=loadImage("Images/stump.png");
  snakeImg=loadImage("Images/snake.png");
}

function setup() {
  createCanvas(800, 400);
  ground = createSprite(400, 200, 800, 400);
  ground.addImage("ground1", groundImg);
  ground.velocityX = -6;

  girl = createSprite(150, 240, 50, 50);
  girl.addAnimation("running", girlImg);
  girl.scale = 0.5;
  //girl.debug = true;
  girl.setCollider("rectangle", 0, 0, 200, 200);

  platformGroup = new Group();
  coinGroup = new Group();
  goldGroup = new Group();
  stoneGroup = new Group();
  snakeGroup = new Group();
  trunkGroup = new Group();

  edges = createEdgeSprites();
}

function draw() {
  background(0);

  if (ground.x < 300) {
    ground.x = 400;
  }

  girl.collide(edges);

  spawnPlatforms();
  //spawnObstacles()

  drawSprites();
}



function spawnObstacles() {
  if (frameCount % 200 === 0) {
      snake = createSprite(1000, 250, 50, 50);
      snake.addImage(snakeImg);

      stone = createSprite(1020, 200, 50, 50);
      stone.addImage(stoneImg);

      trunk = createSprite(1020, 200, 50, 50);
      trunk.addImage(trunkImg);

      snake.scale = 0.1;
      stone.scale = 0.1;
      trunk.scale = 0.1;

      snakeGroup.add(snake);
      stoneGroup.add(stone);
      trunkGroup.add(trunk);

      snake.lifetime = 800;
      stone.lifetime = 800;
      trunk.lifetime = 800;

      snakeGroup.setVelocityXEach(-6);
      stoneGroup.setVelocityXEach(-6);
      trunkGroup.setVelocityXEach(-6);
}

function spawnPlatforms() {
    if (frameCount % 200 === 0) {
      platform = createSprite(1000, 250, 50, 50);
      platform.addImage(platformImg);

      coin = createSprite(1020, 200, 50, 50);
      coin.addImage(coinImg);

      gold = createSprite(1000, random(70, 150), 50, 50);
      gold.addImage(goldImg);

      platform.scale = 0.2;
      coin.scale = 0.04;
      gold.scale = 0.1;

      platformGroup.add(platform);
      coinGroup.add(coin);
      goldGroup.add(gold);

      platform.lifetime = 800;
      coin.lifetime = 800;
      gold.lifetime = 800;

     
      platformGroup.setVelocityXEach(-6);
      coinGroup.setVelocityXEach(-6);
      goldGroup.setVelocityXEach(-6); 
    
    }
}
