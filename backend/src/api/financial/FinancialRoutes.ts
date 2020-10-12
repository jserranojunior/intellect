
import financial from "./controllers/FinancialController";
import RouterClass from '../../routes/RouterClass'
export default class FinancialRoutes extends RouterClass{
    constructor(){
      super();
    }
    routes(){
     return [
        this.app.get("/financial/:dataselecionada", financial.get),
        this.app.post("/financial/billstopay", financial.store),
        this.app.post("/financial/contapaga", financial.storeContasPagas),
        this.app.delete(
          "/financial/contapaga/:contas_a_pagar_id/:data_pagamento",
          financial.deleteContasPagas
        ),
        this.app.get("/financial/billstopay/:id/:dataselecionada", financial.edit),
        this.app.put("/financial/billstopay/:id/:dataselecionada", financial.update),
        ]
      }
}





