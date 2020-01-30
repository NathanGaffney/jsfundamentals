/*
    - the forEach() method executes a provided function once for each element in an array
    - the forEach() methos does the same thing as a for loop or for of loop - both iterate over properties in an array
    - "(foodItem, index, array, thisArg)"
*/

let food = ['Pecan', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// for (let i = 0; i < food.length; i++) {      // for loop
//     console.log(food[i]);
// }

//this is whats happening in the background(or same thing)
// foodItem = 'Pecan Pie';
// foodItem = 'Shrimp';
// foodItem = 'Quesadilla';
// foodItem = 'Cheese Cake';
// foodItem = 'Hotdog';

// -----------

// food.forEach(foodItem => console.log(foodItem)); // consice arrow function
// food.forEach((foodItem, index) => console.log(foodItem)); // consice with multiple  .forEach parameters "(foodItem, index)"

// -----------

// food.forEach(individualFoodItem => {
//     console.log(individualFoodItem);     // block body arrow function
// })

// ------------

// food.forEach(function(foodItem) {    // normal function
//     console.log(foodItem);
// })

// -------------

food.forEach(function(foodItem, index) {  //<-------must list them in the order .forEach asks you too "(foodItem, index)"
    // console.log(foodItem);
    console.log(index); // prints the index values (0, 1, 2, 3, 4,)
})

// ----------------

/*
CHALLENGE
**********

    - (Go look a MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of you existing movies with another one
*/


let movies = ['End Game', 'Happy Gilmore', 'Grudge'];

movies.forEach(movieList => console.log(movieList)); // annonymus keyword method

movies.push('Grown Ups');
console.log(movies);

movies.splice(2, 1, 'Insidious')
console.log(movies);