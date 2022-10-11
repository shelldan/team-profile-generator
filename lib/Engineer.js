const Employee = require('../lib/Employee')

//super = Refers to the parent class. Commonly used to invoke constructor of a parent class. 

//if we have any children classes and those children classes have constructors, we would want to invoke the constructor of a parent class 
class Engineer extends Employee {
    constructor(name, id, email, github){ //construct a new object 'Engineer' property 
        super(name,id,email); //inherited property from the parent constructor
        
        if(typeof github !== "string"){
            throw new Error("Expected parameter 'github' to be a non-empty string")
        };
        
        this.github = github;

    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;

//console.log(typeof 'abc123')//return string