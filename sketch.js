var canvas;

var database;

var bg1,bg2,bg3,bg4;

var contestantCount;
var gameState = 0;

var quiz, question, contestant;


function preload (){
  
  bg1 = loadImage ("Images/bg1.jpg");
  bg2 = loadImage ("Images/bg2.jpg");
  bg3 = loadImage ("Images/bg3.webp");
  bg4 = loadImage ("Images/bg4.jpg");

}

function setup(){
  canvas = createCanvas(800,400);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  //quiz.start();

  question = new Question();
            

}


function draw(){
  background(bg3);

  question.display();
 
  if(contestantCount === 2){
    quiz.update(1);
  }
  

  
}
