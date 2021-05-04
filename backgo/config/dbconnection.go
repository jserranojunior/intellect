package config

import (
	"fmt"

 "gorm.io/driver/mysql"
	 "gorm.io/gorm"
)

const (
	dbName = "intellect"
	dbHost = "mysql_local"
	dbUser = "root"
	dbPass = "@1Mysql"
	dbPort = "3306"
)

//Connection export connection mysql
func Connection() *gorm.DB {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local", dbUser, dbPass, dbHost, dbPort, dbName)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Println(err.Error())
	}
	return db
}
