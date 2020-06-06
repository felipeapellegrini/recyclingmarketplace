const express = require("express");
const server = express();

// grab database
const db = require('./database/db');

// set public folder
server.use(express.static("public"));

// able req.body at app
server.use(express.urlencoded({ extended: true}));

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

server.post('/savepoint', (req, res) => {

    // insert data on db
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ];

    function afterInsertData(err) {
        if (err) {
            console.log(err);
            return res.send("Erro no cadastro" + err);
        }
        
        
        return res.render("create-point.html", { saved: true });
    }



    db.run(query, values, afterInsertData);

});

//search-results
server.get("/search", (req, res) => {

    const search = req.query.search;

    if (search == '') {
        return res.render("search-results.html", { total: 0 });
    }
    
    // grab data from db
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if (err) {
            return console.log(err);
        }

        // storing the data length
        const total = rows.length

        // show html page with db data
        return res.render("search-results.html", { places: rows, total: total });
    });
    
    
});


//turn server on
server.listen(3000);
