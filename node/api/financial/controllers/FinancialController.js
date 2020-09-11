import CategoriasContas from "../modals/CategoriasContasAPagar.js";

export default {
  async get(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    let categorias = await CategoriasContas.getCategoriasContasValores(
      req.params
    );

    res.json(categorias);
  },
};
