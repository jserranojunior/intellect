import express from "express";
import routes from "./routes/routes";
import dotenv from "dotenv";
import { resolve } from "path";
import bodyParser from "body-parser";
import cors from "cors";


dotenv.config();
let pathEnv: string;
switch (process.env.NODE_ENV) {
  case "test":
    pathEnv = `${__dirname}/../../.env.test`;
    pathEnv = resolve(__dirname, "./.env.test");
    break;
  case "production":
    pathEnv = resolve(__dirname, "./.env.production");
    break;
  default:
    pathEnv = resolve(__dirname, "./.env");
}

dotenv.config({ path: pathEnv });
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

let port: string;
process.env.PORT ? (port = process.env.PORT) : (port = "8081");
app.listen(port);
console.log("Conectado a" + port);
