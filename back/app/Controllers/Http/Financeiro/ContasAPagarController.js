"use strict";
const ContasAPagar = use("App/Models/Financeiro/ContasAPagar");
const ValoresAPagar = use("App/Models/Financeiro/ValoresContasAPagar");
const Database = use("Database");
const moment = use("moment");

class ContasAPagarController {
  async index({ auth }) {
    // const Contas = await Database.table('contas_a_pagars')
    // // .innerJoin('users', 'users.id', 'contas_a_pagars.user_id')
    // .innerJoin('users', function () {
    //   this
    //     .on('users.id', 'contas_a_pagars.user_id')
    // })

    const Contas = await ContasAPagar.query()
      .with("valores_contas_a_pagars", (builder) => {
        builder
          .select(Database.raw("sum(valor) as sum"))
          .select("contas_a_pagar_id", "id")
          .groupBy("contas_a_pagar_id", "id");
      })

      .fetch();

    return Contas;
  }

  async create({ request, response, view }) {}

  async store({ request, auth }) {
    var valorFloat = request.input("valor");

    if (valorFloat === "") {
      valorFloat = 0;
    } else {
      valorFloat = valorFloat.replace(".", "");
      valorFloat = valorFloat.replace(",", ".");
      valorFloat = parseFloat(valorFloat);
    }

    moment.locale("pt-BR");
    var dataInicioMoment = request.input("inicio_data_pagamento");
    dataInicioMoment = moment(moment(dataInicioMoment, "DD-MM-YYYY")).format(
      "YYYY-MM-DD"
    );

    var dataFimMoment = request.input("fim_data_pagamento");
    dataFimMoment = moment(moment(dataFimMoment, "DD-MM-YYYY")).format(
      "YYYY-MM-DD"
    );

    var datasFormatadas = {
      inicio_data_pagamento: dataInicioMoment,
      fim_data_pagamento: dataFimMoment,
    };

    const dataConta = request.only([
      "favorecido",

      "categorias_contas_a_pagar_id",
      "descricao",
      "forma_pagamento",
      "tipo_conta",
      "parcelas",
    ]);

    var dataValor = { valor: valorFloat };

    const conta = await ContasAPagar.create({
      user_id: auth.user.id,
      ...dataConta,
      ...datasFormatadas,
    });

    const valor = await ValoresAPagar.create({
      contas_a_pagar_id: conta.id,
      data_pagamento: dataConta.inicio_data_pagamento,
      ...dataValor,
    });

    const contaValor = { conta: conta, valor: valor };

    return contaValor;
  }

  /**
   * Display a single contasapagar.
   * GET contasapagars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  async edit({ params, request, response, view }) {
    const Contas = await ContasAPagar.query()

      .where("id", "=", params.id)
      .with("valores_contas_a_pagars", (builder) => {
        builder
          .whereRaw("SUBSTRING(data_pagamento,1,7) <= ?", [params.data])

          .orderBy("id", "desc")
          .limit(1);
      })

      .fetch();

    return Contas;
  }

  /**
   * Update contasapagar details.
   * PUT or PATCH contasapagars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a contasapagar with id.
   * DELETE contasapagars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = ContasAPagarController;
