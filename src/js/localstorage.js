// saves given username value to localStorage
const addToLocalStorage = username => {
  localStorage.setItem("username", username);
};

export { addToLocalStorage };