import home from "../api/home/routes.js";
import users from "../api/users/routes.js";
import financial from "../api/financial/routes.js";
import express from "express";
// import "./db/modals.js";

const app = express();
app.use(home, users, financial);

export default app;
