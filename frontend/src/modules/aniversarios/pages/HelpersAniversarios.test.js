import { verificarAniversarios } from "./HelpersAniversarios.js";

test("Verifica se a data maior que o mês atual retorna falso", () => {
  const today = new Date();
  const nextMonth = today
    .setMonth(today.getMonth() + 1)
    .toLocaleString("fr-CA");
  expect(verificarAniversarios(nextMonth)).toBeFalsy();
});

test("Verifica se a data menor que o mês atual retorna falso", () => {
  const today = new Date();
  const previousMonth = today
    .setMonth(today.getMonth() - 1)
    .toLocaleString("fr-CA");
  expect(verificarAniversarios(today)).toBeFalsy();
});

test("Verifica se a data atual retorna verdadeiro", () => {
  const today = new Date();
  expect(verificarAniversarios(today)).toBeTruthy();
});

test("Verifica se o segundo dia do mês retorna verdadeiro", () => {
  const today = new Date();
  const secondDay = new Date(today.getFullYear(), today.getMonth(), 2);
  expect(verificarAniversarios(secondDay)).toBeTruthy();
});

test("Verifica se o segundo dia do mês retorna verdadeiro", () => {
  const today = new Date();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  expect(verificarAniversarios(firstDay)).toBeTruthy();
});

test("Verifica se no formato br returna true", () => {
  const today = new Date();
  const firstDay = today.toLocaleString("pt-BR", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric"
  });

  expect(verificarAniversarios(firstDay)).toBeTruthy();
});
