const Intern = require("../lib/Intern")

describe("Intern class",()=>{
    describe("Initialization",()=>{
        it("should create an object with a name, id, email and school if provided valid arguments",()=>{
            //Arrange

            //Act
            const intern = new Intern("Alex", 2, "alex@fakemail.com","2university");

            //Assert
            expect(intern.name).toEqual("Alex");
            expect(intern.id).toEqual(2); 
            expect(intern.email).toEqual("alex@fakemail.com");
            expect(intern.school).toEqual("2university");
        });

        it("should throw an error if 'school' is not a string",()=>{
            //Arrange
            const cb = () => new Intern("Alec",2,"alec@fakemail.com",123);

            //Act
            //const err = new Error("Expected parameter 'school' to be a non-empty string");

            //Assert
            expect(cb).toThrow("Expected parameter 'school' to be a non-empty string");
        });
    });

    describe("getSchool",()=>{
        it("should return school user name if provided",()=>{
            //Arrange

            //Act
            const intern = new Intern("Alex", 2, "alex@fakemail.com","2university");

            //Assert
            expect(intern.getSchool()).toEqual("2university");
        });
    });

    describe("getRole",()=>{
        it("should return role: Intern",()=>{
            //Arrange

            //Act
            const intern = new Intern("Alex", 2, "alex@fakemail.com","2university");

            //Assert
            expect(intern.getRole()).toEqual('Intern')
        })
    })
})