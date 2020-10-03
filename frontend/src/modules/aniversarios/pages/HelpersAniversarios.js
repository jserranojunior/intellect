import { dateUStoJs } from "../../../helpers/helpersDates.js";

export const verificarAniversarios = (dataInserida) => {
  const dataFormatada = dateUStoJs(dataInserida);
  const date = new Date();
  const primeiroDia = new Date(date.getFullYear(), date.getMonth(), 1);
  const ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  if (dataFormatada >= primeiroDia && dataFormatada <= ultimoDia) {
    return true;
  } else {
    return false;
  }
};
