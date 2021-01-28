package billstopay
import "testing"

func TestGetBillsToPayMonth(t *testing.T){
	   result := GetBillsToPayMonth()
	const expected = "{enel: 251}"
		if result != expected{
				t.Error("Expected: ", expected, "result: ", result)
		}
}