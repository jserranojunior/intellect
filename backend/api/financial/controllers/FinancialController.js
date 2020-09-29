import CategoriasContasAPagar from "../modals/CategoriasContasAPagar.js";
import Contas from "../modals/ContasAPagar.js";
import Valores from "../modals/ValoresContasAPagar.js";

const ContasAPagar = new Contas();
const ValoresContasAPagar = new Valores();
let CategoriasContas = new CategoriasContasAPagar();

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

    if (req.body.inicio_data_pagamento.includes("/")) {
      req.body.inicio_data_pagamento = req.body.inicio_data_pagamento
        .split("/")
        .reverse()
        .join("-");
    }
    if (req.body.fim_data_pagamento.includes("/")) {
      req.body.fim_data_pagamento = req.body.fim_data_pagamento
        .split("/")
        .reverse()
        .join("-");
    }

    if (req.body.valor) {
      req.body.valor = req.body.valor.replace(".", "").replace(",", ".");
    }
    if (req.body.inicio_data_pagamento && !req.body.data_pagamento) {
      req.body.data_pagamento = req.body.inicio_data_pagamento;
    }

    let idContaInserida = await ContasAPagar.storeContasAPagar(req.body);
    let idValorInserido = await ValoresContasAPagar.storeValoresContasAPagar(
      idContaInserida,
      req.body
    );

    const insertsContaValor = [idContaInserida, idValorInserido];

    res.json(insertsContaValor);
  },

  async update(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    if (req.body.inicio_data_pagamento) {
      if (req.body.inicio_data_pagamento.includes("/")) {
        req.body.inicio_data_pagamento = req.body.inicio_data_pagamento
          .split("/")
          .reverse()
          .join("-");
      }
    }
    if (req.body.fim_data_pagamento) {
      if (req.body.fim_data_pagamento.includes("/")) {
        req.body.fim_data_pagamento = req.body.fim_data_pagamento
          .split("/")
          .reverse()
          .join("-");
      }
    }
    if (req.body.valor) {
      req.body.valor = +String(req.body.valor)
        .replace(".", "")
        .replace(",", ".");
    }

    if (!req.body.data_pagamento) {
      req.body.data_pagamento = req.params.dataselecionada;
    }

    let Contas = await ContasAPagar.updateContasAPagar(req.params.id, req.body)
      .then(() => true)
      .catch((erro) => {
        console.log(Error(erro));
        res.json("Contem erro " + erro);
      });

    let verifyExistValueBillsToPay = await ValoresContasAPagar.getCountIdValorContaAPagarWithIdContas(
      req.params.id,
      req.params.dataselecionada
    );

    let Valor = {};
    if (verifyExistValueBillsToPay) {
      Valor = await ValoresContasAPagar.updateValoresContasAPagar(
        req.params.id,
        req.body
      );
    } else {
      Valor = await ValoresContasAPagar.storeValoresContasAPagar(
        req.params.id,
        req.body
      ).then(() => {
        return true;
      });
    }
    if ((await Valor) && (await Contas)) {
      res.json(true);
    } else {
      res.json(false);
    }
  },

  async edit(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");

    // try {
    const id = req.params.id;

    let contas = await ContasAPagar.getContasWithIdAndDataSelecionada(
      id,
      req.params
    );

    res.json(contas);
    // } catch (erro) {
    //   res.json("Contem erro " + erro);
    // }
  },
};
