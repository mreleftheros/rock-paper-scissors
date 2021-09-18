import { addToLocalStorage, checkLocalStorage } from "./localstorage";

class UI {
  constructor() {
    this.intro = document.getElementById("intro");
    this.usernameInput;
  }
  renderIntro() {
    let html;
    let usernameExists = checkLocalStorage();

    if (usernameExists) {
      console.log("1st")
      let username = localStorage.getItem("username");
      html = `
        <p class="main__welcome__intro__message">Welcome back, ${username}!</p>
      `;
        
      this.intro.innerHTML = html;
    } 
    else {
      console.log("2nd")
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
}

export { UI as default };