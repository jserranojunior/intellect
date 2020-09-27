import knex from "../../../db/database.js";
let ValoresContasAPagar = {};

ValoresContasAPagar.getValoresContasAPagar = async function (id, params) {
  let ValoresContasAPagar = {};
  const anoMesSelecionado = params.dataselecionada.substring(0, 7);

  let queryRaw = `SUBSTRING(data_pagamento,1,7) = "${anoMesSelecionado}"`;

  let value = await selectValores(id, queryRaw);

  if (value) {
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
    .orderBy("id", "desc")
    .first()
    .then(function (result) {
      return result;
    });

  return Valores;
}

ValoresContasAPagar.updateValoresContasAPagar = async function (id, body) {
  try {
    const dataUpdate = {};
    body.data_pagamento
      ? (dataUpdate.data_pagamento = body.data_pagamento)
      : "";
    body.valor ? (dataUpdate.valor = body.valor) : "";
    const anoMesSelecionado = dataUpdate.data_pagamento.substring(0, 7);

    await knex("valores_contas_a_pagars")
      .where({ contas_a_pagar_id: id })
      .whereRaw(`SUBSTRING(data_pagamento,1,7) = "${anoMesSelecionado}"`)
      .update(dataUpdate)
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((erro) => {
        console.log(Error(erro));
        return erro;
      });
  } catch (erro) {
    console.log(Error(erro));
    return erro;
  }
};

ValoresContasAPagar.getCountIdValorContaAPagarWithIdContas = async function (
  contas_a_pagar_id,
  data_pagamento
) {
  let Valor = await knex("valores_contas_a_pagars")
    .where("contas_a_pagar_id", contas_a_pagar_id)
    .where("data_pagamento", data_pagamento)
    .count("id as total")
    .then(function (result) {
      return result[0].total;
    })
    .catch((erro) => {
      return erro;
    });

  return Valor;
};

ValoresContasAPagar.storeValoresContasAPagar = async function (
  contas_a_pagars_id,
  body
) {
  const dataInsert = {};

  dataInsert.contas_a_pagar_id = contas_a_pagars_id;
  dataInsert.data_pagamento = body.data_pagamento;
  dataInsert.valor = body.valor;

  const newInsert = await knex("valores_contas_a_pagars").insert(dataInsert);
  let data = Promise.all(newInsert);
  return data;
};

export default ValoresContasAPagar;
