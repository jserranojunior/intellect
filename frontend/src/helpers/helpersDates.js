export function dateUStoJs(value) {
  const stringValue = String(value);
  const data = stringValue.replace(/-/g, ",");
  const date = new Date(data);
  return date;
}
