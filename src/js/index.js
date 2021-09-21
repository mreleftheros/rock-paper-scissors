import ui from "./ui";
import Game from "./game";

const init = () => {
  // variables
  const startBtn = document.getElementById("startBtn");

  // ui
  ui.renderIntro();

  // game
  const game = new Game();

  //event listeners
  startBtn.addEventListener("click", () => {
    ui.renderGame();
    game.init();
  });
}

document.addEventListener("DOMContentLoaded", init);