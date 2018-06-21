const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

var router = express.Router();

router.route('/datalist')
  .get(function(req,res){
    var resJson = require('./testData.json');

    res.json(resJson);
  });

app.use('/api', router)

app.get('/', function(req, res){
  res.send({ express: 'Hello From Express' });
});

app.listen(port, function(){console.log(`gulp is Listening on port ${port}`)});
