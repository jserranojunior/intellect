
 use crate::handlers::users;
 use crate::handlers::categorias_contas_a_pagars;
 use axum::{routing::{get, post}, Router}; 
 
 pub async fn routes() -> Router {
    let app = Router::new()
        .route("/", get(|| async { "Página Inicial" }))
        .route("/sobre", get(|| async { "Sobre nós" }))
        .route("/contato", post(|| async { "Contato recebido!" })) 
       .route("/usuarios", get(users::get_user)) // Rota para os usuários
         .route("/conn", get(users::conn))// Rota para os  

         .route("/categoriascontasapagar", get(categorias_contas_a_pagars::get_categorias_contas_a_pagar))

         ;
    app
}

