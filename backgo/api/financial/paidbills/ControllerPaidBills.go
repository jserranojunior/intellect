package paidbills

import (
	"net/http"

	"fmt"

	"alvitre.com.br/intellect/config"
	"github.com/gin-gonic/gin"
)

var db = config.Connection()

func StorePaidBills(c *gin.Context) {
	var paid ContasPagas
	if err := c.Bind(&paid); err != nil {
		fmt.Println(err)
		c.JSON(400, gin.H{
			"erro": err,
		})
	}
	db.Create(&paid)
	c.JSON(200, gin.H{
		"data": paid,
	})
}

// DeletePaidBills return Delete paid bills
func DeletePaidBills(c *gin.Context) {
	var paid ContasPagas
	id := c.Param("id")
	db.Unscoped().Delete(&paid, id)
	c.JSON(http.StatusOK, gin.H{"data": "Deleted"})
}

// EditPaidBills return edit paid bills
func EditPaidBills(c *gin.Context) {
	var paid ContasPagas
	id := c.Param("id")
	db.Where("id", id).Find(&paid)
	c.JSON(http.StatusOK, gin.H{"data": paid})
}
