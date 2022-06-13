const testingArray = ["apple", "banana", "lemon", "pear"];

// The length property of an array returns the length of an array (the number of array elements)
console.log(testingArray.length);

// The easiest way to add a new element to an array is using the push() method
testingArray.push("orange");
console.log(testingArray);

// To check if it is an array
console.log(Array.isArray(testingArray));

// The JavaScript method toString() converts an array to a string of (comma separated) array values
console.log(testingArray.toString());

// The join() method also joins all array elements into a string
console.log(testingArray.join(" "));

// The pop() method removes the last element from an array
console.log(testingArray.pop());
console.log(testingArray);

// The push() method adds a new element to an array (at the end)
console.log(testingArray.push("orange"));

// The shift() method removes the first array element and "shifts" all other elements to a lower index
console.log(testingArray.shift());
console.log(testingArray)

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
console.log(testingArray.unshift("grape"));
console.log(testingArray);

// The concat() method creates a new array by merging (concatenating) existing arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// The splice() method can be used to add new items to an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

// With clever parameter setting, 
// you can use splice() to remove elements without leaving "holes" in the array
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.splice(0, 1));
console.log(fruits2);

// The slice() method slices out a piece of an array into a new array.
const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits3.slice(1);
console.log(citrus);
const fruits4= ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2 = fruits4.slice(3);
console.log(citrus2);
console.log(fruits4);

// The sort() method sorts an array alphabetically
// The reverse() method reverses the elements in an array

// Sorting numbers
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);

// Decesnding order
const points2 = [40, 100, 1, 5, 25, 10];
points2.sort(function(a, b){return b - a});
console.log(points2);

// You can use Math.max.apply to find the highest number in an array
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }

//   You can use Math.min.apply to find the lowest number in an array
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
  }

  const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
cars.sort(function(a, b){return a.year - b.year});
console.log(cars);

// The forEach() method calls a function (a callback function) once for each array element.

// The map() method creates a new array by performing a function on each array element
// The map() method does not execute the function for array elements without values
// The map() method does not change the original array.
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}

// The filter() method creates a new array with array elements that passes a test
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction2);

function myFunction2(value) {
  return value > 18;
}

//  The reduce() method runs a function on each array element to produce (reduce it to) a single value.
const numbers3 = [45, 4, 9, 16, 25];
let sum2 = numbers3.reduce(myFunction3);

function myFunction3(total, value) {
  return total + value;
}

// The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
const numbers4 = [45, 4, 9, 16, 25];
let sum3 = numbers4.reduceRight(myFunction4);

function myFunction4(total, value) {
  return total + value;
}

// The every() method check if all array values pass a test
const numbers5 = [45, 4, 9, 16, 25];
let allOver18 = numbers5.every(myFunction5);

function myFunction5(value) {
  return value > 18;
}

// The some() method check if some array values pass a test
const numbers6 = [45, 4, 9, 16, 25];
let someOver18 = numbers6.some(myFunction6);

function myFunction6(value, index, array) {
  return value > 18;
}

// The indexOf() method searches an array for an element value and returns its position
// Array.lastIndexOf() is the same as Array.indexOf(), 
// but returns the position of the last occurrence of the specified element

// The find() method returns the value of the first array element that passes a test function
const numbers7 = [4, 9, 16, 25, 29];
let first2 = numbers7.find(myFunction7);

function myFunction7(value, index, array) {
  return value > 18;
}

// The findIndex() method returns the index of the first array element that passes a test function
const numbers8 = [4, 9, 16, 25, 29];
let first3 = numbers8.findIndex(myFunction8);

function myFunction8(value, index, array) {
  return value > 18;
}

// The Array.from() method returns an Array object from any 
// object with a length property or any iterable object.
let abc = Array.from("ABCDEFG");
console.log(abc);

// The Array.keys() method returns an Array Iterator object with the keys of an array.
const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits12.entries();
console.log(f);
for (let xy of f) {
    document.getElementById("demo").innerHTML += xy;
  }

//   ECMAScript 2016 introduced Array.includes() to arrays. 
// This allows us to check if an element is present in an array (including NaN, unlike indexOf)
const fruitsFuckMe = ["Banana", "Orange", "Apple", "Mango"];

fruitsFuckMe.includes("Mango"); // is true
