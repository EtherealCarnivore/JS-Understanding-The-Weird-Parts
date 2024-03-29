console.log('---------------');
console.log('Reflection in JS');
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

for (var prop in john){
    if(john.hasOwnProperty(prop)){ // only log properties directly on the john object
        //will return false if it goes down the property chain
        console.log(prop + ': ' + john[prop]);
    }
   
}


var jane = {
    address: '6969 Main St.',
    getFormalFullName: function() {
        return this.lastname + ' ' + this.firstname
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
}