const inquirer = require ('inquirer');
const Manager = require ('./lib/Manager');
const Engineer = require ("./lib/Engineer");
const Intern = require ('./lib/Intern');
const path = require('path');
const fs = require('fs');

//why do we use path.resolve and path.join? 
const OUTPUT_DIR = path.resolve(__dirname, "output");//team-profile-generator/output, used to create a directory
const outputPath = path.join(OUTPUT_DIR, 'team.html')//team-profile-generator/output/team.html, used to create a file under a directory 
//console.log(OUTPUT_DIR)
//console.log(outputPath)
//console.log("current directory: " + __dirname)//team-profile-generator

const render = require('./lib/generateHTML')

class Team {
    constructor(){
        this.team = [] //to store the user input from the following functions
    }

    askManagerInfo(){
        return inquirer
            .prompt ([
                {
                    type: "input",
                    name: "name",
                    message: "What is your team manager's name?",
                    validate: function (input){
                        if(input){
                            return true;
                        }else{
                            console.log("Please enter your team manager's name");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is your team manager's ID?",
                    validate: function (input){
                        if(input){
                            return true;
                        }else{
                            console.log("Please enter your team manager's ID");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is your team manager's email address?",
                    validate: function (input){
                        if(input){
                            return true;
                        }else{
                            console.log("Please enter your team manager's email address");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is your team manager's office number?",
                    validate: function (input){
                        if(input){
                            return true;
                        }else{
                            console.log("Please enter your team manager's office number");
                            return false;
                        }
                    }

                },
            ])
            .then(({name, id, email, officeNumber})=>{
                let manager = new Manager(name, id, email, officeNumber);
                this.team.push(manager);
                //console.log(this.team);
                this.askTeamRole();
            })
    }

    askTeamRole(){
        return inquirer
            .prompt([
                {
                    type: "list",
                    name: "selectEmployee",
                    message: "What is your team role?",
                    choices: ['Manager','Engineer','Intern','No'],
                },
            ])
            .then(({selectEmployee})=>{
                if(selectEmployee === 'Manager'){
                    this.askManagerInfo();
                }else if(selectEmployee === 'Engineer'){
                    this.askEngineerInfo();
                }else if(selectEmployee === 'Intern'){
                    this.askInternInfo();
                }else{
                    console.log(this.team);
                    this.createFile()
                }
            })
    }

    askEngineerInfo(){
        return inquirer
            .prompt ([
                {
                    type: "input",
                    name: "name",
                    message: "What is the Engineer's name?",
                    validate: function (input){
                        if(input){
                            return true;
                        }else{
                            console.log("Please enter the Engineer's name");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the Engineer's ID?",
                    validate: function (input){
                        if(input){
                            return true;
                        }else{
                            console.log("Please enter the Engineer's ID");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the Engineer's email address?",
                    validate: function (input){
                        if(input){
                            return true;
                        }else{
                            console.log("Please enter the Engineer's email address");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "github",
                    message: "What is the Engineer's github?",
                    validate: function (input){
                        if(input){
                            return true;
                        }else{
                            console.log("Please enter the Engineer's github");
                            return false;
                        }
                    }

                },
            ])
            .then(({name, id, email, github})=>{
                let engineer = new Engineer(name, id, email, github);
                this.team.push(engineer);
                //console.log(this.team);
                this.askTeamRole();
            })
    }
    
    askInternInfo(){
        return inquirer
            .prompt ([
                {
                    type: "input",
                    name: "name",
                    message: "What is the Intern's name?",
                    validate: function (input){
                        if(input){
                            return true;
                        }else{
                            console.log("Please enter the Intern's name");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the Intern's ID?",
                    validate: function (input){
                        if(input){
                            return true;
                        }else{
                            console.log("Please enter the Intern's ID");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the Intern's email address?",
                    validate: function (input){
                        if(input){
                            return true;
                        }else{
                            console.log("Please enter the Intern's email address");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "school",
                    message: "What school does the Intern attend?",
                    validate: function (input){
                        if(input){
                            return true;
                        }else{
                            console.log("Please enter the Intern's school");
                            return false;
                        }
                    }

                },
            ])
            .then(({name, id, email, school})=>{
                let intern = new Intern(name, id, email, school);
                this.team.push(intern);
                //console.log(this.team)
                this.askTeamRole();
            })
    }
    
    createFile(){
        // the fs.existsSync() method is used to synchronously check if a file already exists in the given path or not. It returns a boolean value which indicates the presence of a file.
        // if a directory does not exist in the given path, create a new directory
        if(!fs.existsSync(OUTPUT_DIR)){
            fs.mkdirSync(OUTPUT_DIR);
        }else{
            //fs.writeFileSync(file, data, options); file = the path of the file where it has to be written, data = will be written to the file, options = encoding ('utf8'), mode (0o666), flag(w)
            fs.writeFileSync(outputPath, render(this.team),"UTF-8");
            //render(this.team)
            console.log("File created in the output folder")
        }
    }

}

const team = new Team()
team.askTeamRole() //start the questions 






