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
  console.log(to.name);
  if (to.name !== "Login" && validationToken() === false) {
    next({ name: "Login" });
  }
  if (to.name === "Login" && validationToken() === true) {
    next({ name: "financeiro" });
  } else {
    next();
  }
}

export default auth;
