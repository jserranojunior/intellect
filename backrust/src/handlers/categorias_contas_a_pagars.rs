use crate::database::establish_connection;
use crate::models::categorias_contas_a_pagars::{
    CategoriasContasAPagar, categorias_contas_a_pagars::dsl::*,
};
use axum::http::StatusCode;
use axum::{Json, response::IntoResponse};
use diesel::prelude::*;

impl CategoriasContasAPagar {
    pub fn all(conn: &mut MysqlConnection) -> QueryResult<Vec<CategoriasContasAPagar>> {
        categorias_contas_a_pagars.load::<CategoriasContasAPagar>(conn)
    }
}

pub async fn conn() -> impl IntoResponse {
    // Estabelecendo a conexão, mas não estamos utilizando o retorno aqui
    establish_connection();
    "Importação concluída"
}

pub async fn get_categorias_contas_a_pagar() -> impl IntoResponse {
    // Aqui, a conexão precisa ser estabelecida de forma correta
    let mut connection = establish_connection();

    // Usando block_in_place para rodar a query do Diesel de forma síncrona em um ambiente assíncrono
    match tokio::task::block_in_place(|| CategoriasContasAPagar::all(&mut connection)) {
        Ok(categorias_contas_a_pagar_list) => Json(categorias_contas_a_pagar_list).into_response(), // Retornando o JSON da lista
        Err(_) => {
            // Caso de erro, retornando uma resposta HTTP 500 com uma mensagem de erro
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                "Erro ao obter as categorias",
            )
                .into_response()
        }
    }
}
