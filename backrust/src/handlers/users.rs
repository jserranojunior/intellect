 use axum::response::IntoResponse; 
use crate::database::establish_connection;
use diesel::prelude::*;
 use axum::Json; 
use crate::models::users::User;
use crate::schema::users::dsl::*;

impl User {
    pub fn all(conn: &mut MysqlConnection) -> QueryResult<Vec<User>> {
        users.load::<User>(conn)
    } 
}  

pub async fn conn() -> impl IntoResponse {
     establish_connection();
    "Importação concluída"
}

pub async fn get_user() -> impl IntoResponse {
    let mut connection = establish_connection();
    match User::all(&mut connection) { // Aqui chamamos o método all
        Ok(user_list) => Json(user_list),
        Err(_) => Json(Vec::new()), // Retorna uma lista vazia em caso de erro
    }
}
 