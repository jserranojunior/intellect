// import dbConfig from "./db/database.js";
import Users from "../api/users/modals/Users.js";
import Sequelize from "sequelize";

export default function init() {
  const sequelize = new Sequelize("intellect", "root", "intellect", {
    host: "intellect",
    dialect: "mysql",
  });

  Users.init(sequelize);
}
