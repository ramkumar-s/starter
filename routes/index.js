var express = require('express');
var router = express.Router();
var path = "C:\\projects\\starter\\views";
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
/**
 * @param  {any} '/'
 * @param  {any} function(req
 * @param  {any} res
 * @param  {any} next
 */
router.get('/', function(req, res, next) {
  res.sendFile(path+'\\home.html');
});

module.exports = router;
