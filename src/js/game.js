

class Game {
  constructor() {
    this.hands;
    this.currentPlayerHand;
    this.currentPCHand;
  }

  init() {
    this.hands = document.getElementById("hands");

    this.hands.addEventListener("click", this.playHand);
  }

  playHand(e) {
    if (e.target.tagName !== "SPAN") return; // check


  }
}

export { Game as default };