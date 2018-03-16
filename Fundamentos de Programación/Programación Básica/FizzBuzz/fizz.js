var numeros = 100;

for (var i = 1; i <= 100 ; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		document.write("FizzBuzz")
	} else if (i % 5 == 0) {
		document.write("Buzz");
	} else if (i % 3 == 0) {
		document.write("Fizz");
	} else {
		document.write(i);
	}
	document.write("<br/>");
}