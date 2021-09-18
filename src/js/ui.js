import { addToLocalStorage, checkLocalStorage } from "./localstorage";
import Game from "./game";

class UI {
  constructor() {
    this.intro = document.getElementById("intro");
    this.welcomeScreen;
    this.usernameInput;
  }

  renderIntro() {
    let html;
    let usernameExists = checkLocalStorage();

    if (usernameExists) {
      let username = localStorage.getItem("username");
      html = `
        <p class="main__welcome__intro__message">
          Welcome back, <span class="main__welcome__intro__message__username">${username}</span>!
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
  }
}

export { UI as default };