const Employee = require('../lib/Employee')

//super = Refers to the parent class. Commonly used to invoke constructor of a parent class. 

//if we have any children classes and those children classes have constructors, we would want to invoke the constructor of a parent class 
class Manager extends Employee {
    constructor(name, id, email, officeNumber){ //construct a new object 'Manager' property 
        super(name,id,email); //inherited property from the parent constructor 

        this.officeNumber = parseInt(officeNumber)
        if(typeof this.officeNumber !== "number" || isNaN(this.officeNumber) || this.officeNumber<0){
            throw new Error("Expected parameter officeNumber to be a non-negative number")
        }

    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return 'Manager';
    }

}


module.exports = Manager;