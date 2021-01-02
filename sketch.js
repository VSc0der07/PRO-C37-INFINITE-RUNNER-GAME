var maskimg,bcgrimg,sanitizerimg,playerimg,coronaimg;
var score = 0;
var gameoverimg;
var mask,sanitizer,corona,player;

function preload(){

maskimg = loadImage("mask.jpg")
sanitizerimg = loadImage("hand-sanitizer.jpg")
coronaimg = loadImage("corona.jpg");
playerimg = loadImage("player.jpg");
bcgrimg = loadImage("bc.jpg");
gameoverimg = loadImage("game-over.jpg")

}

function setup(){
  createCanvas(1200, 650);

mask = createSprite(700,300,20,20)
mask.scale = 0.1
mask.addImage(maskimg);

sanitizer = createSprite(800,300,20,20)
sanitizer.scale = 0.2
sanitizer.addImage(sanitizer);

corona = createSprite(900,200,20,20)
corona.scale = 0.2
corona.addImage(coronaimg);

}

function draw(){
  background(bcgrimg);

  if(bckgrimg.x<100){
    bckgrimg.x=bckgrimg.width/2;
  }

  if(player.isTouching(mask)){
mask.visible = false;
  }
  if(player.isTouching(sanitizer)){
    sanitizer.visible = false;
      }
      if(player.isTouching(corona)){
        corona.visible = false;
        display(gameoverimg);
          }


drawsprites();
}
