var npc 



function setup() {
  createCanvas(1800,800);
  npc = createSprite(200,200, 50,50)
}

function draw() 
{
  background("lightblue");
  drawSprites()

  if(keyIsDown(RIGHT_ARROW)){
    npc.position.x = npc.position.x +5
  }

  if(keyIsDown(LEFT_ARROW)){
    npc.position.x = npc.position.x -5
  }

  if(keyIsDown(UP_ARROW)){
    npc.position.y = npc.position.y -5
  }

  if(keyIsDown(DOWN_ARROW)){
    npc.position.y = npc.position.y +5
  }
}




