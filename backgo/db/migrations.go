package db

import (
	"alvitre.com.br/intellect/api/financial/billstopay"
	"alvitre.com.br/intellect/api/financial/categoriesbillstopay"
	"alvitre.com.br/intellect/api/financial/valuesbillstopay"

	paidbills "alvitre.com.br/intellect/api/financial/paidbills"
	"alvitre.com.br/intellect/api/users"
	config "alvitre.com.br/intellect/config"
)

//Migrate exec migrate
func Migrate() {
	connection := config.Connection()
	connection.AutoMigrate(
		categoriesbillstopay.CategoriasContasAPagars{}, billstopay.ContasAPagars{}, valuesbillstopay.ValoresContasAPagars{}, paidbills.ContasPagas{}, users.Users{})
}
