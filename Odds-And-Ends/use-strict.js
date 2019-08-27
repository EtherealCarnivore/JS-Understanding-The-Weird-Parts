console.log('Using Strict Mode');
"use strict"; // forces JS engine in strict mode

var person;

persom = {}; // misspell on purpose to test JS engine strict mode
console.log(persom); // Object {}
console.log(person); // undefined
