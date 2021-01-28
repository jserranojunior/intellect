package financialviews

import (
	// "../billstopay"
	// "gorm.io/gorm"
			"../categoriesbillstopay"
)

//CategoriesAndBillsMonth struct export
type ViewCategoriesAndBillsMonth struct {
	CategoriasContasAPagars []categoriesbillstopay.CategoriasContasAPagars
	TotalCategories float64
}