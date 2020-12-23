class Game {
  constructor(){

  }

  start(){
    if(gameState === 0){
     
      
      form = new Form()
      form.display();
    }

    archer = createSprite(100,600,50,50);
    archer.addImage("Archer",archerImg)
    archer.scale = 0.25;

    redKnight = createSprite(800,400,50,50);
    redKnight.addImage("redKNight",redKnightImg)
    redKnight.scale = 0.5;
  }

  level1(){
    form.hide();

    
   

    drawSprites();
    
    /*Player.getPlayerInfo();
    player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
       // console.log(index, player.index)

       noStroke();
        
        textSize(18);
        
        if (index === player.index){
          fill("red")
         // rect(x -35,y+75,60,60)
        // stroke(10)
        // fill("red");
        // ellipse(x,y,60,60)
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
        text(allPlayers[plr].name,x-35,y+75);
        
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=25
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
      player.rank +=1
      Player.updateCarsAtEnd(player.rank)
    }
   
    drawSprites();*/
  }

  level2(){
    
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
    form.yourRank.html("Your Rank Is : "+player.rank);
    form.yourRank.position(displayWidth/2 -50,0)
  }
}
