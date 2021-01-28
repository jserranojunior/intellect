package test
import (
	"gorm.io/gorm"
)
//UsersTest export
type UsersTest struct {
	gorm.Model
	Name  string `gorm:"size:255; not null" json:"name"`
	Email string `gorm:"size:255; not null; unique;" json:"email"`
}
