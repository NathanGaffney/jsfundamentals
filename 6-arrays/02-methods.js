let food = ['Pecan', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
console.log('original array:', food);

food.push('Pizza'); // appends or 'pushes' an item into the array. Appends to the end
console.log('push:', food)

food.splice(1, 1, 'Bananas'); // (position (1) / how many to delete (1) / what to add in its place)
console.log('splice:', food);

food.splice(2, 0, 'Sweet Potato Pie'); // (position (2) / how many to delete (0) / what to add in its place)
console.log('splice 2:', food);

food.pop(); // removes te last item of an array
console.log('pop:', food);

food.shift(); // removes the first item in an array
console.log('shift:', food);

food.unshift('Popcorn', 'Steak'); // unshift adds 1 or more items to the beginning of the array
console.log('unshift:', food);

console.log('original array:', food); // these methods DO modify your original array


// testing: not finished
// let name = 'nathan'
// let letters = name.split("")
// console.log(letters)

// letters[0].toUpperCase();
// console.log(letters.join());