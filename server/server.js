const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 8082,
  server = require("http").Server(app);

const gallery = require('./routes/gallery.route.js');
const corporate = require('./routes/corporate.route.js');
app.use(express.static("./../"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', (req, res, next) => {
  console.log('inside routes');
  next();
}, corporate,gallery);


server.listen(PORT, (err, res) => {
  if (err) {
    console.log("error in server - > ", err);
  } else {
    console.log("Server up and listening on port ", PORT);
  }
});


// const express = require('express')
//     , app = express()
//     , server = http.createServer(app)
//     , port = process.env.port || 1100;
//
// // allowing CORS control to the app server ---->
// app.use(function(req, res, next) {
//  	res.header("Access-Control-Allow-Origin", "*");
//  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  	next();
//  	});
//
// // serving up static files to the server Eg.: img, html, css, js files ---->
// app.use(express.static('./../'));
//
// // server routes ---->
// app.use('/',(req,res,next)=>{
//   console.log('inside routes');
//   next();
// });
//
// // serving up the app server to the environment port --->
// server.listen(port, (err, res)=>{
//   if (err) {
//     console.log('err in serving up the app server - > ',err);
//   } else {
//     console.log('server successfully serverd up in port 1100');
//   }
// });
