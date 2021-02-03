export function dateUStoJs(value) {
  const stringValue = String(value);
  const data = stringValue.replace(/-/g, ",");
  const date = new Date(data);
  return date;
}

export function datePtBrToUs(data) {
  var dia = data.split("/")[0];
  var mes = data.split("/")[1];
  var ano = data.split("/")[2];

  return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
}
export function dateUsToPtBr(data) {
  var dia = data.split("-")[2];
  var mes = data.split("-")[1];
  var ano = data.split("-")[0];

  return ("0" + dia).slice(-2) + "/" + ("0" + mes).slice(-2) + "/" + ano;
}
