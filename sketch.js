var doggy, dogImg
var  happyDog, database, foodS, foodStock;
//var count = 20
function preload()
{
  dogImg = loadImage("images/dogImg1.png");
  happyDog = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  foodstock = database.ref("Food");
  foodstock.on("value", readStock);
  
  doggy = createSprite(250,250)
  doggy.addImage(dogImg);
  doggy.scale =0.6
}


function draw() {  
background(46,139,87);

if(keyWentDown("up")){
 // readStock(data);
  writeStock(foodS);
  
  //count = count-1;
  doggy.addImage(happyDog);
}
else if(keyWentUp("up"))
{

  doggy.addImage(dogImg);
}


  drawSprites();
  //add styles here
  strokeWeight(5)
  stroke("Yellow");
  fill("Orange")
  textSize(20);
  text("Remaining Milk:"+"  "+foodS, 250, 70)
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}
function readStock(data){
foodS = data.val();

}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1;
  }

  database.ref("/").update({
    Food:x
  })
}