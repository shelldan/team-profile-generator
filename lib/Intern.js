const Employee = require('../lib/Employee')

//super = Refers to the parent class. Commonly used to invoke constructor of a parent class. 

//if we have any children classes and those children classes have constructors, we would want to invoke the constructor of a parent class 
class Intern extends Employee {
    constructor(name, id, email, school){ //construct a new object 'Intern' property 
        super(name,id,email); //inherited property from the parent constructor 
        this.school = school;

    }

    getSchool(){
        console.log(`${this.school}`);
    }

    getRole(){
        console.log('Intern');
    }
}

module.exports = Intern;