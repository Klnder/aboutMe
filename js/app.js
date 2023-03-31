"use strict";
let nameUser = prompt("Hello, what is your name ?");
while (!nameUser) {
  nameUser = prompt("Please I need your name: ");
}
alert("Welcome to my website " + nameUser + "\nI am Jeremy Merlin !");

function gameQuizz() {
  const questions = [
    "Is my name Jeremy ?:",
    "Did I pilot planes ?:",
    "Was I a Bartender at Cocktail Club ?:",
    "Do I live in London ?:",
    "My favourite country is Dubai ?:",
  ];
  let goodAnswers = ["true", "false", "false", "false", "false"];
  const returnText = [
    "My Name is Jeremy, please respect me :(",
    "No I used to pilot glider, but maybe in a future !",
    "You are crazy, I will never work for them ! \nBe at One is so much better !",
    "Not anymore, after 4 years I decide to move to Liverpool !",
    "Thailande is so much better, food, drinks and sun !",
  ];
  let userAnswers = ["", "", "", "", ""];
  let scoreUser = 0;

  questions.forEach(gameQuestions);
  gameNumber();
  multipleAnswer();
  alert("well done: " + nameUser + "\nYou score: " + scoreUser + "/7");

  function gameQuestions(question, number) {
    console.log(number);
    let answerTemp = prompt("please answer with y/n or yes/no :\n" + question);
    let answerRight = false;
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
        if (userAnswers[number] == goodAnswers[number]) {
          //console.log("good answer");
          alert("Good answer !");
          scoreUser++;
        } else {
          alert(returnText[number]);
          //console.log("bad answer");
        }
      } else {
        answerTemp = prompt("please answer with y/n or yes/no :\n" + question);
      }
    }
  }
  function gameNumber() {
    let numberToGuess = Math.floor(Math.random() * 10) + 1;
    console.log(numberToGuess);
    let numberUser;

    for (let i = 4; i > 0; i--) {
      numberUser = prompt(
        "Guess a number between 1 and 10: " +
          "\n You have " +
          i +
          " attempts lefts :"
      );
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
    if (numberUser != numberToGuess) {
      alert(
        "You will have better luck next time \n The good answer was : " +
          numberToGuess
      );
    }
  }
  function multipleAnswer() {
    let question = "Which country is not in my top 3 country to visit ?\n";
    let answerList = [
      "Thailande",
      "Dubai",
      "Mexico",
      "Sulawesi",
      "United Kingdom",
    ];
    let correctAnswer = ["Dubai", "Mexico", "United Kingdom"];
    let questionText = question;
    let guessAnswer = false;

    for (let i = 0; i < answerList.length; i++) {
      questionText += answerList[i] + "\n";
    }
    let userAnswer = "";

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
