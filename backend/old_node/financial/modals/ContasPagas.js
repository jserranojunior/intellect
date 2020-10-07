import Modal from "../../../db/Modal.js";

class ContasPagas extends Modal {
  async getContasPagas(id, params) {
    const anoMesSelecionado = params.dataselecionada.substring(0, 7);

    let queryRaw = `SUBSTRING(data_pagamento,1,7) = "${anoMesSelecionado}"`;

    let Pagas = await this.knex("contas_pagas")
      .whereRaw(queryRaw)
      .andWhere("contas_a_pagar_id", id)
      .orderBy("id", "desc")
      .first()
      .then(function (result) {
        return result;
      });

    return Pagas;
  }
}

export default ContasPagas;
