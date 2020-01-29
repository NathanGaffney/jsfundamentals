/*
    - great for counting key/value pairs in an object. Properties in an object are what is called enumerable
        - for in loops will iterate over an objects enumerable properties
*/

let student = {
    name: "Nathan",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

console.log(student.degree); // dot notation

for (let item in student) {
    // console.log(item);
    console.log(student[item]) // object bracket notation (when using for in loops : used to grab things from your object)
}

let dogArray = ['great dane', 'husky', 'border collie', 'dalmation', 'pug'];

for (dog in dogArray) {
    // console.log(dog);
    console.log(dogArray)
}

/*
CHALLENGE
***********

    - write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
*/

let name = 'nATHAN';
let capName;


for (let i in name) {
    // console.log(i);
    // console.log(name);
    if (i == 0) {
        capName = name[i].toUpperCase();
    } else {
        capName += name[i].toLowerCase();
    }
}

console.log(capName);