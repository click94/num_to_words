// - - - - - Tests - - - - - -
function test(v) {
    var sep = ('string'==typeof v)?'"':'';
    console.log("num_to_words("+sep + v.toString() + sep+") = "+num_to_words(v));
}

//1 test case: 7    == seven
test(7);
//2 test case: 42   == forty-two
test(42);
//3 test case: 2001 == two thousand and one
test(2001);
//4 test case: 1999 == nineteen hundred and ninety-nine
test(1999);
//5 test case: 17999 == seventeen thousand nine hundred and ninety-nine
test(17999);
//6. test case: result with invalid input
test("éfsdÉß$");
