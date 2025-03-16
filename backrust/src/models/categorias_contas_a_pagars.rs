use diesel::prelude::*;
use serde::{Serialize, Deserialize};
use chrono::NaiveDateTime; // Adicionado após incluir `chrono` no Cargo.toml

#[derive(Queryable, Selectable, Serialize, Deserialize, QueryableByName)]
#[diesel(table_name = categorias_contas_a_pagars)]
pub struct CategoriasContasAPagar {
    pub id: i32,
    pub nome: String,
    pub cor: String,
    pub tipo: String,
    pub created_at: Option<NaiveDateTime>, // Campo para timestamps nulos
    pub updated_at: Option<NaiveDateTime>, // Campo para timestamps nulos
    pub deleted_at: Option<NaiveDateTime>, // Campo para timestamps nulos
    pub soma: Option<f64>, // Campo para valores DOUBLE nulos
}

diesel::table! {
    categorias_contas_a_pagars (id) {
        id -> Integer,
        nome -> Varchar,
        cor -> Varchar,
        tipo -> Varchar,
        created_at -> Nullable<Timestamp>,  // Mapeamento correto para campos timestamp nulos
        updated_at -> Nullable<Timestamp>,  // Mapeamento correto para campos timestamp nulos
        deleted_at -> Nullable<Timestamp>,  // Mapeamento correto para campos timestamp nulos
        soma -> Nullable<Double>,           // Mapeamento correto para campos DOUBLE nulos
    }
}