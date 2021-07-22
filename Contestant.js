class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
      contestantCount = data.val();
    })
  }

  updateCount(){
    database.ref('/').update({
      contestantCount: contestantCount
    });
  }

  update(){
    var contestantIndex = "contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer:this.answer
    });
  }

  
  static getConInfo(){
    var ContestantInfoRef=database.ref('contestant');
    ContestantInfoRef.on("value",(data)=>{
 allContestants=data.val();
    })
}}
