class Game {
  constructor() {
    this.handsContainer;
    this.handOptions;
    this.playerHand;
    this.PCHand;
    this.playerScore = 0;
    this.pcScore = 0;
    this.winningScore = 3;
    this.isPlaying;
  }

  init() {
    this.isPlaying = true;
    this.handsContainer = document.getElementById("hands");
    
    this.handsContainer.addEventListener("click", e => this.playHand(e));
  }
  
  playHand(e) {
    if (e.target.tagName !== "SPAN") return; // check
    
    this.handOptions = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * this.handOptions.length);
    
    this.playerHand = e.target.getAttribute("data-hand");
    this.PCHand = this.handOptions[randomIndex];

    if (this.isPlaying) {
      this.updateScore();
      this.updateScoresUI();
    }
    
    if (this.playerScore === this.winningScore || this.pcScore === this.winningScore) {
      this.endGame();
    }
  }

  updateScore() {
    switch (this.playerHand) {
      case "rock":
        switch (this.PCHand) {
          case "rock":
          break;
          case "paper":
            this.pcScore++;
          break;
          case "scissors":
            this.playerScore++;
          break;
        }
      break;
      case "paper":
        switch (this.PCHand) {
          case "rock":
            this.playerScore++;
          break;
          case "paper":
          break;
          case "scissors":
            this.pcScore++;
          break;
        }
      break;
      case "scissors":
        switch (this.PCHand) {
          case "rock":
            this.pcScore++;
          break;
          case "paper":
            this.playerScore++;
          break;
          case "scissors":
          break;
        }
      break;
    }
  }

  updateScoresUI() {
    const playerScoreElement = document.querySelector(".player-score");
    const pcScoreElement = document.querySelector(".pc-score");

    playerScoreElement.textContent = this.playerScore;
    pcScoreElement.textContent = this.pcScore;
  }

  endGame() {
    this.playerScore = 0;
    this.pcScore = 0;
    this.isPlaying = false;

    console.log(this.playerScore, this.pcScore, "Game finished");
    this.playWinningSound();
  }

  playWinningSound() {
    const audio = new Audio();
    audio.src = "./assets/clap.mp3";

    document.body.appendChild(audio);

    audio.play();
    audio.onended = audio.remove;
  }
}

export default Game;