import { reactive } from "vue";

export const store = reactive({
  operacoes: [
    {
      data: "2024-03-25",
      tick: "TSLA34",
      qtdCompra: 400,
      qtdVenda: null,
      valorCompra: 26.5,
      valorVenda: null,
    },
    {
      data: "2024-06-06",
      tick: "TSLA34",
      qtdCompra: 350,
      qtdVenda: null,
      valorCompra: 29.12,
      valorVenda: null,
    },
    {
      data: "2024-06-17",
      tick: "TSLA34",
      qtdCompra: 400,
      qtdVenda: null,
      valorCompra: 31.65,
      valorVenda: null,
    },
    {
      data: "2024-07-12",
      tick: "TSLA34",
      qtdCompra: null,
      qtdVenda: 400,
      valorCompra: null,
      valorVenda: 31.26,
    },
    {
      data: "2024-07-12",
      tick: "TSLA34",
      qtdCompra: null,
      qtdVenda: 750,
      valorCompra: null,
      valorVenda: 32.89,
    },
  ] as any,
  tipoOperacao: "compra",
  novaOperacao: {
    data: new Date().toISOString().split("T")[0],
    tick: "TSLA34",
    qtdCompra: null,
    qtdVenda: null,
    valorCompra: null,
    valorVenda: null,
  },
});
