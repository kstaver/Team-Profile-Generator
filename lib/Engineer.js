const Employee = require("./Employee");

class Engineer extends Employee{  // Engineer inherits Employee
    constructor(name, id, email, github){
        super(name, id, email); // overrides the name, id, and email in Employee
        this.github = github; // adds github to Employee
        super.role = "Engineer"; // overrides the role in Employee
    }

    // Retrieve github info from user input in app.js and assign to the github variable that is
    // apart of this class
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;

