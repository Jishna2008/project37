class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
       
      }
      question = new Question()
      question.display();
   
    }
  }

  play(){
    //write code here to hide question elements
question.hide();
    //write code to change the background color here
background("yellow")
    //write code to show a heading for showing the result of Quiz
    var title2=createElement('h1');
    title2.html("Quiz Result");
    title2.position(350,0);
    //call getContestantInfo( ) here
    //  contestant.getConInfo();

    //write condition to check if contestantInfor is not undefined
    // if(allContestants!== undefined &&  contestant.answer==2){   
    //write code to add a note here
   contestant.update();
 
    // }

    fill("blue");
    textSize(20);
    text("NOTE: correct answer is option 2",130,230)
    //write code to highlight contest who answered correctly

    }
  }


