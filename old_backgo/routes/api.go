package routes

import (
	"alvitre.com.br/intellect/api/auth"
	"alvitre.com.br/intellect/api/financial/billstopay"
	"alvitre.com.br/intellect/api/financial/categoriesbillstopay"
	"alvitre.com.br/intellect/api/financial/financialviews"
	"alvitre.com.br/intellect/api/financial/paidbills"
	"alvitre.com.br/intellect/api/test"
	"alvitre.com.br/intellect/middlewares"
	gin "github.com/gin-gonic/gin"
)

//Routes return routes gin
func Routes() *gin.Engine {
	r := gin.Default()
	r.Use(middlewares.CORSMiddleware())
	r.Use()
	// HOME
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Router in another Reflex!!!!",
		})
	})

	//  AUTH
	r.POST("/login", auth.Login)

	r.GET("/test", test.Index)

	financial := r.Group("/financial/")
	// AuthRequired()
	financial.Use(middlewares.VerifyJwt(), middlewares.CORSMiddleware())
	{
		financial.GET("/categorias", categoriesbillstopay.Select)
		financial.GET("/categoriasall", categoriesbillstopay.SelectAll)
		financial.GET("/viewcategories/:dataanomes", financialviews.GetCategoriesAndBillsMonth)
		// Bills to pay
		financial.GET("/contasall", billstopay.SelectAll)
		financial.GET("/editbills/:id/:dataanomes", billstopay.EditBillsToPayMonth)
		financial.POST("/billstopay", billstopay.StoreBillsToPay)
		financial.PUT("/billstopay/:id/:dataanomes", billstopay.UpdateBillsToPay)
		financial.POST("/paidbills", paidbills.StorePaidBills)
		financial.DELETE("/paidbills/:id", paidbills.DeletePaidBills)
		financial.GET("/paidbills/:id", paidbills.EditPaidBills)
	}

	return r
}
