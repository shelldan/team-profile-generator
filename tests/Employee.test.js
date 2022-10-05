const Employee = require('../lib/Employee')

describe("Employee class",()=>{
    describe("Initialization",()=>{
        it("should create an object with a name, id, and email if provided valid arguments", ()=>{
            //Arrange

            //Act 
            const employee = new Employee("Jared", 1, "Jared@fakeamil.com");

            //Assert 
            expect(employee.name).toEqual("Jared");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("Jared@fakeamil.com");
        });

        it("should throw an error if provided no arguments",()=>{
            //Arrange

            //Act
            const cb = () => new Employee();
            // const employee = new Employee()

            //Assert 
            expect(cb).toThrow();
            // expect(employee.name).toThrow()
        });

        it("should throw an error if not provided an id", ()=>{
            //Arrange
            const cb =() => new Employee("Jared");
            // const employee = new Employee("Jared","Jared@fakemail.com")
            
            //Act
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            //Assert 
            expect(cb).toThrowError(err);
            // expect(employee.id).toThrowError(err);
        });

        it("should throw an error if not provide email",()=>{
            //Arrange
            const cb = () => new Employee("Jared",100);

            //Act
            const err = new Error("Expected parameter 'email' to be a valid email address");

            //Assert
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string",()=>{
            //Arrange
            const cb = () => new Employee(100, "Jared@fakemail.com");

            //Act
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            //Assert
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is not a number",()=>{
            //Arrange
            const cb = () => new Employee("Jared","100","Jared@fakemail.com");

            //Act
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            //Assert
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is not a positive number", ()=>{
            //Arrange
            const cb = () => new Employee("Jared",-100,"Jared@fakemail.com");

            //Act
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            //Assert
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is not valid",()=>{
            //Arrange
            const cb = () => new Employee("Jared",100, "Jared");

            //Act
            const err = new Error("Expected parameter 'email' to be a valid email address");

            //Assert
            expect(cb).toThrowError(err);
        });
    });

    describe("getName",()=>{
        it("should return a given name if provided",()=>{
            //Arrange
            const name = "Jared";
            const id = 100
            const email = "Jared@fakemail.com"

            //Act
            const employee = new Employee(name,id,email);

            //Assert
            expect(employee.name).toEqual(name);
        });
    })

    describe("getId",()=>{
        it("should return a given id if provided",()=>{
            //Arrange
            const name = "Jared";
            const id = 100
            const email = "Jared@fakemail.com"

            //Act
            const employee = new Employee(name,id,email);

            //Assert
            expect(employee.id).toEqual(id);
        });
    })

    describe("getEmail",()=>{
        it("should return a give email if provided",()=>{
            //Arrange
            const name = "Jared";
            const id = 100
            const email = "Jared@fakemail.com"

            //Act
            const employee = new Employee(name,id,email);

            //Assert
            expect(employee.email).toEqual(email);            
        });
    })

    describe("getRole",()=>{
        it("should return a role",()=>{
            //Arrange
            const name = "Jared";
            const id = 100
            const email = "Jared@fakemail.com"

            //Act
            const employee = new Employee(name,id,email);

            //Assert
            expect(employee.getRole()).toEqual('Employee');            
        });
    })
    
})

//question:
//1. falling test
//2. line 17 - 18; why alternative is not working? 
//3. Funcs
//4. Uncovered Line #s - already tested, but why still said uncovered? 