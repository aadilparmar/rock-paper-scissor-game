let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const rndmIdx = Math.floor(Math.random() * 3);
  return options[rndmIdx];
};
const drawGame = () => {
  msg.innerHTML = "Game Draw !! Play Again";
  msg.style.backgroundColor = "#ffd780";
  msg.style.color="#272937";
};
const showWinner = (userWin,userChoice,comChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText =`You Win !! Your ${userChoice} beats ${comChoice}`;
    msg.style.backgroundColor = "#99ff88";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose!! , Computers ${comChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "#dc2f02";
  }
};
const playGame = (userChoice) => {
  const comChoice = genCompChoice();
  if (userChoice === comChoice) {
    drawGame();
  } else {
    userWin = true;
    if (userChoice === "rock") {
      //paper, scissor
      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock , scissor
      userWin = comChoice === "rock" ? true : false;
    } else {
      //rock, paper
      userWin = comChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,comChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
