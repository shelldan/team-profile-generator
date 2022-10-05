const {Employee} = require("../lib/Employee");
const Manager = require("../lib/Manager");
const {Engineer} = require("../lib/Engineer");
const {Intern} = require("../lib/Intern");

Employee.getRole()

// const manager = new Manager("Sarah",1,'sarah@fakemail.com')
//console.log(manager.name)

//Create a function to generate markdown for index.html
const generateMarkdown = ({
    name,
    id,
    email,
    officeNumber,
    github,
    school,
})=>`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/539482849d.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./src/style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <h1 class="header">My Team</h1>

    <main>
        <div class="container">
            <div class="employee">
                <div class="profile">
                    <div class="name">
                        <h2>${name}</h2>
                    </div>

                    <div class="title">
                        <i class="fa-regular fa-mug-hot"></i>
                        <h3>Manager</h3>   
                    </div>
                </div>

                <div class="information">
                    <form class="form">
                        <label for="id">ID: </label>
                        <textarea name="id">${id}</textarea>
                        <label for="email">Email: </label>
                        <textarea name="email">${email}</textarea>                      
                        <label for="officeNumber">Office number: </label>
                        <textarea name="email">${officeNumber}</textarea>               
                    </form>
                </div>
            </div>

            <div class="employee">
                <div class="profile">
                    <div class="name">
                        <h2>Alec</h2>
                    </div>

                    <div class="title">
                        <i class="icon">icon</i>
                        <h3>Engineer</h3>   
                    </div>
                </div>

                <div class="information">
                    <form class="form">
                        <label for="id">ID: </label>
                        <textarea name="id"></textarea>
                        <label for="email">Email: </label>
                        <textarea name="email"></textarea>                        
                        <label for="GitHub">GitHub: </label>
                        <textarea name="GitHub"></textarea>                       
                    </form>
                </div>
            </div>

            <div class="employee">
                <div class="profile">
                    <div class="name">
                        <h2>Grace</h2>
                    </div>

                    <div class="title">
                        <i class="icon">icon</i>
                        <h3>Engineer</h3>   
                    </div>
                </div>

                <div class="information">
                    <form class="form">
                        <label for="id">ID: </label>
                        <textarea name="id"></textarea>
                        <label for="email">Email: </label>
                        <textarea name="email"></textarea>                        
                        <label for="GitHub">GitHub: </label>
                        <textarea name="GitHub"></textarea>                    
                    </form>
                </div>
            </div>

            <div class="employee">
                <div class="profile">
                    <div class="name">
                        <h2>Tammer</h2>
                    </div>

                    <div class="title">
                        <i class="icon">icon</i>
                        <h3>Engineer</h3>   
                    </div>
                </div>

                <div class="information">
                     <form class="form">
                        <label for="id">ID: </label>
                        <textarea name="id"></textarea>
                        <label for="email">Email: </label>
                        <textarea name="email"></textarea>                        
                        <label for="GitHub">GitHub: </label>
                        <textarea name="email"></textarea>                  
                    </form>
                </div>
            </div>

            <div class="employee">
                <div class="profile">
                    <div class="name">
                        <h2>John</h2>
                    </div>

                    <div class="title">
                        <i class="icon">icon</i>
                        <h3>Intern</h3>   
                    </div>
                </div>

                <div class="information">
                    <form class="form">
                        <label for="id">ID: </label>
                        <textarea name="id"></textarea>  
                        <label for="email">Email: </label>
                        <textarea name="email"></textarea>                       
                        <label for="school">School: </label>
                        <textarea name="school"></textarea>                      
                    </form>
                </div>
            </div>


        </div>
    </main>

</body>
</html>`
    



module.exports = generateMarkdown;