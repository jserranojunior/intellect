function validationToken() {
  const token = localStorage.getItem("token");
  if (
    !token ||
    token == "" ||
    token == undefined ||
    token == "undefined" ||
    token == null ||
    token.length == 0
  ) {
    return false;
  } else {
    return true;
  }
}

async function auth(to, from, next) {
  if (to.name !== "login" && validationToken() === false) {
    next({ name: "login" });
  }
  if (to.name === "login" && validationToken() === true) {
    next({ name: "financeiro" });
  } else {
    next();
  }
}

export default auth;
