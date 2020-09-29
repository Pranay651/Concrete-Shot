    var bullet,wall;
function setup() {
      createCanvas(1600,400);
      bullet=createSprite(50, 200, 50, 20);
      wall=createSprite(1200,200,60,400);
      bullet.shapeColor="grey";
      wall.shapeColor="grey";
}
function draw() {
      background("white");  
        if(frameCount%10===0) {
        bullet.x=random(1000,1400);
      }
      if(bullet.x<1200&&bullet.x>1150){
        wall.shapeColor="red";
        textSize(32);
        text("Rejected by Millitary",800,200,);
      }
      if(bullet.x<1250&&bullet.x>1200){
        wall.shapeColor="green";
        textSize(32);
        text("Approved by Millitary",800,200,);
      }
      drawSprites();
      createEdgeSprites();
}