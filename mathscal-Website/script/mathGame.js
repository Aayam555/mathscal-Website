const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const userInputAnswer = document.getElementById("userInputAnswer");
let score = 0;
const scoreElement = document.getElementById("score");
const highScoreElement = document.getElementById("highScore");

scoreElement.innerText = `Score: ${score}`;
if (localStorage.getItem("mathGameScore") == null){
  localStorage.setItem("mathGameScore", "0");
  highScoreElement.innerText = `High Score: 0`;
} else{
  highScoreElement.innerText = `High Score: ${localStorage.getItem("mathGameScore")}`;
}
const signs = ["+", "-", "*", "/"];

function generateTwoRandomNumbers(){
  let bigNum = Math.random() * 100 + 1;
  let smallNum = Math.random() * bigNum + 1;

  return {"bigNum": Math.floor(bigNum), "smallNum": Math.floor(smallNum)};
}

function generateQuestion(sign){
  const twoRandomNumbers = generateTwoRandomNumbers();

  let bigNum = twoRandomNumbers["bigNum"];
  let smallNum = twoRandomNumbers["smallNum"];

  let question = {};

  if (sign == "+"){
    question["question"] = `${bigNum} + ${smallNum}`;
    question["answer"] = bigNum + smallNum;
  } else if (sign == "-"){
    question["question"] = `${bigNum} - ${smallNum}`;
    question["answer"] = bigNum - smallNum;
  } else if (sign == "*"){
    question["question"] = `${bigNum} x ${smallNum}`;
    question["answer"] = bigNum * smallNum;
  } else if (sign == "/"){
    question["question"] = `${bigNum*smallNum} / ${smallNum}`;
    question["answer"] = bigNum;
  }

  return question;
}


function generateRandomQuestion(){
  const randomNumber = Math.floor(Math.random() * 4);
  return generateQuestion(signs[randomNumber]);
}

function display(){
  let randomQuestion = generateRandomQuestion();

  let question = randomQuestion["question"];
  let answer = randomQuestion["answer"];

  questionElement.innerText = `${question} = `;

  userInputAnswer.addEventListener("input", () => {
    answerElement.innerText = userInputAnswer.value;
    if (userInputAnswer.value == answer){
      console.log("adding score")
      score ++;
      let scoreStorage = localStorage.getItem("mathGameScore");
      if (scoreStorage == null){
        localStorage.setItem("mathGameScore", "1");
      } else if (score > scoreStorage){
        localStorage.setItem("mathGameScore", Number(scoreStorage) + 1);
      }
      answerElement.innerText = "?";
      userInputAnswer.value = "";
      display();
    } else if(userInputAnswer.value == ""){
      answerElement.innerText = "?";
    }
    scoreElement.innerText = `Score: ${score}`;
    highScoreElement.innerText = `High Score: ${localStorage.getItem("mathGameScore")}`;

  })
}

display();
