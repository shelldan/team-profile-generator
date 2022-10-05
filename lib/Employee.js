class Employee {
    constructor(name, id, email){

        if(typeof name !== "string" || !name.trim().length){
            throw new Error("Expected parameter 'name' to be a non-empty string")
        }

        if(typeof id !== "number" || isNaN(id) || id<0){
            throw new Error("Expected parameter 'id' to be a non-negative number")
        }

        // if(typeof email !== "string" || !email.trim().length){
        //     throw new Error("Expected parameter 'email' to be a non-empty string")
        // }

        if(!email.match((
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ))){
            throw new Error("Expected parameter 'email' to be a valid email address")
          }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        console.log(this.name);
    }

    getId(){
        console.log(this.id);
    }

    getEmail(){
        console.log(this.email);
    }

    getRole(){
        console.log('Employee');
    }
}

// const employee = new Employee("Jared", 1, "Jared@gmail.com")
// console.log(employee.name) //return Jared
// console.log(employee.id) //return 1
// console.log(employee.email) //return Jared@gmail.com
// console.log(employee) //return Employee { name: 'Jared', id: 1, email: 'Jared@gmail.com' }

// const employee = () => new Employee()
// console.log(employee.name)//return employee
// console.log(employee.id) //return undefined
// console.log(employee.email) //return undefined 

// const employee = () => new Employee("Jared")
// console.log(employee.id)//return undefined

// const employee = new Employee('Jared',1,'123@fakemail.com')
// console.log(employee.email)

const employee = new Employee('Jared',1,'123@gakemail.com')


module.exports = Employee; 