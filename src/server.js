const express = require("express");
const server = express();

// set public folder
server.use(express.static("public"));

// using template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
});


// set my app's routes
//home
server.get("/", (req, res) => {
    return res.render("index.html")
});

//create-point
server.get("/create-point", (req, res) => {
    return res.render("create-point.html");
});

//search-results
server.get("/search", (req, res) => res.render("search-results.html"));


//turn server on
server.listen(3000);
