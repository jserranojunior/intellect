import CategoriasContas from "../modals/CategoriasContasAPagar.js";
import ContasApagar from "../modals/ContasAPagar.js";

export default {
  async get(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    let categorias = await CategoriasContas.getCategoriasContasValores(
      req.params
    );

    res.json(categorias);
  },

  async store(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    let insertData = await ContasApagar.storeContasAPagar(req.body);
    res.json(insertData);
  },
};
