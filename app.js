var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 1980;
var db = 'mongodb://localhost/Score';
var Score = require('./index.js');

mongoose.connect(db);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.send('greatest job I ever had!')
});

app.get('/Score', function(req, res) {
  console.log('getting score');
  Score.find({})
  .exec(function(err, Score) {
    if(err) {
      res.send('error occured')
    }else{
      console.log(Score);
      res.json(Score);
    }
  });
});

app.get('/score/:id', function(req, res) {
  console.log('getting one score');
  Score.findOne({
    _id:req.params.id
  })
  .exec(function(err, Score) {
    if(err){
      res.send('error occured')
    }else{
      console.log(Score);
      res.json(Score)
    }
  });
});

app.post('/score', function(req, res) {
  var newScore = new Score();

  newScore.Player = req.body.Player;
  newScore.Score = req.body.Score;

  newScore.save(function(err, Score) {
    if(err){
      res.send('error occured');
    }else{
      console.log(Score);
      res.send(Score);
    }
  });
});




app.listen(port, function() {
  console.log('listening on port' + port);
});
