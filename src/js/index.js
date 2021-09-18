import UI from "./ui";

const init = () => {
  // ui
  const ui = new UI();
  
  ui.renderIntro();
}

// event listeners
document.addEventListener("DOMContentLoaded", init);