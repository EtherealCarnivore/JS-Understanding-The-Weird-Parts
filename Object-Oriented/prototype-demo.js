// empty object, function, array
var a = {};
var b = function() { };
var c = [];

// in Browser:
// 
//     a.__proto__ // Object {}
//     b.__proto__ // f () {[native code]}
//  All functions in JS have access to bind, apply.. methods
//     c.__proto__.push - any array sets the default to all array methods in JS

// All object, functions, arrays have a default prototype which gives you access to the methods

// The bottom of the prototype chain is always an object

// c.__proto__.__proto__ = Object {}
