
class UI {
  constructor() {
    this.intro = document.getElementById("intro");
  }

  renderIntro() {
    let html;

    if (localStorage.getItem("username")) {
      let username = localStorage.getItem("username");
      html = `
        <p class="main__welcome__intro__message>Welcome back, ${username}!</p>
      `;
    } else {
      html = `
      <label for="username" class="main__welcome__intro__label">Username</label>
      <input type="text" class="main__welcome__intro__input" id="usernameInput" placeholder="Enter a username...">
      `;
    }

    this.intro.innerHTML = html;
  }
}

export { UI as default };