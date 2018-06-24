const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('tracer').colorConsole();
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// init database
const db = require('./utils/database');

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));


var appRoutes = require('./routes/router')(app);


app.get('*', function(req, res){
  res.send({ express: 'Hello From Express' });
});

app.listen(port, function(){console.log(`gulp is Listening on port ${port}`)});
