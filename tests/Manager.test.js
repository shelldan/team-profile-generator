const Manager = require("../lib/Manager")

describe("Manager class",()=>{
    describe("Initialization",()=>{
        it("should create an object with a name, id, email and officeNumber if provide valid arguments",()=>{
            //Arrange

            //Act
            const manager = new Manager("Alec",2,"alex@fakeamil.com",1234)

            //Assert
            expect(manager.name).toEqual("Alec");
            expect(manager.id).toEqual(2);
            expect(manager.email).toEqual("alex@fakeamil.com");
            expect(manager.officeNumber).toEqual(1234);
        });

        it("should throw an error if 'officeNumber' is not a number",()=>{
            //Arrange
            const cb = () => {return new Manager("Alec",2,"alex@fakemail.com","hello")};

            //Act

            //Assert
            expect(cb).toThrow("Expected parameter officeNumber to be a non-negative number");
        });
    });

    describe("getOfficeNumber",()=>{
        it("should return office number if provided",()=>{
            //Arrange

            //Act
            const manager = new Manager('Alex',2,'alex@fakemail.com',1234);

            //Assert
            expect(manager.getOfficeNumber()).toEqual(1234);
        });
    });

    describe("getRole",()=>{
        it("should return role: Manager",()=>{
            //Arrange

            //Act
            const manager = new Manager("Alec",2,"alex@fakeamil.com",1234)

            //Assert
            expect(manager.getRole()).toEqual('Manager')
        })
    })


})