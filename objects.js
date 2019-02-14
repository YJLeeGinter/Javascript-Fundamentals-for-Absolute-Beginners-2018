
let car = {
    make: 'bmw',
    model1: '745li',
    year: 2010,
    getPrice: function() {
        // perform some calc
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model1);
    }
}

car.printDescription();
console.log(car.year);

/* Don't do that
console.log(car['year']);
console.log(car[1]); it creates its own new property and sets its value to undefined. Never do that!
*/

/*
var anotherCar ={};
anotherCar.whatever = 'bob';
console.log(anotherCar.whatever);
*/

/*
var a = {
    myProperty: { b: 'hi' }
};

console.log(a.myProperty.b);
*/

/*
var c = {
    myProperty: [
        { d: 'this'},
        { e: 'can' },
        { f: 'get'},
        { g: 'crazy'}
    ]
};
*/

let carLot = [
    { year: 2017, make: 'Toyota', model: '4Runner' },
    { year: 2015, make: 'BMW', model: '528i' },
    { year: 1982, make: 'Buick', model: 'Skylark' }
];

let contracts = {
    customers: [
        {firstName: 'Bob', lastName: 'Tabor', phoneNumber: ['(123) 456-7890', '(123) 567-8901']},
        {firstName: 'Richard', lastName: 'Boughton', phoneNumber: ['(123) 555-7894', '(123) 555-8911']},
    ],
    employees: [
        {firstName: 'Steve', lastName: 'Jaworski', phoneNumber: ['(321) 456-7890', '(321) 567-8901']},
        {firstName: 'Conrad', lastName: 'Tabor', phoneNumber: ['(321) 555-7894']},
        {firstName: 'Grant', lastName: 'Tabor', phoneNumber: ['(321) 555-7894']}
    ]
}