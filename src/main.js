var appRoot = require('app-root-path');
var express = require('express');
var app = express();
var fs = require("fs");
//The method will return product list
app.get('/listProduct', function (req, res) {
   fs.readFile( appRoot.path + "/data/" + "productdata.json", 'utf8', function (err, data) {
       res.end( data );
   });
})
//The method will return product based on provided product id from get request
app.get('/:id', function (req, res) {
   // First read product.
   fs.readFile( appRoot.path + "/data/" + "productdata.json", 'utf8', function (err, data) {
      var productList = JSON.parse( data );
      console.log(productList);
      var product = productList["product"+req.params.id] 
      res.end( JSON.stringify(product));
   });
})
app.get('/deleteProduct/:id', function (req, res) {
   // First read product.
   console.log("method match");
   fs.readFile( appRoot.path + "/data/" + "productdata.json", 'utf8', function (err, data) {
      var productList = JSON.parse( data );
      console.log(productList);
      delete productList["product"+req.params.id] 
      res.end( JSON.stringify(productList));
   });
})
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Shopping app listening at http://%s:%s", host, port)

})