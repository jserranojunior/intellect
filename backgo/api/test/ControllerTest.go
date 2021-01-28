package test

import (
	config "../../config"
)

var conn = config.Connection()

//Insert return rows affected
func Insert() int64 {
	user := UsersTest{Name: "Jorge", Email: "jorgeserranojunior"}

	result := conn.Create(&user)
	return result.RowsAffected
}
