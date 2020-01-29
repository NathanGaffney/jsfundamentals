function hi() {
    console.log('hello');
}

// hi;
// hi(); //need the () to run it
// console.log(hi); // checking but not running the function
console.log(hi()); // calling for console.log() twice // and you generaly wouldnt invoke inside of a console.log() // the console.log is coming from the function being ran

// as soon as our parser see's that there is a function invocation, that happens immediately.

/*
CHALLENGE
*********

    - Create a function that, when invoked, lists out the numbers 1-10
*/

function numList() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

numList(); // you wont console.log() here because the function already did

/*
CHALLENGE
**********

    - Given the array, create a function that lists out the values individually.
*/

let arr = ['This', 'is', 'really', 'cool'];

function list() {
//     for (let word of arr) {          // you can use this:
//         console.log(word);
//     } 

// for(let i = 0; i < arr.length; i++){     // OR THIS:
//     console.log(arr[i]);
// }

for(let word in arr){           // OR THIS:
    console.log(arr[word]);
}



}
list();