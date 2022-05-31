var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var obstacle1,obstacle2,obstacle3,obstaclesGroup;
var score;

function preload(){
  pathImg = loadImage("fondo2.webp");
  boyImg = loadImage("personaje1.webp");
  obstacle1 = loadImage("pino.png");
  obstacle2 = loadImage("oso.png");
  obstacle3 = loadImage("cabaña.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Fondo en movimiento
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//Creando el niño corriendo
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
//Crear límite izquierdo
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//Crear límite derecho
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // Niño moviéndose en el eje X con el mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //El código para restablecer el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
if(frameCount % 80 === 0){
  var obstacle = createSprite(width , height -350, 20, 30);
obstacle.setCollider('circle',0 ,0 ,45);
obstacle.velocityY =  10;
var ran = Math.round(random(1,2,3));
switch(ran){
case 1: obstacle.addImage(obstacle1);
        break;
        case 2: obstacle.addImage(obstacle2);
                break;
                case 3: obstacle.addImage(obstacle3);
                         break;
                         default: break ;
}

obstacle.lifeTime = 300;
obstacle.depth = boy.depth;
boy.depth + 1;


    }

}
