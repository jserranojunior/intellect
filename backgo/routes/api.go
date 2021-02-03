package routes

import 	("github.com/gin-gonic/gin"
	"../api/financial/categoriesbillstopay"
		"../api/financial/billstopay"
		"../api/financial/financialviews"
		"../api/financial/paidbills"
		"../api/auth"
		"../middlewares"
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