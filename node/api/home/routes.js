// books.js
import express from "express";
const routes = express();

let books = [
  { id: 101, name: "Clube da koa", author: "Chuck Paanine" },
  { id: 102, name: "Ta isso ai", author: "Gillian Flynn" },
  { id: 103, name: "Frankenstein", author: "Mary Shelley" },
  { id: 101, name: "Into The Wild", author: "John Krakauer" },
];

routes.get("/", (req, res) => {
  res.send(`It's Work ${books}`);
});

export default routes;
