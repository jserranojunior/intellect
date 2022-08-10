package handlers

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/jserranojunior/intellect/backgo/models"
)

// UserCreate a user controllers
func UserCreate(c *gin.Context) {
	user := models.User{Name: "Jack"}
	result := DB.Create(&user) // pass pointer of data to Create
	if result.Error != nil {
		fmt.Println(result.Error)
	} else {
		fmt.Println(result.RowsAffected)
	}
	fmt.Println(user.ID) // returns inserted data's primary key
}
