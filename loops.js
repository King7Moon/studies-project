/**
 * LOOPS:
 * 
 * 0: What is a loop in Javascript? 
 * A loop can execute a block of code a set or infinite amount of times. We usually prefer a set amount of times,
 *      as an infinite loop will always crash yoour computer. There is a while-loop, for-loop, for-in-loop. 
 * Loops can be used in many different ways. What they all have in common is iteration and conditions. 
 * A loop has three conditions: a starting point, condition check, and updates the value of each loop
 * 
 *  for (var i = 0; i < nums.length; i++)
 *         zero is our starting point // 
 *       i < nums is our check condition. is i still less than num's length? 
 *       i++ tells our loop to increase by one. 
 */

/**
 * 1. THE WHILE LOOP 
 * 
 *  The while loop repeats as long as the condition is true or the while loop repeats WHILE the condition is true, my preferred way to remember it. 
 * if a condition is currently false, it will never run/execute the loop
 */

// While zero is less than or equal to 10, increase zero by one.
// so zero is less than 10, it prints 0 then adds one to the value of num (which is zero) then it repeats til num is greater than or equal to 10
// ======> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10
let num = 0

while (num <= 10){
    console.log(num);
    num++
}