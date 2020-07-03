const generateHTML = employee => {
    let beginning = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
</head>
<body>`
    let middle = `
<div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">${employee.name}</h5>
    <p class="card-text">
        email: ${employee.email}
        id: ${employee.id}
    </p>
</div>
</div>`
    let end = `
</body>
</html>`;

    return beginning + middle + end;
};

module.exports = generateHTML;