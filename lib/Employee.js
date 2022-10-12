class Employee {
    constructor(name, id, email){

        if(typeof name !== "string" || !name.trim().length){
            throw new Error("Expected parameter 'name' to be a non-empty string")
        }

        //because the entry in node is string by default
        this.id = parseInt(id);
        // if(typeof this.id !== "number"){
        //     throw new Error("Expected parameter 'id' to be a non-negative number")
        // }

        if(!email.match((
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ))){
            throw new Error("Expected parameter 'email' to be a valid email address")
          }

        this.name = name;
        
        this.email = email;
    }

    getName(){
        return this.name; //changed from console.log(this.name) to return this.name 
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
       return 'Employee';
    }
}

module.exports = Employee; 
