function Person() {
    console.log(this); // this is now a refference to an empy object
    this.firstname = 'John';
    this.lastname = 'Doe';
    console.log('Function invoked');

    // return { greeting: 'Return statement overrides the new keyword' };
}

var john = new Person();
//when using the new keyword 'this' points to the new empty object, not the global one
console.log(john);
