import CategoriasContasAPagar from "../modals/CategoriasContasAPagar";
import Contas from "../modals/ContasAPagar";
import Valores from "../modals/ValoresContasAPagar";
import Pagas from "../modals/ContasPagas";
import { Request, Response } from "express";
import { promises } from "fs";

const ContasPagas = new Pagas();
const ContasAPagar = new Contas();
const ValoresContasAPagar = new Valores();
let CategoriasContas = new CategoriasContasAPagar();
interface IBodyType {
  body: { aa: string };
}
export default {
  async get(req: Request, res: Response) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");

    req.params.userId = req.body.userId

    let categorias = await CategoriasContas.getCategoriasContasValores(
      req.params
    );

    res.json(categorias);
  },

  async store(req: Request, res: Response) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
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

  async update(req: Request, res: Response) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT");

    

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
        res.json(erro);
      });

    let Valor:any;

   async function verifyExistValueBillsToPay(){
     await ValoresContasAPagar.getCountIdValorContaAPagarWithIdContas(
      req.params.id,
      req.params.dataselecionada
    ).then(result => {     
      if (result > 0) {      
        Update()
    } else {     
      Store
    }
    });
   }

async function Update(){
  return await ValoresContasAPagar.updateValoresContasAPagar(
        req.params.id,
        req.body
      )
}
    async function Store(){
      return await ValoresContasAPagar.storeValoresContasAPagar(
        req.params.id,
        req.body
      )
    }

    

    

verifyExistValueBillsToPay().then(() => {
   if (Contas) {
      res.json(true);
    } else {
      res.status(500).send(false);
    }
})


  },

  async edit(req: Request, res: Response) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");

    const id = req.params.id;

    let contas = await ContasAPagar.getContasWithIdAndDataSelecionada(
      id,
      req.params
    );
    res.json(contas);
  },

  async storeContasPagas(req: Request, res: Response) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");

    try {
      if (req.body.data_pagamento.includes("/")) {
        req.body.data_pagamento = req.body.data_pagamento
          .split("/")
          .reverse()
          .join("-");
      }

      let ContaPaga = await ContasPagas.store(req.body);

      const insertsContaValor = ContaPaga;

      res.json(insertsContaValor);
    } catch (erro) {
      console.log(erro);
    }
  },

  async deleteContasPagas(req: Request, res: Response) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE");

    try {
      let contaDeletada = {};
      if (req.params.data_pagamento.includes("/")) {
        req.params.data_pagamento = req.params.data_pagamento
          .split("/")
          .reverse()
          .join("-");
      }

      let ContaPagaDeletada = await ContasPagas.delete(req.params);

      contaDeletada = ContaPagaDeletada;

      res.json(contaDeletada);
    } catch (erro) {
      res.json(erro);
      console.log(erro);
    }
  },
};
