const generateCard = employee => {
    return `<div class="card m-5" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${employee.name}</h5>
        <p class="card-text">
            email: ${employee.email}
            id: ${employee.id}
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
        <div class="container">
            ${employeeHtmlCards}
        </div>
    </body>
    
    </html>`;
};

module.exports = { generateHTML, generateCard };