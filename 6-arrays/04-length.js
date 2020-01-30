let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length); // simply counts how many items are present, does not start counting at 0

// -------------


let arr = ['blue', 25, true, ['string'], {key: 'value'}];
console.log(arr.length);
console.log(arr.toString());

// -----------

/*
CHALLENGE
**********

    - First check if you are working with an array
    - Using a method, flip the values withing the array (what was in index 4 is now in 0, 3 to 1, etc.)
    - Using a method, print the values of the newly arranged array
*/

let arr = [1, 2, 3, 4, 5];

if (arr instanceof Array === true) {
    let revArr = arr.reverse();
    revArr.forEach(num => console.log(num));
} else {
    console.log('not an array');
}

// ---------------

if (typeof arr == 'object') {
    let revArr = arr.reverse();
    revArr.forEach(num => console.log(num));
} else {
    console.log('not an array');
}

// --------------

// mine
console.log(arr);

console.log(typeof arr);
// arr.reverse();

arr.forEach(arrMet => console.log(arrMet.reverse();