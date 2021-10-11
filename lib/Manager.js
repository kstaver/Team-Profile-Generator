const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, school){
        super(name, id, email); // overrides name, id, and email in Employee
        this.officeNumber = officeNumber; // adds officeNumber to Employee
        super.role = "Manager"; // overrides the role in Employee
    }

    // Retrieve the office number info from user input in app.js and assign to the github variable that is
    // apart of this class
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Intern;