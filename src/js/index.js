// variables
const usernameInput = document.getElementById("usernameInput");
const title = document.getElementById("title");

// function which takes current value of username and saves it localStorage
const handleUsernameInput = e => {
  let usernameValue = e.currentTarget.value.trim();

  addToLocalStorage(usernameValue);
};

// event listeners
usernameInput.addEventListener("input", handleUsernameInput);