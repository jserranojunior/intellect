package financialviews

import (
	// "../billstopay"
	// "gorm.io/gorm"
	"alvitre.com.br/intellect/api/financial/categoriesbillstopay"
)

//ViewCategoriesAndBillsMonth struct export
type ViewCategoriesAndBillsMonth struct {
	CategoriasContasAPagars []categoriesbillstopay.CategoriasContasAPagars
	TotalCategories         float64
	SomaFormaPagamento      map[string]float64
}
