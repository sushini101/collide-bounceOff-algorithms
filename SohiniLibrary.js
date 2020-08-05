//collide algorithm:

function collide(object1, object2){

    if(object1.x-object2.x<object1.width/2+object2.width/2 && 
      object2.x-object1.x<object1.width/2+object2.width/2 &&
      object1.y-object2.y<onject1.height/2+object2.height/2 &&
      object2.y-object1.y<object1.height/2+object2.width/2){
        object2.shapeColor="orange";
        object1.shapeColor="violet";
    }
    else{
      object2.shapeColor="violet";
      object1.shapeColor="orange";
    }
    
  
  }

  //bounceOff algorithm:

  function bouncy(object1, object2) {

    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }
  
  }