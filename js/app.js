"use strict";
//Ask user name and save it
let nameUser = prompt("Hello, what is your name ?");
while (!nameUser) {
  nameUser = prompt("Please I need your name: ");
}
alert("Welcome to my website " + nameUser + "\nI am Jeremy Merlin !");

//game question function
function gameQuizz() {
  //list of questions
  const questions = [
    "Is my name Jeremy ?:",
    "Did I pilot planes ?:",
    "Was I a Bartender at Cocktail Club ?:",
    "Do I live in London ?:",
    "My favourite country is Dubai ?:",
  ];
  //list of good answers
  let goodAnswers = ["true", "false", "false", "false", "false"];
  //list of personnalized answers
  const returnText = [
    "My Name is Jeremy, please respect me :(",
    "No I used to pilot glider, but maybe in a future !",
    "You are crazy, I will never work for them ! \nBe at One is so much better !",
    "Not anymore, after 4 years I decide to move to Liverpool !",
    "Thailande is so much better, food, drinks and sun !",
  ];
  let userAnswers = ["", "", "", "", ""];
  let scoreUser = 0;
  //running through the 5 questions with yes/no answer
  questions.forEach(gameQuestions);
  //Game guessing number
  gameNumber();
  //multiple answer question
  multipleAnswer();
  //final message with score
  alert("well done: " + nameUser + "\nYou score: " + scoreUser + "/7");

  //running through the questions list
  function gameQuestions(question, number) {
    console.log(number);
    let answerTemp = prompt("please answer with y/n or yes/no :\n" + question);
    let answerRight = false;
    //check if the answer is y/n or yes/no and transform it in true or false
    while (!answerRight) {
      if (
        answerTemp.toLowerCase() === "y" ||
        answerTemp.toLowerCase() === "n" ||
        answerTemp.toLowerCase() === "yes" ||
        answerTemp.toLowerCase() === "no"
      ) {
        if (
          answerTemp.toLowerCase() === "y" ||
          answerTemp.toLowerCase() === "yes"
        ) {
          userAnswers[number] = "true";
        } else {
          userAnswers[number] = "false";
        }
        answerRight = true;
        //check if the answer is right, otherwise return the personalized answer
        if (userAnswers[number] == goodAnswers[number]) {
          //console.log("good answer");
          alert("Good answer !");
          scoreUser++;
        } else {
          alert(returnText[number]);
          //console.log("bad answer");
        }
      } else {
        //loop until the user type yes/no y/n
        answerTemp = prompt("please answer with y/n or yes/no :\n" + question);
      }
    }
  }
  //number guessing game
  function gameNumber() {
    //generate a number between 1 and 10
    let numberToGuess = Math.floor(Math.random() * 10) + 1;
    //console.log(numberToGuess);
    let numberUser;
    //give 4 chances to the user
    for (let i = 4; i > 0; i--) {
      numberUser = prompt(
        "Guess a number between 1 and 10: " +
          "\n You have " +
          i +
          " attempts lefts :"
      );
      //check user answer and give a hint about the good number
      if (numberUser != numberToGuess) {
        if (numberUser < numberToGuess) {
          alert("My number is higher !");
        } else {
          alert("My number is lower");
        }
      } else {
        alert("Good answer !");
        scoreUser++;
        break;
      }
    }
    //if user run out of chances
    if (numberUser != numberToGuess) {
      alert(
        "You will have better luck next time \n The good answer was : " +
          numberToGuess
      );
    }
  }
  //multiple answer question function
  function multipleAnswer() {
    let question = "Which country is not in my top 3 country to visit ?\n";
    //list of possible answer
    let answerList = [
      "Thailande",
      "Dubai",
      "Mexico",
      "Sulawesi",
      "United Kingdom",
    ];
    //list of a correct answer
    let correctAnswer = ["Dubai", "Mexico", "United Kingdom"];
    let questionText = question;
    let guessAnswer = false;

    //generate the question with the list of possible answers
    for (let i = 0; i < answerList.length; i++) {
      questionText += answerList[i] + "\n";
    }
    for (let i = 6; i > 0; i--) {
      userAnswer = prompt(
        questionText + "\nYou have " + i + " attempts lefts :"
      );
      for (let j = 0; j < correctAnswer.length; j++) {
        if (userAnswer.toLowerCase() == correctAnswer[j].toLowerCase()) {
          alert("Well Done, Good Answer !");
          guessAnswer = true;
          scoreUser++;
          break;
        }
      }
      if (!guessAnswer) {
        alert("Wrong Answer !");
      } else {
        break;
      }
    }
  }
}
