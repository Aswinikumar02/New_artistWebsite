const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 8082,
  server = require("http").Server(app);

const gallery = require('./routes/gallery.route.js');
const corporate = require('./routes/corporate.route.js');
const slider = require('./routes/slider.route.js');
const contactus = require('./routes/contactinfo.route.js');

app.use(express.static("./../"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', (req, res, next) => {
  console.log('inside routes');
  next();
}, corporate,gallery,slider,contactus
);


server.listen(PORT, (err, res) => {
  if (err) {
    console.log("error in server - > ", err);
  } else {
    console.log("Server up and listening on port ", PORT);
  }
});
