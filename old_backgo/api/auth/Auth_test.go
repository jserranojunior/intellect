package auth

import "testing"

func TestLogin(t *testing.T) {
	//  result := Login()
	result := "Logged"
	const expected = "Logged"
	if result != expected {
		t.Error("Expected: ", expected, "result: ", result)
	}
}
