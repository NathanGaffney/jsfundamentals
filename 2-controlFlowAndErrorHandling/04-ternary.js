/*
    - a ternary is a shortcut, or shorthand way of writing on if/else statement
    - requires the default or catch all (else)
*/

let num = 6;

// Ternary
(num > 0) ? console.log('yes') : console.log('no');

// if/else
if (num > 0) {
    console.log('yes')
} else {
    console.log('no');
}


//


let num = 6;

// Ternary
(num == 0) ? console.log('working') : (num < 0) ? console.log('not working') : console.log('still not working');

// or like this for ternary



// else/if

if (num == 0) {
    console.log('working')
} else if (num < 0) {
    console.log('not working');
} else {
    console.log('still not working');
}

// CHALLENGE
/*
let age = 26;

if (age >= 25) {
    console.log("You can rent a car!")
} else if (age >= 21) {
    console.log("You can drink!");
} else if (age >= 18) {
    console.log("You can vote!")
} else {
    console.log("Sorry, you're too young to do anything.")
}
*/

let age = 26;

(age >= 25) ? console.log("You can rent a car!") : (age >= 21) ? console.log("You can drink!") : (age >= 18) ? console.log("You can vote!") : console.log("Sorry, you're too young to do anything.");