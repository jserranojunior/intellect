import UserController from "./controllers/UsersController.js";

import express from "express";
const routes = express();

routes.get("/users", UserController.get);

export default routes;
