package middlewares

import (
	"log"
	"strconv"
	"strings"
	"time"
	jwt "github.com/gbrlsnchs/jwt"
	"github.com/gin-gonic/gin"
)

// VerifyJwt verify jwt is valid
func VerifyJwt() gin.HandlerFunc {	
		return func(c *gin.Context) {	
			if(c.Request.Header["Authorization"] != nil){
				hash := jwt.NewHS256([]byte("secret"))
				payload := jwt.Payload{}

				HeaderToken := strings.Split(c.Request.Header["Authorization"][0], " ")[1]
				token := []byte(HeaderToken)		
				hd, err := jwt.Verify(token, hash, &payload)

				if err != nil {
					c.JSON(401, gin.H{
					"Data": "Token Invalido",
					})
					c.Abort() 
				}else{
					tokenInt, _ := strconv.ParseUint(hd.KeyID, 10, 64)	
					c.Set("id", tokenInt)
					c.Next()   			
				}				
			}else{
					c.JSON(401, gin.H{
					"Data": "Token inexistente",
				})
				c.Abort() 
			}
	} 
}

//GenerateJwt return JWT
func GenerateJwt(ID uint) string {

	hs := jwt.NewHS256([]byte("secret"))
	now := time.Now()
	pl := jwt.Payload{
		Issuer:   "gbrlsnchs",
		Subject:  "login",
		IssuedAt: jwt.NumericDate(now),
	}
	stringID := strconv.Itoa(int(ID))
	token, err := jwt.Sign(pl, hs, jwt.ContentType("JWT"), jwt.KeyID(stringID))
	if err != nil {
		log.Fatal(err)
	}
	return string(token)

	//uint8
}