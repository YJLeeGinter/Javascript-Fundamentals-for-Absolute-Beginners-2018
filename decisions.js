/*
var count = 3;

if (count == 4) {
    console.log('Count is 4');
} else if (count > 4) {
    console.log('Count is greater than 4');
} else if (count < 4 ) {
    console.log('Count is less than 4');
}
else {
    console.log('Count is not 4');
}
*/
/*
let hero = 'Batman';
switch (hero.toLowerCase()) {
    case 'superman': 
        console.log('super strength');
        console.log('x-ray vision');
        break;
    case 'batman':
        console.log('intelligence');
        console.log('fighting skills');
        break;
    default:   
        console.log('number of JLA');
} */

// ternary operator
let a = 1, b = '1';
// let result = (a === b) ? 'equal' : 'inequal'; // strict equality
let result = (a !== b) ? 'not equal' : 'equal';
console.log(result);
// console.log((a == b) ? 'equal' : 'inequal');