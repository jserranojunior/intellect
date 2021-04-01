import { useAuth } from "@/modules/auth/use/useAuth.js";
export const AuthMiddleware = () => {
  async function auth(to, from, next) {
    return useAuth()
      .isLogged()
      .then((res) => {
        console.log("Auth");
        if (to.name !== "Login" && res) {
          next();
        } else if (to.name !== "Login" && !res) {
          return next({ name: "Login" });
        } else if (to.name === "Login" && res) {
          return next({ name: "Financeiro" });
        } else if (to.name === "Login" && !res) {
          next();
        }
      });
  }
  return { auth };
};
