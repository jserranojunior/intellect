import home from "../api/home/routes";
// import users from "../api/users/routes.js";
import financial from "../api/financial/routes";
import express from "express";
// import "./db/modals.js";

const app = express();
app.use(home, financial);

export default app;
