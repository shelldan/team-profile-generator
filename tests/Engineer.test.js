const Engineer = require("../lib/Engineer")

describe("Engineer class",()=>{
    describe("Initialization",()=>{
        it("should create an object with a name, id, email and github if provided valid arguments",()=>{
            //Arrange

            //Act
            const engineer = new Engineer("Alec",2,"alex@fakeamil.com","ibealec");

            //Assert
            expect(engineer.name).toEqual("Alec");
            expect(engineer.id).toEqual(2);
            expect(engineer.email).toEqual("alex@fakeamil.com");
            expect(engineer.github).toEqual("ibealec");
        });

        it("should throw an error if 'github' is not a string",()=>{
            //Arrange
            const cb = () => {return new Engineer("Alec",2,"alec@fakemail.com",123)};

            //Act
            //const err = new Error("Expected parameter 'github' to be a non-empty string");
            
            //Assert
            expect(cb).toThrow("Expected parameter 'github' to be a non-empty string");
        });
    });

    describe("getGithub",()=>{
        it("should return github user name if provided",()=>{
            //Arrange

            //Act
            const engineer = new Engineer("Alec",2,"alex@fakeamil.com","ibealec");

            //Assert
            expect(engineer.getGithub()).toEqual("ibealec");
        });
    });

    describe("getRole",()=>{
        it("should return role: Engineer",()=>{
            //Arrange

            //Act
            const engineer = new Engineer("Alec",2,"alex@fakeamil.com","ibealec");

            //Assert
            expect(engineer.getRole()).toEqual('Engineer')
        })
    })
})