let connection = {
  client: "mysql",
  connection: {
    host: "mysqlintellect",
    user: "root",
    password: "intellect",
    database: "intellect",
  },
  migrations: {
    directory: "./db/migrations",
  },
};
export default connection;
