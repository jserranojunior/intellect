// import User from "../modals/Users.js";
import knex from "../../../db/database.js";
export default {
  async get(req, res) {
    knex("categorias_contas_a_pagars").then((result) => {
      return res.json(result);
    });
  },
};
