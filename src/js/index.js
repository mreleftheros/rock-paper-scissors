import UI from "./ui";

const init = () => {
  // variables
  const startBtn = document.getElementById("startBtn");
  // ui
  const ui = new UI();
  ui.renderIntro();

}

//event listeners
document.addEventListener("DOMContentLoaded", renderIntro);
startBtn.addEventListener("click", ui.renderGame);