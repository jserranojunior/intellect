
use diesel::prelude::*;
use diesel::mysql::MysqlConnection;
use std::env;
use dotenv::dotenv;



pub fn establish_connection() -> MysqlConnection {
    dotenv().ok(); // Carrega as variáveis de ambiente do arquivo .env

    let database_url = env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set in .env"); // Obtém a URL do banco de dados

    match MysqlConnection::establish(&database_url) {
        Ok(connection) => {
            println!("Conexão estabelecida com sucesso!");
            connection
        },
        Err(err) => {
            eprintln!("Erro ao conectar ao banco de dados: {}", err);
            panic!("Falha ao conectar ao banco de dados!");
        }
    }
}