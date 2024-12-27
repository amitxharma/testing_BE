const express = require('express');
const app = express(); // Declare 'app' explicitly

// Middleware function
function loggerMiddleware(req, res, next) {
    console.log("Method is " + req.method);
    console.log("Hostname is " + req.hostname);
    console.log("Route is " + req.url);
    console.log("Date is " + new Date());
    next(); // Pass control to the next middleware or route handler
}

// Apply middleware globally
app.use(loggerMiddleware);

// Define routes
app.get("/server1", function (req, res) {
    res.send("hello from server1");
});

app.get("/server2", function (req, res) {
    res.send("hello from server2");
});


app.get("/", function (req, res) {
    res.send("Welcome to server!!")
})
app.get("/server3", function (req, res) {
    res.send("hello from server3");
});

// Start server
app.listen(3000, () => {
    console.log("running on port 3000");
});
