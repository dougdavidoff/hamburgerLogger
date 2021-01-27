
var mysql = require("mysql");

if(process.env.EATDB_URL) {
    connection = mysql.createConnection(process.env.EATDB_URL);
}
else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3005,
        user: "root",
        password "root",
        database: "burgers_db"
    });
}


connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return
    }
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;