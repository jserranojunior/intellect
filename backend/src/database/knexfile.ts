import path from "path";

let connection = {
  client: "mysql",
  connection: {
    host: "mysql_local",
    user: "root",
    password: "123",
    database: "intellect",
    charset: "utf8",
  },
  migrations: {
    directory: "./migrations",
    tableName: "migrations",
  },
   timezone: 'UTC'
};
export default connection;
