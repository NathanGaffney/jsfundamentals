/*
    - a variable is a named container for storing data
    - we name variables so that we can refer to them again
*/

let a = 2;

    let    b     =     1;
/*  (1)   (2)   (3)   (4)

    1. javascript keyword
    2. variable name
    3. assignment operator
    4. variable value

*/

console.log(a + b);

/*
    notes on variables
        - a variable name must begin with a Letter, underscor, or dollar sign
        - numbers may follow the above character, but they can't come first
        - javascript is case sensitive = 'hello' & 'Hello' are two separate variables
        - no spaces allowed in variable names
        - camelCase is the best practice for naming variables with multiple words
            - this helps with readability

*/

// Let thisismyvariable = 'test';
// Let thisIsMyVariable = 'test';

/*
    var, let, const:

        - var: 'old' keyword for variables in javascript

        - let: 'new' keyword introduced for variables in ES6
        (newer version of javascript)

        - const: unchangeable variable once declared
*/

/*
    declarations vs initialization:

        - declarations are the LEFT SIDE of a variable
            - let x
            - declarations are on the left side of the assignment operator (=)

        - initializations are the RIGHT SIDE of the variable
            - it sets the value of the variable
            - the value we initialize our variables as is what is on the right side of the assignment operator (=)
*/

let x;
console.log('Declaration:', x); // declaration: undefined

x = 10;
console.log('Initialization:', x); // initialization: 10

x = 100;
console.log('Reinitialization:', x); // reinitialization: 100

let y = 'hello';
console.log(x, y);

const today = 'Great';
console.log(today);

today = 'Wonderfull';
console.log(today);

