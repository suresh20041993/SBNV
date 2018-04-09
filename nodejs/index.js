var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var mysql = require('mysql');
var jwt = require('jsonwebtoken');


var urlencodedParser = bodyParser.urlencoded({ extended: false});
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb'}));



var mysql = require('mysql'); var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'suresh',
  database : 'anybank'
});


app.use(bodyParser.urlencoded({ extended: false }));
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, authentication-token, application/json, charset=utf-8");
    if ('OPTIONS' == req.method) {
    res.sendStatus(200);
    } else {
      next();
    }
});
 
// connection.connect(function(err) {
//   if (err) {
//     return console.error('error: ' + err.message);
//   }
//   connection.query("SELECT * FROM ab_users where uid = 1", function (err, result, fields){
//     console.log(result);
//   });

// });
// app.get('/user/login', function(req, res){

//   // res.status(200)
//   res.end(JSON.stringify('API'));
//   res.end();
// });



app.post('/user/login', function(req, res){

  var user = req.body.username;
  var pass = req.body.password;

  console.log(user);
  console.log(pass);

  connection.query("select count(*) as count from ab_users where username='"+ user +"' and password='"+ pass +"';", function(err, data, fields){
      // var result = '';
      var user = [{
          'username':user,
          'password':pass
      }];

      if(err){
          console.log(err);
          res.end(JSON.stringify(err));
          res.end();
      }else{
          var message = '';
          console.log(data);
          if(data[0].count > 0){
              var flag = true;
              var token=jwt.sign({user},'kdcaSecurity');
              message="Login Successful";
              res.status(200).json({
                  message,
                  token,
                  flag
              });
          }else{
              var flag = false;
              message = 'Username or Password Wrong.';
              res.status(200).json({
                  message,
                  flag
              });
          }//end if    
      }//end if
      
  });//end Con.query
});


app.listen(5000, () => console.log('Server started on port 5000'));