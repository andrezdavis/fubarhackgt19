var express = require('express');
var router = express.Router();
var request = require('request')
/* GET users listing. */
router.get('/', function(req, res, next) {
  var ro = 'profile'
  var title = 'Profile'
  if(globalJson == 0) {
    ro = 'index'
    title = 'Home'
  }

  var options = { method: 'GET',
  url: 'https://fubarhackgt-5106.restdb.io/rest/marketplace',
  headers:
   { 'cache-control': 'no-cache',
     'x-apikey': 'dfa09b07d6ac23b2627564ada5e138e273ffc' } };
request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(JSON.parse(body))

  marketItems = JSON.parse(body)
  console.log(body);
  console.log(marketItems);
  });
  console.log('inside profile route')
  console.log(globalJson)
  res.render(ro , {title: title, body: globalJson});
});

router.put('/setSavedMoney', function(req, res, next) {
  var options = { method: 'PUT',
    url: 'https://fubarhackgt-5106.restdb.io/rest/users/'+globalJson._id,
    headers:
     { 'cache-control': 'no-cache',
       'x-apikey': 'dfa09b07d6ac23b2627564ada5e138e273ffc',
       'content-type': 'application/json' },
    body: { savedMoney: req.body.savedMoney },
    json: true };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    res.send(body)
  });
})


module.exports = router;
