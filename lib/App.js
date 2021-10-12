 // Global variables
 const Employee = require("./Employee");
 const Manager = require("./Manager");
 const Engineer = require("./Engineer");
 const Intern = require("./Intern");
 const inquirer = require("inquirer");
 const fs = require('fs');
 
 // App class: Collects user input
 class App{
 
     constructor(){
 
         // List of employees added by user
         this.employee = [];
         // Prompts the user for information for a specified employee
         this.employeePrompt = [
             {
                 type: "list",
                 message: "Enter your role",
                 name: "role",
                 choices: ["Manager", "Engineer", "Intern", "Exit"],
             },
             {
                 type: "input",
                 message: ({role}) => `Creating a new ${role}?. What is the ${role}'s name?`,
                 name: "name",
                 when: ({role}) => role != "Exit",
                 validate: name => {
                     if(name){
                         return true;
                     }else{
                         console.log("Please enter a name.");
                         return false;
                     }
                 }
             },
             {
                 type: "input",
                 message: ({role}) => `What is the ${role}'s employee ID number?`,
                 name: "id",
                 when: ({role}) => role != "Exit",
                 validate: id => {
                     if(id){
                         return true;
                     }else{
                         console.log("Please enter an employee ID number.");
                         return false;
                     }
                 },
                 type: "input",
                 message: ({role}) => `What is the ${role}'s email?`,
                 name: "email",
                 when: ({role}) => role != "Exit",
                 validate: email => {
                     if(email){
                         return true;
                     }else{
                         console.log("Please enter an email.");
                         return false;
                     }
                 }
             },
             {
                 type: "input",
                 message: ({role}) => `What is the ${role}'s office number?`,
                 name: "officeNumber",
                 when: ({role}) => role === "Manager",
                 validate: function (value) {
                     return value.match(/^\d+$/) ? true: "Invalid office numer.";
                 }
             },
             {
                 type: "input",
                 message: ({role}) => `What is the ${role}'s github?`,
                 name: "github",
                 when: ({role}) => role === "Engineer",
                 validate: github => {
                     if(github){
                         return true;
                     }else{
                         console.log("Please enter a github username.");
                         return false;
                     }
                 }
             },
             {
                 type: "input",
                 message: ({role}) => `What is the ${role}'s school?`,
                 name: "school",
                 when: ({role}) => role === "Intern",
                 validate: school => {
                     if(school){
                         return true;
                     }else{
                         console.log("Please enter a school.");
                         return false;
                     }
                 },
             },
         ];
     }
 
     // Start
     start(){
         this.nextEmployee();
     }
 
     // Calls on inquirer to prompt the user to select a role and then fill out information about it. If user selects Exit, then
     // the prompt is terminated. Otherwise, a new employee is created and pushed to an array of employees.
     nextEmployee(){
         inquirer.prompt(this.employeePrompt).then(data =>{
             switch(data.role){
                 case "Exit":
                     this.renderHTML();
                     console.log("Team Profile Generated");
                     break;
                 case "Manager":
                     this.employee.push(new Manager(data.name, data.id, data.email, data.officeNumber));
                     this.nextEmployee();
                     break;
                 case "Engineer":
                     this.employee.push(new Engineer(data.name, data.id, data.email, data.github));
                     this.nextEmployee();
                     break;
                 case "Intern":
                     this.employee.push(new Intern(data.name, data.id, data.email, data.school));
                     this.nextEmployee();
                     break;
             }
         });
     }
 
     // Read the main.html and fill in the template in main.html with the information obtained in index.html
     // to create a new webpage with updated employee information
     renderHTML(){
         fs.readFile('src/main.html', 'utf-8', (err, htmlString) =>{
             htmlString = htmlString.split("<script></script>").join(this.getScript());
 
             fs.writeFile('dist/index.html', htmlString, (err) =>{
                 // Throw an error or catch an error if file cnanot be written
                 if(err) throw err;
                 // If file is successfully written
                 console.log("HTML generated!");
             });
         });
     }
 
     // Returns Javascript that generates an employee information card for each employee
     getScript(){
         var scripts = ``;
         this.employee.forEach(e => {
             var field = "";
             var iconClass = "";
             switch (e.getRole()){
                 case "Manager":
                     field = `Office #: ${e.getOfficeNumber()}`;
                     iconClass = `users`;
                     break;
                 case "Engineer":
                     field = `Github: ${e.getGithub()}`;
                     iconClass = `cogs`;
                     break;
                 case "Intern":
                     field = `School: ${e.getSchool()}`;
                     iconClass = `user-graduate`;
                     break;
             }
 
             var cardScript = `
             <script>
             var col = $('<div class = "col-4">');
             var card = $('<div class = "card mx-auto border-info mb-3" style = "max-width: 18rem;">');
             var header1 = $('<div class = "card-header text-center h4">');
             header1.text("${e.getName()}");
             var header2 = $('<div class = "card-header text-center">');
             var icon = $('<i class = "fas fa-${iconClass}">');
             header2.text(" ${e.getRole()}");
             header2.prepend(icon);
            
             var cardBody = $('<div class = "card-body text-info">');
             var cardTitle = $('<h5 class = "card-title">');
             cardTitle.text("Employee Information");
             var cardText = $('<p class = "card-text">');
             cardText.text("ID: ${e.getId()}");
             var cardText2 = $('"<p class = card-text>"');
             cardText2.text("Email: ${e.getEmail}@cloud.com");
             var cardText3 = $('"<p class = card-text>"');
             cardText3.text = ("${field}");
             cardBody.append(cardTitle);
             cardBody.append(cardText);
             cardBody.append(cardText2);
             cardBody.append(cardText3);
 
             card.append(header1);
             card.append(header2);
             card.append(cardBody);
             col.append(card);
             $("#cards").append(col);
         </script>`;
             scripts += cardScript;
         });
         return scripts;
     }
 }
 
 module.exports = App;