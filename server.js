
var express = require('express');
var http = require('http');
var url = require('url');

var app = express();
var port = process.env.PORT || 5000;
var server = http.createServer(app);
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {

    
    res.send('eneter url with p1 & p2 Values');
});
app.get('/favicon.ico', function(req, res) {

    
    res.send('favicon');
});

app.get('/calculate_distance', function(req, res) {

  
  var p1 = req.query.p1;
  var n1 = p1.split(",");
  var p2 = req.query.p2;
  var n2 = p2.split(",");
  var lat1 = n1[0];
  var lat2 = n2[0];
  var lon1 = n1[1];
  var lon2 = n2[1];
  
  var p = 0.017453292519943295;    
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
          c(lat1 * p) * c(lat2 * p) * 
          (1 - c((lon2 - lon1) * p))/2;

  var dist = 12742 * Math.asin(Math.sqrt(a)); 
	
  res.send(String(dist));
});
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
