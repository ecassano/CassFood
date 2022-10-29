function verifyLogin() {
  if (localStorage.getItem("logged") !== "true") {
    window.location.href = "/login";
  }
}

module.exports = {
  verifyLogin,
};
