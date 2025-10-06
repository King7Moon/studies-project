/**
 * VARIABLES:
 * 
 * 0: A variable in javascript is simply a named container. To further expand on this concept, variables 
 * are named containers that hold data. Data can be complex or primitive. If a variable is not assigned to any data
 * , it will simply be assigned to "undefined" by javascript. 
 * 
 * 
 * 1. Variables must be declared and initialized to be saved to memory, otherwise javascript will "forget" it
 * 
 * 2. There are three different ways to declare a variable and each way follows different rules
 */

// 1. Declaration & Initialization 
// watch me declare a variable named "cookie"
var cookie;
// the semicolon is what sticks the variable to the memory!
console.log(cookie); //prints undefined

// 2. The three ways to declare a varibale
var cookie2;
// "var" is the oldest way to declare a variable. It cannot be scoped to functions or
// if statements. It can be accessed anywhere throughout your code. This is why it is best practice to 
// avoid it unless this is a behaviour you want to use.

// 2.a 
let cookie3;
// "let" and var are both useful for variables that may be reassigned later in your code. But 
// their differences lay in their scope. let has block scope.

// 2.b
const apple = 23423;
// Here we used const to declare a variable named apple and assigned it to the value of 23423.
// const is only used for variables that get assigned a value once. if you try to reassign something declared with const 
// you will get a TypeError. 

// 3. Hoisting
