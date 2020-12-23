var dog, dogImg, dogImg2, dog2, foodS, foodStock;
var database;

function preload(){
dogImg= loadImage("Dog.png");
dogImg2= loadImage("dog2.png");



}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  database = firebase.database();
  foodStock= database.ref('food');
  foodStock.on('value', readStock);

}


function draw() {  
background(46,139,87);
if(keyWentDown (UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg2);
}
  drawSprites();
  textSize(50)
  stroke(500);
  text("feed dog", 200,450)
}

function readStock(data){
  foodS=data.val();
}


function writeStock(x) {
  if (x<=0){
    x=0;
    }
    else{
      x = x-1
    }

    database.ref('/').update({
      food : x
    })
}


