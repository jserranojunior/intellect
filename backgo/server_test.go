package main

import "testing"

//TestServerVerify verify if exist server
func TestServerVerify(t *testing.T) {
	result := Server()
	const expected = "Listen on 2000"
	if result != expected {
		t.Error("Expected: ", expected, "result: ", result)
	}
}
