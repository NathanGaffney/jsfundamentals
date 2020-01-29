function hi(name) {                 // (name) is just a placeholder at the momment
    // let name = 'Nathan'  <-- This inherently happens you dont see this but its happening
    console.log(`Hello, ${name}`);
}

hi('Nathan');  // (argument)

//

function nathan(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`);
}

nathan('sandwich');

//

function counter(number, string) {
    // let number = 100 <-- BEHIND THE SCENES
    for(let i = 0; i <= number; i++){
        console.log(i);
    
    }

    console.log(string)

}

counter(100, 'counter');



/*
CHALLENGE
**********

    -Write a function that takes two parameter:
        - one parameter is for a first name,
        - the other parameter is for a last name,
        - have them come together in a variable inside the function.
        - console.log() 'Hello, my name is <your name>'
        - call (jor invoke) your function
*/

function name(first, last) {
    let fullName = first + ' ' + last;          // BELOW COMMENTED OUT is used dont use this line
    console.log(`Hello, my name is ${fullName}`) // OR console.log(`Hello, my name is ${first} ${last}`)
}

name('Nathan', 'Gaffney');