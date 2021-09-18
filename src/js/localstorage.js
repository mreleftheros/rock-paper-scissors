const checkLocalStorage = () => {
  return localStorage.getItem("username") ? true : false;
};

// saves given username value to localStorage
const addToLocalStorage = username => {
  localStorage.setItem("username", username);
};

export { addToLocalStorage, checkLocalStorage };