let nameUser = prompt("Hello, what is your name ?");
alert("Welcome to my website " + nameUser + "\nI am Jeremy Merlin !");

function gameQuizz() {
  const questions = [
    "Is my name Jeremy ?:",
    "Did I pilot planes ?:",
    "Was I a Bartender at Cocktail Club ?:",
    "Do I live in London ?:",
    "question 5:",
  ];
  let goodAnswers = ["true", "false", "false", "false", ""];
  const returnText = [
    "My Name is Jeremy, please respect me :(",
    "No I used to pilot glider, but maybe in a future !",
    "You are crazy, I will never work for them ! \nBe at One is so much better !",
    "Not anymore, after 4 years I decide to move to Liverpool !",
    "",
  ];
  let userAnswers = ["", "", "", "", ""];

  questions.forEach(game);

  function game(question, number) {
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
          alert("Good answer !");
        } else {
          alert(returnText[number]);
        }
      } else {
        answerTemp = prompt("please answer with y/n or yes/no :\n" + question);
        console.log(answerTemp.toLowerCase());
      }
      console.log(question + " " + userAnswers[number]);
    }
  }
}
