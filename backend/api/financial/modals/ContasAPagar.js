import knex from "../../../db/database.js";
import ValoresContasAPagar from "./ValoresContasAPagar.js";
let ContasApagar = {};

ContasApagar.getContasWithIdCategoria = async function (id, params) {
  const anoMesSelecionado = params.dataselecionada.substring(0, 7);

  return await knex("contas_a_pagars")
    .where("categorias_contas_a_pagar_id", id)
    .whereRaw(`SUBSTRING(inicio_data_pagamento,1,7) <= "${anoMesSelecionado}"`)
    .whereRaw(`SUBSTRING(fim_data_pagamento,1,7) >= "${anoMesSelecionado}"`)

    .orWhere("categorias_contas_a_pagar_id", id)
    .whereRaw(`SUBSTRING(inicio_data_pagamento,1,7) <= "${anoMesSelecionado}"`)
    .whereNull("fim_data_pagamento")

    .orWhere("categorias_contas_a_pagar_id", id)
    .whereRaw(`SUBSTRING(inicio_data_pagamento,1,7) <= "${anoMesSelecionado}"`)
    .andWhere("fim_data_pagamento", "=", "")

    .then((contas) => {
      let Contas = contas.map(async (conta) => {
        conta.valores_contas_a_pagars = await ValoresContasAPagar.getValoresContasAPagar(
          conta.id,
          params
        );
        return conta;
      });

      let data = Promise.all(Contas);
      return data;
    });
};

ContasApagar.getContasWithIdAndDataSelecionada = async function (id, params) {
  const anoMesSelecionado = params.dataselecionada.substring(0, 7);

  return await knex("contas_a_pagars")
    .where("id", id)
    .whereRaw(`SUBSTRING(inicio_data_pagamento,1,7) <= "${anoMesSelecionado}"`)
    .whereRaw(`SUBSTRING(fim_data_pagamento,1,7) >= "${anoMesSelecionado}"`)

    .orWhere("id", id)
    .whereRaw(`SUBSTRING(inicio_data_pagamento,1,7) <= "${anoMesSelecionado}"`)
    .whereNull("fim_data_pagamento")

    .orWhere("id", id)
    .whereRaw(`SUBSTRING(inicio_data_pagamento,1,7) <= "${anoMesSelecionado}"`)
    .andWhere("fim_data_pagamento", "=", "")

    .then((contas) => {
      let Contas = contas.map(async (conta) => {
        conta.valores_contas_a_pagars = await ValoresContasAPagar.getValoresContasAPagar(
          conta.id,
          params
        );
        return conta;
      });

      let data = Promise.all(Contas);
      return data;
    });
};

ContasApagar.storeContasAPagar = async function (body) {
  const dataInsert = {
    user_id: body.user_id,
    favorecido: body.favorecido,
    categorias_contas_a_pagar_id: body.categorias_contas_a_pagar_id,
    inicio_data_pagamento: body.inicio_data_pagamento,
    fim_data_pagamento: body.fim_data_pagamento,
    descricao: body.descricao,
    forma_pagamento: body.forma_pagamento,
    tipo_conta: body.tipo_conta,
    parcelas: body.parcelas,
  };

  const newInsert = await knex("contas_a_pagars").insert(dataInsert);
  let data = Promise.all(newInsert);
  return data;
};

ContasApagar.updateContasAPagar = async function (id, body) {
  // return id;
  // return dataselecionada;

  const dataUpdate = {};
  body.user_id ? (dataUpdate.user_id = body.user_id) : "";
  body.favorecido ? (dataUpdate.favorecido = body.favorecido) : "";
  body.categorias_contas_a_pagar_id
    ? (dataUpdate.categorias_contas_a_pagar_id =
        body.categorias_contas_a_pagar_id)
    : "";
  body.inicio_data_pagamento
    ? (dataUpdate.inicio_data_pagamento = body.inicio_data_pagamento)
    : "";
  body.fim_data_pagamento
    ? (dataUpdate.fim_data_pagamento = body.fim_data_pagamento)
    : "";
  body.descricao ? (dataUpdate.descricao = body.descricao) : "";
  body.forma_pagamento
    ? (dataUpdate.forma_pagamento = body.forma_pagamento)
    : "";
  body.tipo_conta ? (dataUpdate.tipo_conta = body.tipo_conta) : "";
  body.parcelas ? (dataUpdate.parcelas = body.parcelas) : "";

  await knex("contas_a_pagars")
    .where({ id: id })
    .update(dataUpdate)
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((erro) => {
      console.log(Error(erro));
      return erro;
    });

  // // let data = Promise.all(newUpdate);
  // // return data;
  // return dataUpdate;
};

export default ContasApagar;
