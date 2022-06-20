let word = "Hello";
let wordLength = word.length;
console.log(wordLength);

// How to write strings with quotes inside 
let text = "We are the so-called \"Vikings\" from the north.";
console.log(text);

// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: the start position, and the end position (end not included).
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
console.log(str);
console.log(part);

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
let str2 = "Apple, Banana, Kiwi";
let part2 = str.substring(7, 13);
console.log(str2);
console.log(part2);

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
let str3 = "Apple, Banana, Kiwi";
let part3 = str.substr(7, 2);
console.log(str3);
console.log(part3);

// Replace method
let text2 = "Please visit Microsoft and Microsoft!";
let newText = text2.replace("Microsoft", "W3Schools");
console.log(text2);
console.log(newText);

// To replace case insensitive, use a regular expression with an /i flag (insensitive)
let text3 = "Please visit Microsoft!";
let newText2 = text3.replace(/MICROSOFT/i, "W3Schools");
console.log(text3);
console.log(newText2);

// To replace all matches, use a regular expression with a /g flag (global match)
let text4 = "Please visit Microsoft and Microsoft!";
let newText3 = text4.replace(/Microsoft/g, "W3Schools");
console.log(text4);
console.log(newText3);

// A string is converted to upper case with toUpperCase()
let text5 = "Hello World!";
let text6 = text5.toUpperCase();
console.log(text5);
console.log(text6);

// A string is converted to lower case with toLowerCase()
let text7 = "Hello World!";       
let text8 = text7.toLowerCase();
console.log(text7);
console.log(text8);

// concat() joins two or more strings
let s1 = "Hollo";
let s2 = "World!";
let s3 = s1.concat(" ", s2);
console.log(s3);

// The trim() method removes whitespace from both sides of a string
let word1 = "           Hey World    !          ";
let word2 = word1.trim();
console.log(word2);

// The padStart() method pads a string with another string
let word3 = "5";
let word4 = word3.padStart(4,"x");
console.log(word4);

// The padEnd() method pads a string with another string
let word5 = "5";
let word6 = word5.padEnd(4,"x");
console.log(word6);

// A string can be converted to an array with the split() method
let arrString = "Melon,Pear,Apple,Banana";
let arr1 = arrString.split(",");
console.log(arr1);

// The charAt() method returns the character at a specified index (position) in a string
let word7 = "HELLO WORLD";
let char = word7.charAt(0);
console.log(char);

// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
let word8 = "Please locate where 'locate' occurs!";
console.log(word8.indexOf("locate"));
// Returns -1 if it is not found 
console.log(word8.indexOf("flower"));

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string
let word9= "Please locate where 'locate' occurs!";
console.log(word9.lastIndexOf("locate"));

// The search() method searches a string for a specified value and returns the position of the match
let word10 = "Please locate where 'locate' occurs!";
console.log(word10.search("locate"));

// The match() method searches a string for a match against a regular expression, 
// and returns the matches, as an Array object.
let word11 = "The rain in SPAIN stays mainly in the plain";
console.log(word11.match(/ain/g));
// Perform a global, case-insensitive search for "ain"
console.log(word11.match(/ain/gi));

// The includes() method returns true if a string contains a specified value
let word12 = "Hello world, welcome to the universe.";
console.log(word12.includes("world"));

// The startsWith() method returns true if a string begins with a specified value, otherwise false
let word13 = "Hello world, welcome to the universe.";
console.log(word13.startsWith("Hello"));

// The endsWith() method returns true if a string ends with a specified value, otherwise false
let word14 = "John Doe";
console.log(word14.endsWith("Doe"));

// String literals?
let word15 =
`The quick
brown fox
jumps over
the lazy dog`;

let firstName = "John";
let lastName = "Doe";

let word16 = `Welcome ${firstName}, ${lastName}!`;
console.log(word16);

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);