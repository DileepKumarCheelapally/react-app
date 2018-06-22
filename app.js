const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('tracer').colorConsole();

const app = express();
const port = process.env.PORT || 3000;

// init database
const db = require('./utils/database');


app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(function(req, res, next) {
//   logger.info(req.body);
//   next();
// });

var appRoutes = require('./routes/router')(app);


app.get('*', function(req, res){
  res.send({ express: 'Hello From Express' });
});

app.listen(port, function(){console.log(`gulp is Listening on port ${port}`)});
