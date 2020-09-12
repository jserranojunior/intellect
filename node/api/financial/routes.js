import express from "express";
import financial from "../financial/controllers/FinancialController.js";
const routes = express();

routes.get("/financial/:dataselecionada", financial.get);
routes.post("/financial/contasapagar", financial.store);

export default routes;
