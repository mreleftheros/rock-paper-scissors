import ui from "./ui";

class Game {
  constructor() {
    this.handsContainer;
    this.handOptions;
    this.playerHand;
    this.pcHand;
    this.playerScore = 0;
    this.pcScore = 0;
    this.winningScore = 3;
    this.isPlaying = false;
  }

  init() {
    this.reset();
    this.handsContainer = document.getElementById("hands");
    
    this.handsContainer.addEventListener("click", e => this.playHand(e));
  }

  reset() {
    this.playerScore = 0;
    this.pcScore = 0;
    this.isPlaying = true;
  }
  
  playHand(e) {
    if (e.target.tagName !== "BUTTON" || !this.isPlaying) return; // check
    
    this.isPlaying = false;

    this.handOptions = [
      {value: "rock", html: "&#128074;"},
      {value: "paper", html: "&#129306;"},
      {value: "scissors", html: "&#129310;"}
    ];
    let randomIndex = Math.floor(Math.random() * this.handOptions.length);
    
    this.playerHand = e.target.getAttribute("data-hand");
    let pcHandHTML = this.handOptions[randomIndex].html;
    this.pcHand = this.handOptions[randomIndex].value;

    this.updateScore();
    ui.updateScores(this.playerScore, this.pcScore);
    ui.updateHands(e, pcHandHTML);
  }

  updateScore() {
    switch (this.playerHand) {
      case "rock":
        switch (this.pcHand) {
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
        switch (this.pcHand) {
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
        switch (this.pcHand) {
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

  endGame() {
    this.isPlaying = false;

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

const game = new Game();

export default game;