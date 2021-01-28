package config
import "testing"
func TestConnection(t *testing.T){
	result := Connection()
	expected := "Conectado"
	if(result != expected){
						t.Error("Expected: ", expected, "result: ", result)
	}
}