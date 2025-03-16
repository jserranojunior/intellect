use backrust::routes;
use std::net::SocketAddr;
use tokio::net::TcpListener;


#[tokio::main]
async fn main() {
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    let listener = TcpListener::bind(addr).await.unwrap();

    println!("🚀 Servidor rodando em http://{}", addr);
    axum::serve(listener, routes::routes().await.into_make_service()).await.unwrap(); 
}
