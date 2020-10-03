let connection = {
  client: "mysql",
  connection: {
    host: "mysqlintellect",
    user: "root",
    password: "intellect",
    database: "intellect",
    charset: "utf8",
  },
  migrations: {
    directory: "./db/migrations",
    tableName: "migrations",
  },
};
export default connection;
