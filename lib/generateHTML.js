const path = require('path');
const fs = require('fs');

const templatesDir = path.resolve(__dirname,"../templates")//team-profile-generator/templates
//console.log(templatesDir)
//console.log(__dirname)//team-profile-generator/lib

//question: where to get employees? how to get access to the property, like employees.getRole()? see team.js, createFile ... render(this.team), so 'employee' could be any value/word
const render = (employees) => {
    //question: how to console.log(html) and see the value? 
    const html = [];
    //console.log(html)
    
    //if vs if.. and if...else if... (use if ... if will run through every condition, use if...else if... will run through a specific condition and then stop)
    for (let i = 0; i<employees.length; i++){
      console.log(employees[i].getRole())
      if(employees[i].getRole() === 'Manager'){
        html.push(renderManager(employees[i]))
      }else if(employees[i].getRole() === "Engineer"){
        html.push(renderEngineer(employees[i]))
      }else{
        html.push(renderIntern(employees[i]))
      }
    }

    console.log(html)
    return renderMain(html.join(""));
  };
  
  //question: where to get manager, engineer(below), and intern(below)? how to access to the property? 
  const renderManager = (manager) => {
    //fs.readFileSync (path, option)
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"),"utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template,"officeNumber",manager.getOfficeNumber());
    return template;
  };
  
  const renderEngineer = (engineer) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"),"utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
  };
  
  const renderIntern = (intern) => {
    //fs.readFileSync (path, option)
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"),"utf8");
    //console.log(template)// call the function renderIntern() and run 'node generateHTML.js', it returns the intern.html template
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
  };
  
  const renderMain = (html) => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"),"utf8");
    //console.log(template)//call the function renderMain() and run 'node generateHTML.js', it returns the main.html template
    //question: why it pass team? where to get it? because in the main.html, there is {{ team }}
    return replacePlaceholders(template, "team", html);
  };
  
  const replacePlaceholders = (template, placeholder, value) => {
    
    //a regular expression is a pattern of characters. The pattern is used to do pattern-matching "search-and-replace" function on text
    //Syntax: /pattern/modifier(s); g = global match(find all matches rather than stopping after the first match), i = case-insensitive matching, m = multiline matching
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");

    //the replace(pattern, replacement) method returns a new string with one, some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp
    //question: how does it know the 'value' is the user answers? value can be anything/word, see above: template = replacePlaceholder(template, 'school', intern.getSchool()), intern.getSchool() is the user answer
    return template.replace(pattern, value);
  };
  
  module.exports = render;
  

