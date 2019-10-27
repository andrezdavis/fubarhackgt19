var express = require('express');
var router = express.Router();

/* GET users listing. */
var http = require("https");
var request = require("request")


router.get('/', function(req, res, next) {
  var ro = 'market'
  var title = 'Marketplace'
  if(globalJson == 0) {
    ro = 'index'
    title = 'Home'

  }
  console.log(marketItems)
  console.log(globalJson)
  res.render(ro, {title: title, marketItems: marketItems, user: globalJson});
});


module.exports = router;
