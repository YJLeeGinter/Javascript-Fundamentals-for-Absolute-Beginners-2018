/* var car = {
    make: 'bmw',
    model1: '745li',
    year: 2010,
    getPrice: function() {
        // perform some calc
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model1); // A way a function is called determine what THIS represents.
    }
}

car.printDescription();  */

/* function first() {
    return this;
}

console.log(first() === global); */

/* This is Node's global object
because that's where the
first method was called */


/* function second() {
    'use strict'; // context

    return this;
}

console.log(second() === global);
console.log(second() === undefined); */

// this depends on How a function is called

// An object can be passed as the first argument to call 
// or apply and this will be bound to it.

/* let myObject = { value: 'My Object' };

// This property is set on the global obejct
global.value = 'Global object';

function third(name) {
    // Returns something different depending on how we call this method:
    return this.value + name;
}

console.log(third());

// Both call and apply allow you to explicitly set what you want to represent 'this'.
//The difference is in how additional arguments to the function are sent 
console.log(third.call(myObject, 'bob'));
console.log(third.apply(myObject, ['bob'])); */

function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName: 'bob',
    lastName: 'tabor',
    print: fifth
}

let customer2 = {
    firstName: 'richard',
    lastName: 'boughton',
    print: fifth
}

customer2.print();
customer1.print();
