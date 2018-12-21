var mysql = require('mysql');
var connection;

if (process.env.JAWS_DB) {
    connection = mysql.createConnection(process.env.JAWS_DB);
}

else {
connection = mysql.createConnection({
    port:3306,
    host:'localhost',
    user:"root",
    password:"password",
    database:"burgers_db"
});
}

connection.connect(function(err){
    if (err) {
        console.log("err");
        return;
    }
    console.log("connected");
});

module.exports = connection;