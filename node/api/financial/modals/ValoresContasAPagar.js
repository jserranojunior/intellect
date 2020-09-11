import knex from "../../../db/database.js";
let ValoresContasAPagar = {};

ValoresContasAPagar.getValoresContasAPagar = async function (id, params) {
  let ValoresContasAPagar = {};
  const anoMesSelecionado = params.dataselecionada.substring(0, 7);

  let queryRaw = `SUBSTRING(data_pagamento,1,7) = "${anoMesSelecionado}"`;

  let value = await selectValores(id, queryRaw);

  if (value) {
    console.log(value);
    ValoresContasAPagar = value;
  } else {
    let queryRaw = `SUBSTRING(data_pagamento,1,7) < "${anoMesSelecionado}"`;
    ValoresContasAPagar = await selectValores(id, queryRaw);
  }

  let data = ValoresContasAPagar;
  return data;
};

async function selectValores(id, query) {
  let Valores = await knex("valores_contas_a_pagars")
    .whereRaw(query)
    .andWhere("contas_a_pagar_id", id)
    .first()
    .then(function (result) {
      return result;
    });

  return Valores;
}

export default ValoresContasAPagar;
