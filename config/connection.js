var mysql = require('mysql');
var connection;

var connection = mysql.createConnection({
    port:3306,
    host:'localhost',
    user:"root",
    password:"password",
    database:"burgers_db"
});

connection.connect(function(err){
    if (err) {
        console.log("err");
        return;
    }
    console.log("connected");
});

module.exports = connection;