let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
};

let person2 = {
    name: 'Jeremy',
    age: 15,
    canVote: false
};

let person3 = {
    name: 'Tyler',
    age: 38,
    canVote: true
};

//
//  (1)    (2)         (3)
function Person(name, age, canVote) {
//   (4)  (5)    (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

//            (7)   (8)
let person4 = new Person('James', 80, true);
let person5 = new Person('Doug', 32, true);
console.log(person4);
console.log(person5);

/*
    1. the function keyword
    2. the function name. For fonstructor function, the name of the function should be capitalized
    3. the parameters. these will be the values for the keys in our object once a new 'Person' is created
    4. the 'this' keyword refers back to whatever called it. In this case, '.this' refers back to 'Person'.
    5. the keys of the new object we're creating.
    6. the argument we pass through our function call will resolve as the values
    7 & 8. the new keyword creates a new instance of our 'Person' (object) function, with the values we pass into that function when invoking it 

*/