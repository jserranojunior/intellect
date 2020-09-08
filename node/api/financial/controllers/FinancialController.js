import knex from "../../../db/database.js";

async function getContasWithId(id) {
  let data = [];
  await knex("contas_a_pagars")
    .where("categorias_contas_a_pagar_id", id)
    .then(function (result) {
      data = result;
      return data;
    });
  return data;
}

async function getCategorias() {
  let data = [];
  await knex("categorias_contas_a_pagars").then((categorias) => {
    data = categorias;
    return data;
  });
  return data;
}

export default {
  async get(req, res) {
    let categorias = await getCategorias();
    let newCategorias = categorias.map(async (item) => {
      item.contas_a_pagars = await getContasWithId(item.id);
      return item;
    });
    let data = await Promise.all(newCategorias);
    res.json(data);
  },
};
