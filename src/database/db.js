// import sqlite dependencie
const sqlite3 = require('sqlite3').verbose();

// start db object
const db = new sqlite3.Database('./src/database/database.db');

// export db
module.exports = db;

// use db object for operation
// db.serialize(() => {
//     // create table
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     // insert data into table
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);
// `
//     const values = [
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Earth_recycle.svg/145px-Earth_recycle.svg.png",
//         "Colectoria",
//         "Guilherme Gemballa, Jardim America",
//         "260",
//         "SC",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('Sucesso!');
//         console.log(this);
//     }

//     db.run(query, values, afterInsertData);

// consult the table data
//     db.all(`SELECT * FROM places`, function(err, rows) {
//         if (err) {
//             return console.log(err);
//         }
    
//         console.log('Aqui estão os resultados da sua consulta:');
//         console.log(rows);
//     });

// // delete data from table
// db.run(`DELETE FROM places WHERE id > ?`, [0], function(err) {
//     if (err) {
//         return console.log(err);
//     }
    
//     console.log('Registro deletado com sucesso!');
// });
// });