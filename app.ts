#! usr/bin/env node
// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple");//true
console.log("apple" == "Apple");// false

//Using the lowercase function
console.log("Testing with lowercase function");
console.log("Apple".toLowerCase()=="apple");//true

// Numeric tests
console.log("Numeric tests:");
console.log(10>5);//true
console.log(2<1);//false

// Test using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); //false
console.log(true || false); //true

// Test whether an item in array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple"));//true
// Test wether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); //true


