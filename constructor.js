/* let car = {
    make: 'bmw',
    model: '745li',
    year: 2010
}; */

/* function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car('bmw', '745li', 2010); // new keyword in front of any function makes an object, constructor call.

console.log(myCar); */

function MyFunction() {
    console.log('I am a simple function');
}

var myFunction = new MyFunction();

console.log(typeof myFunction);

// Can't really do anything with this particualr object... It's certainly Not a function reference anymore.
// myFunction();

