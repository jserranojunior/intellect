// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const dbConnection = require("../../../db/database");
// const { Sequelize, DataTypes, Model } = require("sequelize");
// const sequelize = new Sequelize(dbConnection);
// class ContasAPagar extends Model {}

// ContasAPagar.init(
//   {
//     // Model attributes are defined here
//     user_id: {
//       type: DataTypes.NUMBER,
//       allowNull: false,
//     },
//     categorias_contas_a_pagar_id: {
//       type: DataTypes.NUMBER,
//       allowNull: false,
//     },
//     favorecido: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     inicio_data_pagamento: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     fim_data_pagamento: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     descricao: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     forma_pagamento: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     tipo_conta: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     parcelas: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     // Other model options go here
//     sequelize, // We need to pass the connection instance
//     modelName: "contas_a_pagars", // We need to choose the model name
//   }
// );

// // class User extends Modal {
// //   static init(sequelize) {
// //     super.init({
// //       name: DataTypes.STRING,
// //       email: DataTypes.STRING,
// //       password: DataTypes.STRING,
// //     });
// //   }
// // }

// export default ContasAPagar;
