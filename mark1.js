var readlineSync = require("readline-sync");
var chalk = require("chalk");

var qColor = chalk.yellow;
var cAns = chalk.green;
var wAns = chalk.red;
var sColor = chalk.blue;
var uname = chalk.cyanBright;

var ansObj = {
  "Whats my name?": "SHREYSH",
  "Whats my school name?": "GCEK",
  "whats my age?": 21,
  "Whats my fav color?": "BLACK",
  "Which is my favourite game ?": "VOLLEYBALL",
};

var score = 0;
function check(val, uans) {
  if (val == uans) {
    console.log(cAns("Correct Ans!"));
    score += 1;
    console.log("Score : ", sColor(score), "\n");
  } else {
    console.log(wAns("Wrong Ans!"));
    console.log("Score : ", sColor(score), "\n");
  }
}

function myQuiz() {
  var userName = readlineSync.question("What's your name ?\n=>");
  console.log(
    "Hello!,",
    uname.italic(userName.toUpperCase()),
    "Lets start the quiz\n Press 'Q' to quit the game"
  );
  for (let [key, value] of Object.entries(ansObj)) {
    let uans = readlineSync.question(qColor(key, "\n=>"));
    uans = uans.toUpperCase();
    if (uans == "Q") {
      break;
    }
    check(value, uans);
  }

  console.log(
    "Your final Score is : ",
    score,
    cAns("\nThanks for giving the quiz")
  );
  var replay = readlineSync.question(
    "Press 'R' to replay and 'Q' to quit \n=>"
  );
  if (replay.toUpperCase() == "R") {
    score = 0;
    myQuiz();
  }
}
myQuiz();
