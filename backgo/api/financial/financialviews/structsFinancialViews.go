package financialviews

import (
	// "../billstopay"
	// "gorm.io/gorm"
	"../categoriesbillstopay"
)

//ViewCategoriesAndBillsMonth struct export
type ViewCategoriesAndBillsMonth struct {
	CategoriasContasAPagars []categoriesbillstopay.CategoriasContasAPagars
	TotalCategories         float64
	SomaFormaPagamento      map[string]float64
}
