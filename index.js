var readlineSync = require('readline-sync');
var score = 0;
console.log("Welcome to QuizCamp");
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Right");
    score = score + 1;
  } else console.log("wrong!!The correct answer would be " + answer);
  console.log("Current Score:" + score);
  console.log("-------------------------------");
}


var questionAnswerBunch = [
  {
    question: "HTML stands for - ",
    answer: "Hiper Text Markup language"
  },
  {
    question: "CSS stands for-  ",
    answer: "Cascading Style Sheet"
  },
  {
    question: "What is git? ",
    answer: "Version Control System"
  },
  {
    question: " Loose euqality symbol? ",
    answer: "=="
  },
  {
    question: "Strict equality Symbol? ",
    answer: "==="
  }
]

for (var i = 0; i < questionAnswerBunch.length; i++) {
  play(questionAnswerBunch[i].question, questionAnswerBunch[i].answer);
}