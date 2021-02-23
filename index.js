const express = require('express');
const app = express();
const PORT = process.env.PORT;

// Employee array
const employees = [
    { id: 1, name: "John" },
    { id: 2, name: "Peter" },
    { id: 3, name: "Freddie" }
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// --------------------- ROUTES ----------------------

// Default route
app.get('/', (req, res) => {
    res.send(
        `
        <form action="/employees" method="POST">
            <input type="text" name="name">
            <input type="submit" value="Submit">
        </form>
    `);
});

// Get all
app.get('/employees', (req, res) => {
    res.send(employees);
});

// Add an employee
app.post('/employees', (req, res) => {
    var employee = {
        id: employees.length + 1,
        name: req.body.name
    }

    employees.push(employee);
    res.send(employees);
});

// Get employee by ID
app.get('/employees/:id', (req, res) => {
    var employee = employees.find(employee => employee.id === parseInt(req.params.id));

    if (employee == undefined) {
        res.status(404).send("Employee not found");
    } else {
        res.send(employee);
    }
});

// ----------------- HEALTHCHECK ---------------------
app.get('/liveness', (req, res) => {
    res.status(200).send("Liveness check passed");
});

app.get('/readiness', (req, res) => {
    res.status(200).send("Readiness check passed");
});

app.get('/bad-health', (req, res) => {
    res.status(500).send('Health check did not pass');
});

// ---------------------------------------------------

// Server listening on the specified port
app.listen(PORT, () => {
    console.log(`Server listening on port : ${PORT}`);
});