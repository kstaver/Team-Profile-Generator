// Create Manager
const generateManager = function(Manager){
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <h3>${Manager.name}</h3>
            <h4>Manager</h4><i class = "fas fa-users">fa-users</i>
        </div>

        <div class = "card-body">
            <p class = "id">ID: ${Manager.id}</p>
            <p class = "email"> Email: <a href = "${Manager.email}">${Manager.email}</a></p>
            <p class = "officeNumber">Office Number: ${Manager.officeNumber}</p>
        </div>
    </div>
    `;
}
// Create Eningeer
const generateEngineer = function(Engineer){
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <h3>${Engineer.name}</h3>
            <h4>Manager</h4><i class = "fas fa-cogs">fas fa-cogs</i>
        </div>

        <div class = "card-body">
            <p class = "id">ID: ${Engineer.id}</p>
            <p class = "email"> Email: <a href = "${Engineer.email}">${Engineer.email}</a></p>
            <p class = "github">Github: ${Engineer.github}</p>
        </div>
    </div>
    `; 
}
// Create Intern
const generateIntern = function(Intern){
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <h3>${Intern .name}</h3>
            <h4>Intern</h4><i class = "fas fa-user-graduate">fa-user-graduate</i>
        </div>

        <div class = "card-body">
            <p class = "id">ID: ${Intern.id}</p>
            <p class = "email"> Email: <a href = "${Intern.email}">${Intern.email}</a></p>
            <p class = "school">Office Number: ${Intern.school}</p>
        </div>
    </div>
    `;
}
// Create HTML
// Create Team Page
