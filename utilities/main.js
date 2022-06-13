let x = 5;
let y = x ** 2;
y = false;
let arr = ["John", "Paul", "Peter"];

// Function syntax
// function name(parameter1, parameter2, parameter3) 
// {
//      code to be executed
// }

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