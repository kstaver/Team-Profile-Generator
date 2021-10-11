const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email); // overrides name, id, and email in Employee
        this.school = school; // adds school to Employee
        super.role = "Intern"; // overrides the role in Employee
    }

    // Retrieve school info from user input in app.js and assign to the github variable that is
    // apart of this class
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;