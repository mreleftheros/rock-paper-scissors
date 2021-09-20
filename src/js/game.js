import { getFromLocalStorage } from "./localstorage";

class Game {
  constructor() {
    this.handsContainer;
    this.handOptions;
    this.username = getFromLocalStorage();
    this.playerHand;
    this.PCHand;
    this.playerScore = 0;
    this.PCScore = 0;
    this.winningScore = 3;
  }

  init() {
    this.handsContainer = document.getElementById("hands");
    
    this.handsContainer.addEventListener("click", e => this.chooseHand(e));
  }
  
  chooseHand(e) {
    if (e.target.tagName !== "SPAN") return; // check
    
    this.handOptions = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * this.handOptions.length);
    
    this.playerHand = e.target.getAttribute("data-hand");
    this.PCHand = this.handOptions[randomIndex];

    this.updateScore();
  }

  updateScore() {
    switch (this.playerHand) {
      case "rock":
        switch (this.PCHand) {
          case "rock":
          break;
          case "paper":
            this.PCScore++;
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
            this.PCScore++;
          break;
        }
      break;
      case "scissors":
        switch (this.PCHand) {
          case "rock":
            this.PCScore++;
          break;
          case "paper":
            this.playerScore++;
          break;
          case "scissors":
          break;
        }
      break;
    }

    console.log(this.playerScore, this.PCScore)
  }
}

export default Game;