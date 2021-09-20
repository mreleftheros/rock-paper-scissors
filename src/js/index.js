import UI from "./ui";

const init = () => {
  // variables
  const startBtn = document.getElementById("startBtn");

  // ui
  const ui = new UI();
  ui.renderIntro();

  //event listeners
  startBtn.addEventListener("click", ui.renderGame);
}

document.addEventListener("DOMContentLoaded", init);