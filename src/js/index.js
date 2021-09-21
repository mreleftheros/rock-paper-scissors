import ui from "./ui";
import game from "./game";

const init = () => {
  // variables
  const startBtn = document.getElementById("startBtn");

  // ui
  ui.renderIntro();

  //event listeners
  startBtn.addEventListener("click", () => {
    ui.renderGame();
    game.init();
  });
}

document.addEventListener("DOMContentLoaded", init);