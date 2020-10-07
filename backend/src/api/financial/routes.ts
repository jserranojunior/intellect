import express from "express";
import financial from "./controllers/FinancialController";
const routes = express();

routes.get("/financial/:dataselecionada", financial.get);
routes.post("/financial/billstopay", financial.store);
routes.post("/financial/contapaga", financial.storeContasPagas);
routes.delete(
  "/financial/contapaga/:contas_a_pagar_id/:data_pagamento",
  financial.deleteContasPagas
);

routes.get("/financial/billstopay/:id/:dataselecionada", financial.edit);
routes.put("/financial/billstopay/:id/:dataselecionada", financial.update);

export default routes;
