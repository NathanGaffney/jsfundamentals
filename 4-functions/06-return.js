let name = (name) => {
    let fullName = name + ' Gaffney'
    return fullName;
}

let myNameIs = name('Nathan') // calling our function and invoking it
console.log(myNameIs);


// let myNameIs = name(); // calling our function and invoking it



/*
CHALLENGE
***********

    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

function tipCalc(bill) {
    let tip = bill * 0.2;
    return tip.toFixed(2);
}

let totalTip = tipCalc(19.94);
console.log(totalTip);

//

let tipCalc = bill => (bill * 0.2).toFixed(2);
let totalTip = tipCalc(19.84);
console.log(totalTip);

//

let tip = (cost) => {
    // let tip15 = 0.15
    let total = cost *= 0.15;
        // console.log(i);
    // let total = cost + 0.15;
    return total;
}

let yourBill = tip(5);
console.log(yourBill);