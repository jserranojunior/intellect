package categoriesbillstopay

import (
	"net/http"
	"../../../config"
	"github.com/gin-gonic/gin"
)

var db = config.Connection()

//Select return CategoriesBillsToPay
func Select(c *gin.Context) {
	var categories []CategoriasContasAPagars
	db.First(&categories, 1)
	c.JSON(http.StatusOK, gin.H{"data": categories})
}

//SelectAll return CategoriesBillsToPay
func SelectAll(c *gin.Context) {
	var categories []CategoriasContasAPagars
	db.Find(&categories)
	c.JSON(http.StatusOK, gin.H{"data": categories})
}




