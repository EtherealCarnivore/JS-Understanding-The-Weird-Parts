console.log('--------');
console.log('Function Constructors');
console.log('--------');

// function constructor
function Person(firstname, lastname) {
    console.log(this); 
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('Function invoked');

}
// the prototype property allows us to set a prototype for all new objects
// following the prototype chain, this function will exist in every new Person object
Person.prototype.getFullname = function() {
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ' ' + this.firstname;
}

console.log(john.getFormalFullName());

console.log('---------');