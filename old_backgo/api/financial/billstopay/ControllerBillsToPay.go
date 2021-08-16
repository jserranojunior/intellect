package billstopay

import (
	"fmt"
	"net/http"

	"alvitre.com.br/intellect/api/financial/valuesbillstopay"
	"alvitre.com.br/intellect/config"
	"alvitre.com.br/intellect/helpers"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"

	"errors"
)

var db = config.Connection()

func EditBillsToPayMonth(c *gin.Context) {
	id := c.Param("id")
	dateyearmonth := c.Param("dataanomes")
	dateStartRune := []rune(dateyearmonth)
	dateStart := string(dateStartRune[0:7])
	queryValores := "SUBSTRING(data_pagamento,1,7) = (?)  OR SUBSTRING(data_pagamento,1,7) < ?"
	var contas []ContasAPagars
	db.Where("id", id).Preload("ValoresContasAPagar", queryValores, dateStart, dateStart).Find(&contas)
	c.JSON(http.StatusOK, gin.H{"data": contas})
}

func StoreBillsToPay(c *gin.Context) {
	tokenID := c.GetUint("id")
	var contas ContasAPagars
	if err := c.Bind(&contas); err != nil {
		fmt.Println(err)
		c.JSON(400, gin.H{
			"erro": err,
		})
	}
	contas.UserId = tokenID
	db.Create(&contas)
	c.JSON(http.StatusCreated, gin.H{"data": contas})
}

//SelectAll return BillsToPay
func SelectAll(c *gin.Context) {
	var contas []ContasAPagars
	db.Find(&contas)
	c.JSON(http.StatusOK, gin.H{"data": contas})
}

// Envio o ID e a DATA DE PAGAMENTO
// ATUALIZO A CONTAS A PAGAR NO ID
// VERIFICO SE EXISTE UMA CONTA USANDO O ID E A DATA DE PAGAMENTO
// SE NÂO TIVER EU INSIRO, SE TIVER EU ATUALIZO

func UpdateBillsToPay(c *gin.Context) {
	var contas ContasAPagars
	var valores valuesbillstopay.ValoresContasAPagars
	dateyearmonth := c.Params.ByName("dataanomes")
	dateStartRune := []rune(dateyearmonth)
	dateStart := string(dateStartRune[0:7])
	id := helpers.StringToUint(c.Params.ByName("id"))

	db.Where("id", id).Find(&contas)
	if errContas := c.BindJSON(&contas); errContas != nil {
		fmt.Println(errContas)
		c.JSON(400, gin.H{
			"erro": errContas,
		})
	}
	result := db.Where("SUBSTRING(data_pagamento,1,7) = (?)", dateStart).Where("contas_a_pagar_id", id).First(&valores).Error
	fmt.Println(errors.Is(result, gorm.ErrRecordNotFound))

	if result != nil {

		fmt.Println("CONTEM ERRO")
		contas.ValoresContasAPagar.DataPagamento = dateyearmonth
		valores.Valor = contas.ValoresContasAPagar.Valor
		valores.DataPagamento = dateyearmonth
		valores.ContasAPagarId = id
		db.Create(&valores)
	} else {
		fmt.Println("NAO CONTEM ERRO")

		db.Model(&valores).Where("contas_a_pagar_id", id).Updates(contas.ValoresContasAPagar)
		db.Save(&valores)
	}
	db.Omit("ValoresContasAPagar").Save(&contas)
	c.JSON(http.StatusOK, gin.H{"data": contas})
}
