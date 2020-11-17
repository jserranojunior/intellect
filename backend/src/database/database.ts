import connection from "./knexfile";
import knex from "knex";

function connect(){
  try{
  return knex(connection)
}catch(erro){
  console.log(erro)
  return erro
}
}

export default connect();
