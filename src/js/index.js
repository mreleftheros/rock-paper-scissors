import { addToLocalStorage } from "./localstorage";
import UI from "./ui";

// variables
const usernameInput = document.getElementById("usernameInput");

// function which takes current value of username and saves it localStorage
const handleUsernameInput = e => {
  let usernameValue = e.currentTarget.value.trim();

  addToLocalStorage(usernameValue);
};

// event listeners
usernameInput.addEventListener("input", handleUsernameInput);
document.addEventListener("DOMContentLoaded", UI.renderIntro);