import { addToLocalStorage, checkLocalStorage, getFromLocalStorage } from "./localstorage";
import game from "./game";

class UI {
  constructor() {
    this.intro = document.getElementById("intro");
    this.container = document.getElementById("main");
    this.username;
    this.welcomeScreen;
    this.gameScreen;
    this.restartScreen;;
    this.usernameInput;
  }

  renderRestartScreen() {
    const divElement = document.createElement("div");
    divElement.className = "main__restart active";
    divElement.id = "restartScreen";

    const pElement = document.createElement("p");
    pElement.classList.add("main__restart__result");
    pElement.textContent = game.result;

    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("type", "button");
    buttonElement.classList.add("main__welcome__btn");

    const spanElement = document.createElement("span");
    spanElement.classList.add("main__welcome__btn__text");
    spanElement.textContent = "Restart Game";

    buttonElement.addEventListener("click", () => {
      divElement.remove();
      game.init();
      this.updateScores(0, 0);
    });

    buttonElement.appendChild(spanElement);
    divElement.appendChild(pElement);
    divElement.appendChild(buttonElement);
    this.container.appendChild(divElement);
  }

  updateHands(e, html) {
    const hand = e.target;
    hand.classList.add("active");

    const pcHandsContainer = document.getElementById("pc").querySelector(".main__game__player__hands");

    const buttonElement = document.createElement("button");
    buttonElement.className = "main__game__player__hands__hand pc";
    buttonElement.innerHTML = html;
    
    pcHandsContainer.appendChild(buttonElement);
   
    if (game.playerScore === game.winningScore || game.pcScore === game.winningScore) {
      hand.classList.remove("active");
      buttonElement.remove();
      game.endGame();
      return;
    }
    setTimeout(() => {
      hand.classList.remove("active");
      buttonElement.remove();
      game.isPlaying = true;
    }, 500)
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