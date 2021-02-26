package auth

import (
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"

	// "net/http"
	"../../config"
	"../../middlewares"
	"../users"
	// "fmt"
	// "encoding/json"
)

func compareBcrypt(hashedPassword string, password string) bool {

	err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))

	if err == nil {
		return true
	} else {
		return false
	}
}

var db = config.Connection()

// Login User
func Login(c *gin.Context) {
	var user users.Users
	c.Bind(&user)
	email := user.Email
	password := user.Password

	if email == "" || password == "" {
		c.JSON(401, gin.H{
			"erro": "Erro ao tentar fazer login email ou senha em branco",
		})
	} else {
		var user users.Users
		result := db.Select("id", "password").Where("email = ?", email).First(&user)
		if result.RowsAffected == 0 {
			c.JSON(401, gin.H{
				"erro": "erro ao tentar fazer login, email ou senha incorretos",
			})
		} else {
			if compareBcrypt(user.Password, password) {
				user.Password = ""
				token := middlewares.GenerateJwt(user.ID)
				// c.JSON(http.StatusOK, gin.H{"token": &token})
				c.JSON(200, gin.H{
					"token": &token,
				})
			} else {
				c.JSON(401, gin.H{
					"erro": "erro ao tentar fazer login",
				})
			}
		}
	}
}
