const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const routes = require("./routes/api");
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const Raven = require('raven');
var cors = require('cors')
app.use(cors())

// Install global error logger
if (process.env.SENTRY) {
  Raven.config(process.env.SENTRY).install();  
}

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
        extended: true,
     parameterLimit: 10000,
     limit: 1024 * 1024 * 10
}));
app.use(bodyParser.json({
        extended: true,
     parameterLimit: 10000,
     limit: 1024 * 1024 * 10
}));
app.use(expressValidator());

app.use(routes);

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(400).send({"error" : err.message});
})

/**
 *  Have our server listen on port 8000
 */
module.exports = app.listen(port, function(){
  console.log('Server running on port %d', port);
});
