"use strict";
const CategoriasAPagar = use("App/Models/Financeiro/CategoriasContasAPagar");
const ContasAPagar = use("App/Models/Financeiro/ContasAPagar");
const ValoresContasAPagar = use("App/Models/Financeiro/ValoresContasAPagar");
const Database = use("Database");

class ControleFinanceiroController {
  async index({ params }) {
    const date = params.date;
    const ContasAPagar = await CategoriasAPagar.query()
      .with("contas_a_pagars", (builder) => {
        builder
          .whereRaw("SUBSTRING(inicio_data_pagamento,1,7) <= ?", [date])
          .whereRaw("SUBSTRING(fim_data_pagamento,1,7) >= ?", [date])
          .orWhereRaw("SUBSTRING(inicio_data_pagamento,1,7) <= ?", [date])
          .whereNull("fim_data_pagamento")
          .orWhereRaw("SUBSTRING(inicio_data_pagamento,1,7) <= ?", [date])
          .whereRaw('fim_data_pagamento = ""')

          .with("valores_contas_a_pagars", (builder) => {
            builder
              .orderBy("id", "DESC")
              .whereRaw("SUBSTRING(data_pagamento,1,7) = ?", [date]);
          });
      })
      .fetch();

    let Categorias = ContasAPagar.toJSON();

    let totalGeralContasAPagar = 0;
    let newValoresCategorias = [];
    let totalCategoria = 0;

    let NewCategorias = Categorias.map((item) => {
      let contas = item.contas_a_pagars.map((conta) => {
        let ValorAPagar = {};

        ValorAPagar = ValoresContasAPagar.query()
          .where("contas_a_pagar_id", conta.id)
          .whereRaw("SUBSTRING(data_pagamento,1,7) < ?", [date])
          .orderBy("id", "desc")
          .limit(1)
          .fetch();
        conta.valores_contas_a_pagars = ValorAPagar;
        totalCategoria += conta.valores_contas_a_pagars.valor;
        return conta;
      });

      return contas;

      item["totalCategoria"] = totalCategoria;
      totalGeralContasAPagar += parseFloat(totalCategoria);
      return item;
    });

    // return NewCategorias;

    // for (var categorias in Categorias) {
    //   let totalCategoria = 0;
    //   var ValorAPagar = {};

    //   for (var Contas in Categorias[categorias].contas_a_pagars) {
    //     if (
    //       Categorias[categorias].contas_a_pagars[Contas]
    //         .valores_contas_a_pagars == "" ||
    //       Categorias[categorias].contas_a_pagars[Contas]
    //         .valores_contas_a_pagars == null
    //     ) {
    //       ValorAPagar = await ValoresContasAPagar.query()
    //         .where(
    //           "contas_a_pagar_id",
    //           Categorias[categorias].contas_a_pagars[Contas].id
    //         )
    //         .whereRaw("SUBSTRING(data_pagamento,1,7) < ?", [date])
    //         .orderBy("id", "desc")
    //         .limit(1)
    //         .fetch();

    //       Categorias[categorias].contas_a_pagars[
    //         Contas
    //       ].valores_contas_a_pagars = ValorAPagar;
    //     }

    //     newValoresCategorias = Array.from(
    //       Categorias[categorias].contas_a_pagars[Contas].valores_contas_a_pagars
    //     );

    //     // newValoresCategorias.forEach((item, index, array) => {
    //     //   if (item) {
    //     //     totalCategoria += array[item].valor;
    //     //   }
    //     // });

    //     // for (var valores in Categorias[categorias].contas_a_pagars[Contas]
    //     //   .valores_contas_a_pagars) {
    //     //   if (
    //     //     Categorias[categorias].contas_a_pagars[Contas]
    //     //       .valores_contas_a_pagars[valores]
    //     //   ) {
    //     //     var valoresAPagar =
    //     //       Categorias[categorias].contas_a_pagars[Contas]
    //     //         .valores_contas_a_pagars[valores].valor;

    //     //     totalCategoria =
    //     //       parseFloat(totalCategoria) + parseFloat(valoresAPagar);
    //     //   }
    //     // }
    //   }
    //   Categorias[categorias]["totalCategoria"] = totalCategoria;
    //   totalGeralContasAPagar =
    //     parseFloat(totalGeralContasAPagar) + parseFloat(totalCategoria);
    // }

    // return newValoresCategorias;

    return {
      contasAPagar: NewCategorias,
      TotalGeralContasAPagar: totalGeralContasAPagar,
    };
  }
}

module.exports = ControleFinanceiroController;
