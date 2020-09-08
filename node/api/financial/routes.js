import express from "express";
import financial from "../financial/controllers/FinancialController.js";
const routes = express();

routes.get("/financial", financial.get);

export default routes;
