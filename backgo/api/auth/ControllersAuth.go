package auth
import (
	"golang.org/x/crypto/bcrypt"
			"github.com/gin-gonic/gin"
						// "net/http"
							"../../config"
						"../users"
						"../../middlewares"
						// "fmt"
							// "encoding/json"
						
)
func compareBcrypt(hashedPassword string, password string) bool{

	err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))

	if err == nil {
		return true
	}else{
			return false
	}
}
var db = config.Connection()
// Login User
func Login(c *gin.Context){
	var user users.Users
	c.Bind(&user)

	email := user.Email
	password := user.Password

	if(email == "" || password == "" ){
		c.JSON(401, gin.H{
		"erro": "Erro ao tentar fazer login",
	})
	}else{
		var user users.Users
		result := db.Select("id", "password").Where("email = ?", email).First(&user)		
		if (result.RowsAffected == 0) {		
			c.JSON(401, gin.H{
					"erro": "erro ao tentar fazer login",
				})			
		}else{
			if(compareBcrypt(user.Password, password)){
				user.Password = ""
				token := middlewares.GenerateJwt(user.ID)
				// c.JSON(http.StatusOK, gin.H{"token": &token})
				c.JSON(200, gin.H{
		"token": &token,
	})		
			}else{
				c.JSON(401, gin.H{
					"erro": "erro ao tentar fazer login",
				})		
			}
		}
}
}