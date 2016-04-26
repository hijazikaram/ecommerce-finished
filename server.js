var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var ProductCtrl = require('./controllers/productCtrl.js');

var app = express();

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

app.post('/products', ProductCtrl.create);

app.get('/products', ProductCtrl.read);

app.put('/products/:id', ProductCtrl.update);

app.delete('/products/:id', ProductCtrl.delete)

app.listen(8080, function() {
  console.log("listening on port 8080");
})
mongoose.connect('mongodb://localhost/ecomApp', function(err) {
  console.log(err);
});
