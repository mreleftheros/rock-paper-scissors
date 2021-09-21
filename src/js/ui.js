import { addToLocalStorage, checkLocalStorage, getFromLocalStorage } from "./localstorage";

class UI {
  constructor() {
    this.intro = document.getElementById("intro");
    this.container;
    this.username;
    this.welcomeScreen;
    this.gameScreen;
    this.usernameInput;
  }

  updateHands(e, html) {
    const hand = e.target;
    hand.classList.add("active");

    const pcHandsContainer = document.getElementById("pc").querySelector(".main__game__player__hands");
    pcHandsContainer.innerHTML = `
      <button class="main__game__player__hands__hand">${html}</button>
    `;
  }

  updateScores(playerScore, pcScore) {
    const playerScoreElement = document.querySelector(".player-score");
    const pcScoreElement = document.querySelector(".pc-score");

    playerScoreElement.textContent = playerScore;
    pcScoreElement.textContent = pcScore;
  }

  renderIntro() {
    let html;
    let usernameExists = checkLocalStorage();

    if (usernameExists) {
      this.username = getFromLocalStorage();
      html = `
        <p class="main__welcome__intro__message">
          Welcome back, <span class="main__welcome__intro__message__username">${this.username}</span>!
        </p>
        <button type="button" class="main__welcome__intro__"
      `;
        
      this.intro.innerHTML = html;
    } 
    else {
      html = `
      <label for="username" class="main__welcome__intro__label">Username</label>
      <input type="text" class="main__welcome__intro__input" id="usernameInput" placeholder="Enter a username...">
      `;

      this.intro.innerHTML = html;
      this.usernameInput = document.getElementById("usernameInput");

      // function which takes current value of username and saves it localStorage
      this.usernameInput.addEventListener("input", this.handleUsernameInput);
    }
  }

  handleUsernameInput(e) {
    let usernameValue = e.currentTarget.value.trim();

    addToLocalStorage(usernameValue);
  }

  renderGame() {
    this.welcomeScreen = document.getElementById("welcomeScreen");
    this.welcomeScreen.classList.remove("active");
    this.container = document.getElementById("main");
    this.username = getFromLocalStorage();
    
    let html = `
    <section class="main__game" id="gameScreen">
      <div class="main__game__player">
        <h2 class="main__game__player__title">${this.username}</h2>
        <div class="main__game__player__hands" id="hands">
          <button class="main__game__player__hands__hand" data-hand="rock">&#128074;</button>
          <button class="main__game__player__hands__hand" data-hand="paper">&#9995;</button>
          <button class="main__game__player__hands__hand" data-hand="scissors">&#129310;</button>
        </div>
        <div class="main__game__player__score">
          <span class="main__game__player__score__text">Score</span>
          <span class="main__game__player__score__value player-score">0</span>
        </div>
      </div>

      <div class="main__game__player" id="pc">
        <h2 class="main__game__player__title">PC</h2>
        <div class="main__game__player__hands"></div>
        <div class="main__game__player__score">
          <span class="main__game__player__score__text">Score</span>
          <span class="main__game__player__score__value pc-score">0</span>
        </div>
      </div>
    </section>
    `;

    this.container.innerHTML = html;
  }
}

const ui = new UI();

export default ui;