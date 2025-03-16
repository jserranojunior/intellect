use diesel::prelude::*;
use serde::{Serialize, Deserialize};
use crate::schema::users;
use chrono::NaiveDateTime; // Adicionado após incluir `chrono` no Cargo.toml

#[derive(Queryable, Selectable, Serialize, Deserialize, QueryableByName)]
#[diesel(table_name = users)]
pub struct User {
    pub id: u32,
    pub name: String,
    pub email: String,
    pub password: String,
    pub created_at: Option<NaiveDateTime>, // Campo para timestamps nulos
    pub updated_at: Option<NaiveDateTime>, // Campo para timestamps nulos
    pub deleted_at: Option<NaiveDateTime>, // Campo para timestamps nulos
    pub cpf: String
}


