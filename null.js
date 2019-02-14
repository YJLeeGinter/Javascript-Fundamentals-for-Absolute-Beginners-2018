/* let a; // expecting some value but none of values was not set to it. therefore it is considered as undefined
console.log(a);
console.log(typeof a); */

let pattern = /xyz/;
let value = 'This is just a test';
var result = value.match(pattern);
console.log(result); // returns null because there is nothing mathed to the pattern
// console.log(typeof result); // returns object, not primitive type null. 
// expecting an object reference but none of object references has been set to this variables


if (result === null) {
    console.log('no match was found');
}