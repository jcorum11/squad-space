const generateCard = employee => {
    let other = ""
    let otherName = ""
    switch (employee.type) {
        case "intern":
            other = employee.school;
            otherName = "School"
            break;
        case "engineer":
            other = employee.githubUsername;
            otherName = "GitHub Username"
            break;
        case "manager":
            other = employee.officeNumber;
            otherName = "Office Number"
    }
    return `<div class="card m-4" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title text-center">${employee.name}</h5>
        <p class="card-text">
            Position: ${employee.type}
        </p>
        <p class="card-text">
            ID: ${employee.id}
        </p>
        <p class="card-text">
            Email: ${employee.email}
        </p>
        <p class="card-text">
            ${otherName}: ${other}
        </p>
    </div>
</div>`;
}

const generateHTML = employeeHtmlCards => {
return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <header class="bg-danger jumbotron">
        <h1 class="display-4 text-center">Squad-Space</h1>
    </header>
    <div class="container">
        <div class="row d-flex justify-content-around">
            ${employeeHtmlCards}
        </div>
    </div>
</body>

</html>`;
};

module.exports = { generateHTML, generateCard };