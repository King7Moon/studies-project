/**
 * FUNCTIONS:
 *  
 * 0: Essentially, functions are reusuable blocks of code. Can also be called "alogrithms".
 *  When a function is needed to perform it's code, it is "invoked". 
 *  Instead of re-writing out many lines of code, functions can be re-used where you just change the "arguements"
 * 
 * 1. Here's an example of a basic addition function
 * 
 * function myFunction(x, y){ return x + y}
 * As I have mentioned previsously, functions are re-usable blocks of code. If I wanted to know the sum of 5 + 5,
 *    I would invoke the function: console.log(myFunction(5, 5)); ====> 10
 * 
 * 2. What is the difference between arguements and paramters passed to a function?
 *                  =====> Parameters are used when constructing your function. They represent what type of datatype will be used.
 * 
 *                =========> Arguements represent the current value being used. so 5 is an arguement. x and y are parameters in this case. 
 * 
 * 
 * 
 * 3. What is the syntax for a named function?
 *  function myfunc(){}
 * "function" declares that we are creating a function. What comes directly after it, is the name. 
 * 
 * 4. How do we assign a function to a variable? 
 *              Assigning a function to a variable is simple. 
 *   let simple = function(){ return true}
 * 
 * Sometimes we just want a function that does something where no parameters are needed. It is just a little bit neater. 
 * 
 * 5. Functions can optionally take inputs, and optionally return a single value. 
 *      How do we specify inputs and outputs? 
 * Well functions can take inputs if that is how they are constructed. take my addition function for example. It is always going to accept two inputs
 *  and return a single value, an integer. This is decided by what is inside the function itself. 
 *             \/               \/
 *  function add(x, y){ return x + y}
 * 
 * 
 * 6. Scope: Functions can see and modify variables in parent or global scopes. 
 *  The inverse is NOT true. 
 * 
 * That is correct. You cannot call on variables declared inside the function, outside of the function. 
 * 
 * 
 * var global = 'nana'
 * 
 * function banana(){
 * let local = 'im banana'
 * console log local ====> gives local cause we are inside the function
 * console log global ====> gives global cause its global}
 * 
 * 
 * 
 * 7. Closures: Functions form closures around the data they house. If an object returned from the Function and is held in 
 *          memory somewhere(referenced) , that closure stays alive, and data can continue to exist in these closures!
 */