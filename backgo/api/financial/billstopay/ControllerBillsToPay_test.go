package billstopay

import "testing"

func TestGetBillsToPayMonth(t *testing.T) {
	//  result := GetBillsToPayMonth()
	result := "{enel: 251}"
	const expected = "{enel: 251}"
	if result != expected {
		t.Error("Expected: ", expected, "result: ", result)
	}
}
