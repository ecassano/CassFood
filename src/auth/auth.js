let isLogged;

function verifyLogin() {
  if (localStorage.getItem("e-mail")) {
    isLogged = true;
  } else {
    isLogged = false;
    window.location.href = "/login";
  }

  window.localStorage.setItem("logged", isLogged);
}

module.exports = {
  verifyLogin,
};
