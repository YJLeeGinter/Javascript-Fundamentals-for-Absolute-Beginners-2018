/* let name = 'bob';
console.log(`hi ${name}`); // interpolation

let sentence = `This is really a convenience.
    You probably will never want to do something quite like this.
  You might choose to put long passage of text into an external file
 and load it somehow.`;
console.log(sentence);
 */


function getReasonCount() { return 2; }

let interploation = `Give me ${ (getReasonCount() ==1 )? 'one good reason' : 'a few reasons' } to try this.`;
console.log(interploation);