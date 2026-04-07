let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }
  return computerMove;
}

function playGame(playerMove) {
  let computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You Lose";
    } else {
      result = "You Win";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else {
      result = "You Lose";
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You Lose";
    } else if (computerMove === "Paper") {
      result = "You Win";
    } else {
      result = "Tie";
    }
  }

  if (result == "You Win") {
    score.wins += 1;
  } else if (result == "You Lose") {
    score.losses += 1;
  } else if (result == "Tie") {
    score.ties += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-score").innerHTML = `Wins: ${score.wins}    
           Losses: ${score.losses}, 
           Ties: ${score.ties} `;

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-move").innerHTML = `You
      <img src="images/${playerMove}-emoji.png" class="move-icon" />
      <img src="images/${computerMove}-emoji.png" class="move-icon" />
      Computer
          `;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();
  alert("Score Reset");
}

function updateScoreElement() {
  document.title = `Rock Paper Scissors - Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  document.querySelector(".js-score").innerHTML = `Wins: ${score.wins}    
           Losses: ${score.losses}, 
           Ties: ${score.ties} `;
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const autoMove = pickComputerMove();
      playGame(autoMove);
    }, 1000);

    isAutoPlaying = true;
    document.querySelector(".js-autoplay-button").innerHTML = "Stop";
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
     document.querySelector('.js-autoplay-button').innerHTML="AutoPlay";
  }
}
