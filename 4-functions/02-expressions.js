// hi(); (CANT call before the function it has not been declared)

let hey = function hi() {
    console.log('hello');
}

// function declarations DO get hoisted, but function expression do NOT get hoisted