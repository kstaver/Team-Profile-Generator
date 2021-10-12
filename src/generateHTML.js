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
// Create Intern
// Create HTML
// Create Team Page
