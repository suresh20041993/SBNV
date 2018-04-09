
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'suresh',
  database : 'anybank'
});
 
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
 
  console.log('Connected to the MySQL server.');
});
// However, a connection can also be implicitly established by invoking a query:

// var mysql      = require('mysql');
// var connection = mysql.createConnection(...);
 
// connection.query('SELECT 1', function (error, results, fields) {
//   if (error) throw error;
//   // connected!