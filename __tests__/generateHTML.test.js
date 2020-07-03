const generateHTML = require("../src/generateHTML");
const Employee = require("../lib/Employee");

jest.mock("../lib/Employee.js")

test("generates html", () => {
    const employee = new Employee();

    expect(generateHTML(employee)).toBe(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
</head>
<body>
<div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">Jake</h5>
    <p class="card-text">
        email: jake@gmail.com
        id: 12345
    </p>
</div>
</div>
</body>
</html>`
    )
})