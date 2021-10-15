// Create Manager
const generateManager = function(Manager){
    return `
    <div class = "col-4 mt-4">
        <div class = "card-header">
            <h3>${Manager.name}</h3>
            <h4><i class = "fas fa-users"></i>Manager</h4>
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
        <div class = "card-header">
            <h3>${Engineer.name}</h3>
            <h4><i class = "fas fa-cat"></i>Engineer</h4>
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
        <div class = "card-header">
            <h3>${Intern .name}</h3>
            <h4><i class = "fas fa-school"></i>Intern</h4>
        </div>

        <div class = "card-body">
            <p class = "id">ID: ${Intern.id}</p>
            <p class = "email"> Email: <a href = "${Intern.email}">${Intern.email}</a></p>
            <p class = "school">School: ${Intern.school}</p>
        </div>
    </div>
    `;
}
// Create HTML
generateHTML = (data) => {

    pageArray = [];

    for(let i = 0; i < data.length; i++){
        const Employee = data[i];
        const role = Employee.getRole();

        // Call Manager
        if(role === 'Manager'){
            const managerCard = generateManager(Employee);

            pageArray.push(managerCard);
        }

        // Call Engineer
        if(role === 'Engineer'){
            const engineerCard = generateEngineer(Employee);

            pageArray.push(engineerCard);
        }

        // Call Intern
        if(role === 'Intern'){
            const internCard = generateIntern(Employee);

            pageArray.push(internCard);
        }
    }

    // Combine all strings into uniform employee card
    const employeeCards = pageArray.join('');

    // Return to the generated HTML
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}

//
const generateTeamPage = function(employeeCards){
    return `
    <!DOCTYPE html>
    <html lang ="en">
    <head>
        <meta charset = "UTF-8">
        <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
        <title>Team Profile</title>

        <!--Boostrap CSS-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    
        <!--Font-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />

        <!--Kendra's Stylesheet-->
        <link rel="stylesheet" type="text/css" href="./style.css">
    </head>
    <body>
        <header>
            <nav class = "navbar" id = "navbar">
                <span class = "navbar-brand mb-0 h1 w-100 text-center" id = "navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class = "container">
                <div class = "row justify-content-center" id = "team-cards">
                    <!--Team Cards-->
                    ${employeeCards}
                </div>
            </div>
        </main>
    </body>

    <!--jQuery Script-->
    <script src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <!--Bootstrap-->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
    crossorigin="anonymous"></script>

    <!--Moment.js-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    
    `;
}

// Export to index.html
module.exports = generateHTML;