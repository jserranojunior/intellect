package billstopay
import (
	"net/http"

	"../../../config"
	"github.com/gin-gonic/gin"
)

var conn = config.Connection()
func GetBillsToPayMonth()string{
	return "not work"
}

//SelectAll return BillsToPay
func SelectAll(c *gin.Context) {
	var contas []ContasAPagars
	conn.Find(&contas)
	c.JSON(http.StatusOK, gin.H{"data": contas})
}
