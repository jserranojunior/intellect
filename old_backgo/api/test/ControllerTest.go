package test

import (
	config "alvitre.com.br/intellect/config"
	"github.com/gin-gonic/gin"
)

var conn = config.Connection()

//Insert return rows affected
func Insert() int64 {
	user := UsersTest{Name: "Jorge", Email: "jorgeserranojunior"}

	result := conn.Create(&user)
	return result.RowsAffected
}

// Index confirm tests
func Index(c *gin.Context) {
	c.JSON(401, gin.H{
		"data": "It's work",
	})
}
