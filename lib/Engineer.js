const Employee = require('../lib/Employee')

//super = Refers to the parent class. Commonly used to invoke constructor of a parent class. 

//if we have any children classes and those children classes have constructors, we would want to invoke the constructor of a parent class 
class Engineer extends Employee {
    constructor(name, id, email, github){ //construct a new object 'Engineer' property 
        super(name,id,email); //inherited property from the parent constructor 
        this.github = github;

    }

    getGithub(){
        console.log(`${this.github}`)
    }

    getRole(){
        console.log('Engineer')
    }
}

