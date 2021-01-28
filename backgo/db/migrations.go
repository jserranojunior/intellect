package db

import (
	"../api/financial/categoriesbillstopay"
		"../api/financial/billstopay"
		"../api/financial/valuesbillstopay"

	"../api/users"
config	"../config"
	paidbills "../api/financial/paidbills"
)

//Migrate exec migrate
func Migrate() {
	connection := config.Connection()
	connection.AutoMigrate(
	categoriesbillstopay.CategoriasContasAPagars{},	 billstopay.ContasAPagars{}, valuesbillstopay.ValoresContasAPagars{}, paidbills.ContasPagas{}, users.Users{}	)
}
