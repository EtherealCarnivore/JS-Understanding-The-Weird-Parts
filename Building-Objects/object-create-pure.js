console.log('Object.create and Pure Prototypal Inheritence');

var person = {
 firstname: 'Default',
 lastname: 'Default',
 greet: function() {
     return 'Hi ' + this.firstname;
 
    }
}

var john = Object.create(person);
console.log(john);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);

// Polyfill: Code that adds a feature which the engine may lack
