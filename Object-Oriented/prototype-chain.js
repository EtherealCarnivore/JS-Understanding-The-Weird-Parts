console.log('Prototype Chain');
console.log('---------------');

var person = { 
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER!! for demo purposes only!!!!
john.__proto__ = person;
console.log(john.getFullName());
// The JS engine will first look into the john object for the property, if it finds it it stops
// otherwise it will go down the prototype chain until it finds what it's looking for
console.log(john.firstname);

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;
//prototype chain in action
console.log(jane.getFullName()); // Jane Default
console.log(jane.lastname); // Default