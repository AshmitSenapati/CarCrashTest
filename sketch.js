var car,wall,ground;
var speed,weight;


function setup() {
  createCanvas(1000,400);

  car = createSprite(60, 325, 80, 50);
  ground = createSprite(500,380,1000,60)
  ground.shapeColor = "black"
  wall = createSprite(960,250,60, height/2)
  wall.shapeColor = color(80,80,80)
  console.log(wall.shapeColor)

  speed = random(55,90)
  weight = random(400,1500)

  car.velocityX = speed;
}

function draw() {
  background("cyan"); 
  /*
  car.x = World.mouseX
  car.y = World.mouseY
  */
  //console.log(car.x - wall.x)

  if(wall.x - car.x < car.width/2
     + wall.width/2 && car.x - 
     wall.x < car.width/2 + 
     wall.width/2) {
    //car.shapeColor = "blue"
    car.velocityX = 0
    var deformation = 0.5 * weight * speed * speed /22500;

  if(deformation < 100) {
    car.shapeColor = "green";
  }

  if(deformation > 100 && deformation < 180) {
    car.shapeColor = "yellow";
  }

  if(deformation > 180){
    car.shapeColor = "red";
  }
     }
  else {car.shapeColor = "grey"}

  car.depth = wall.depth;
  car.depth = car.depth+ 1;

  //car.collide(ground);

  drawSprites();
}