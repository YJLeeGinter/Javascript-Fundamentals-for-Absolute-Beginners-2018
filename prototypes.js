
let originalCar = {
    make: 'bmw',
    model1: '745li',
    year: 2010
};


let newCar = Object.create(originalCar);

/* console.log(newCar.make);
newCar.make = 'audi';
console.log(newCar.make); */
console.log(newCar.whatever);


/* console.log(Object.getPrototypeOf(newCar));

let myProtoType = Object.getPrototypeOf(newCar);
console.log(myProtoType.make);

originalCar.doors = 4;
console.log(newCar.doors);

console.log(originalCar.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty('doors'));
 */