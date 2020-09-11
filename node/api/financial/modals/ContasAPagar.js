import knex from "../../../db/database.js";
import ValoresContasAPagar from "./ValoresContasAPagar.js";
let ContasApagar = {};

ContasApagar.getContasWithId = async function (id, params) {
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

export default ContasApagar;
