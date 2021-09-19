// checks localStorage for username and returns true if exists otherwise false
const checkLocalStorage = () => {
  return localStorage.getItem("username") ? true : false;
};

// saves given username value to localStorage
const addToLocalStorage = username => {
  localStorage.setItem("username", username);
};

// returns current value of username from localStorage
const getFromLocalStorage = () => {
  return localStorage.getItem("username");
};

export { addToLocalStorage, checkLocalStorage, getFromLocalStorage };