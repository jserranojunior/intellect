import Modal from "../../../db/Modal.js";
import ContasAPagar from "./ContasAPagar.js";

class CategoriasContasAPagar extends Modal {
  constructor() {
    super();
    this.ContasAPagar = new ContasAPagar();
  }
  async getCategoriasContasValores(params) {
    return await this.knex("categorias_contas_a_pagars").then((categorias) => {
      let Categorias = categorias.map(async (categoria) => {
        categoria.contas_a_pagars = await this.ContasAPagar.getContasWithIdCategoria(
          categoria.id,
          params
        );
        return categoria;
      });

      let newCategorias = Promise.all(Categorias);
      let CategoriasSomadas = somarValoresCategorias(newCategorias);
      let cat = CategoriasSomadas;

      let data = cat;

      return data;
    });
  }
}

async function somarValoresCategorias(Categorias) {
  let totalCategorias = 0;
  let ArrayCategorias = Array.from(await Categorias);

  let newCategorias = ArrayCategorias.map((categoria) => {
    let contas = categoria.contas_a_pagars;

    let totalCategoria = contas.reduce((acumulador, conta) => {
      if (conta.valores_contas_a_pagars) {
        acumulador += +conta.valores_contas_a_pagars.valor;
      }
      return acumulador;
    }, 0);
    categoria.totalCategoria = totalCategoria;
    totalCategorias += +totalCategoria;
    return categoria;
  });
  let data = {};
  data.categorias = await Promise.all(newCategorias);
  data.totalCategorias = totalCategorias;
  return data;
}

export default CategoriasContasAPagar;
