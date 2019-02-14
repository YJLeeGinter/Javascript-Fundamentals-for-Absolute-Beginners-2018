let counter = (function() {

    // private stuff
    let count = 0;

    function print(message) {
        console.log('${message} => ${count}');
    }

    function getCount() { return count;}

    function setCount(value) {count = value; }

    function incrementCount() {
        count +=1;
        print('After increment: ');

    }

    function resetCount() {
        print('Before reset: ');
        count = 0;
        print('After reset: ');
    }

    /* "reveals" the public functions 
    clearer presentation
    however, you can (accidentally) overwrite
    the property values :
    */
    return {
        get: getCount,
        set: setCount,
        increment: incrementCount,
        reset: resetCount
      
    };
   
})();

console.log(counter);
console.log(counter.get());

// A downside of revealing module is that I can accidentally set the value to get eqauls 7 and forget the invocation operator. 
// That will break association between get and getCount. See below. 
counter.get = 7;
console.log(counter.get);
console.log(counter.get()); // no association between get and getCount