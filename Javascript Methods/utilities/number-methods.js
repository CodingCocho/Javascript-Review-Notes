// Creating * 10 ^n
// n = 5 or -5
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123

// NaN is a JavaScript reserved word indicating that a number is not a legal number.
let z = 100 / "Apple";
console.log(z);
// You can use the global JavaScript function isNaN() to find out if a value is a not a number
console.log(isNaN(z));

// Infinity (or -Infinity) is the value JavaScript 
// will return if you calculate a number outside the largest possible number.

// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x
let a = 0xFF;
// 15 * 16^1 + 15 * 16^0
console.log(a + " is " + 255);

// But you can use the toString() method to output numbers from base 2 to base 36.
let myNumber = 255;
console.log(myNumber.toString(32));
console.log(myNumber.toString(16));
console.log(myNumber.toString(12));
console.log(myNumber.toString(10));
console.log(myNumber.toString(8));
console.log(myNumber.toString(2));

// When using the === operator, x and y are not equal.
let x1 = 500;
let y1 = new Number(500);

// The toString() method returns a number as a string.
let x2 = 123;
console.log(x2.toString());

// toExponential() returns a string, with a number rounded and written using exponential notation.
let x3 = 9.656;
console.log(x3.toExponential(2));
console.log(x3.toExponential(4));
console.log(x3.toExponential(6));

// toFixed() returns a string, with the number written with a specified number of decimals
let x4 = 9.656;
console.log(x4.toFixed(0));
console.log(x4.toFixed(2));
console.log(x4.toFixed(4));
console.log(x4.toFixed(6));

// toPrecision() returns a string, with a number written with a specified length:
let x5 = 9.656;
console.log(x5.toPrecision());
console.log(x5.toPrecision(2));
console.log(x5.toPrecision(4));
console.log(x5.toPrecision(6));

// valueOf() returns a number as a number.

// Number() can be used to convert JavaScript variables to numbers
Number(true);
Number(false);
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33");
Number("10 33");
Number("John");

// parseInt() parses a string and returns a whole number. 
// Spaces are allowed. Only the first number is returned
parseInt("-10");
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years");
parseInt("years 10");

// parseFloat() parses a string and returns a number. 
// Spaces are allowed. Only the first number is returned
parseFloat("10");
parseFloat("10.33");
parseFloat("10 20 30");
parseFloat("10 years");
parseFloat("years 10");

// MAX_VALUE returns the largest possible number in JavaScript
// MIN_VALUE returns the lowest possible number in JavaScript
// POSITIVE_INFINITY is returned on overflow
// NEGATIVE_INFINITY is returned on overflow