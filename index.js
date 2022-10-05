const Employee = require("../team-profile-generator/lib/Employee");
const Manager = require("../team-profile-generator/lib/Manager");
const Engineer = require("../team-profile-generator/lib/Engineer");
const Intern = require("../team-profile-generator/lib/Intern");

const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./src/generateMarkdown")

// const manager = new Manager(name,id,email)


inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?'
    },
    {
        type: 'input',
        name: 'office number',
        message: 'What is your office number?'
    },
    {
        type: 'list',
        name: 'team role',
        message: 'Who else in your team?',
        choices: ['Engineer','Intern','Manager']
    }    
])
.then((answer)=>{
    const htmlContent = generateMarkdown(answer);

    fs.writeFile("index.html",htmlContent,(err)=>err
    ? console.log(err)
    : console.log('Successfully created index.html'))
})