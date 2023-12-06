// Create a variable called favoriteFruits and assign it an array of your top three favorite fruits. Print each fruit on a new line 

var favoriteFruits = ["Banana", "Apple", "Mangopine", "Pineapple"];


console.log(favoriteFruits[0]);
console.log(favoriteFruits[1]);
console.log(favoriteFruits[2]);


// Declare a variable called isJavaScriptFun and assign it a boolean value representing whether you find JavaScript fun or not. Print a message to the console 

var isJavaScriptFun 

//Declaration

var isJavaScriptFun = true;


// Print

console.log("Is JavaScript fun? " + isJavaScriptFun);



// Create three variables: num1, num2, and sum. Assign any numeric values to num1 and num2. Calculate the sum of num1 and num2 and store the result in the sum variable.

var num1 = 5;
var num2 = 25;

var sum = num1 + num2;



console.log(sum);

console.log(`The value of sum is: ${sum}`);



// Write a program that swaps the values of two variables without using a third variable. For example, if a = 5 and b = 10, after the swap, a should be 10 and b should be 5.

// var a = 5
// var b = 10
// // var c = 25
// // var d = 15

// swapNumbers(a,b)

// var num1 = 5;
// var num2 = 10;

// swapNumbers(num1,num2);

// console.log(swapNumbers);

let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);



// Create two variables, firstName and lastName, and assign your first and last name to them, respectively. Combine them into a new variable called fullName and print it.


let firstName = "Mitchell";
let lastName = "Nkem";

// var fullName = firstName + " " + lastName;

// console.log(firstName + " " + lastName)

// console.log("firstName" + "lastName")

// console.log("firstName" + "lastName")

let fullName=firstName+""+lastName; 

console.log(fullName);



// Declare a constant variable called PI and assign it the value of the mathematical constant π (pi). Create another variable called radius and assign it a numeric value. Calculate the area of a circle (A = π * r^2) using these variables.


const MathPI = 3.14;


const PI = Math.PI;
const radius = 5;
const area = PI * radius * radius;

console.log("The area of the circle is: " + area); // Output: The area of the circle is: 78.53981633974483