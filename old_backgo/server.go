package main

import (
	"alvitre.com.br/intellect/db"
	"alvitre.com.br/intellect/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	db.Migrate()
	Server()
}

// Server start golang server
func Server() string {
	server := routes.Routes()
	server.Use(gin.Logger())
	server.Use(gin.Recovery())
	server.Run(":4000")
	return "Listen on 4000"
}
