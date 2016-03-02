var express = require('express');
var router = express.Router();
var path = "C:\\projects\\starter\\views";
/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/


router.get('/', function(req, res, next) {
  res.sendFile(path+'\\home.html');
});


module.exports = router;
