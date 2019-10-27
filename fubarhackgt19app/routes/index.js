var express = require('express');
var router = express.Router();
var request = require('request');
var cors = require('cors')
/* GET home page. */
var http = require("https");



router.get('/', function(req, res, next) {
  var options = { method: 'GET',
  url: 'https://fubarhackgt-5106.restdb.io/rest/marketplace',
  headers:
   { 'cache-control': 'no-cache',
     'x-apikey': 'dfa09b07d6ac23b2627564ada5e138e273ffc' } };
request(options, function (error, response, body) {
  if (error) throw new Error(error);
  marketItems = JSON.parse(body)
  console.log(body);
  });
  res.render('index', { title: 'Home' });
});
router.get('/buttonpress', function(req, res, next) {
  var options = {
    "method": "GET",
    "hostname": "fubarhackgt-5106.restdb.io",
    "path": "/rest/users",
    "port": 443,
    "headers": {
      "Content-Type": "application/json",
      "x-apikey": "dfa09b07d6ac23b2627564ada5e138e273ffc",
      "Cache-Control": "no-cache"
    }
  };
  var body;
  http.request(options, function (resp) {
    var chunks = [];

    resp.on("data", function (chunk) {
      chunks.push(chunk);
    });

    resp.on("end", function () {
      body = Buffer.concat(chunks);
      console.log(JSON.parse(body.toString()));
      res.send(body)
    });


  }).end()
})
router.post('/signup', function(req, res, next) {
  console.log(req.body.email)
  console.log(req.body.fname)
  console.log(req.body.lname)
  var options = {
    method: 'POST',
    url: 'https://fubarhackgt-5106.restdb.io/rest/users',
    headers:
      { 'cache-control': 'cache',
     'x-apikey': 'dfa09b07d6ac23b2627564ada5e138e273ffc',
     'content-type': 'application/json' },
     body: { 'email': req.body.email, 'first name' : req.body.fname, 'last name': req.body.lname, 'username': req.body.username, 'password': req.body.password, 'active': true, 'weeklyBudget' : req.body.weeklyBudget, 'savedMoney': req.body.savedMoney },
     json: true };
  var body;
  request(options, function (error, response, body) {
  if (error) throw new Error(error);
  globalJson = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    weeklyBudget: req.body.weeklyBudget,
    savedMoney: req.body.savedMoney
  }
  console.log(body);
  res.send(body);
  });
})
router.post('/login', function(req, res, next) {

  console.log(req.body.user)
  console.log(req.body.password)
  // `Fifteen is ${a + b}.`
  var url = `https://fubarhackgt-5106.restdb.io/rest/users?q={"username": "${req.body.username}","password": "${req.body.password}"}`
  var options = {
    method: 'GET',
    url: url,
    headers:
      { 'cache-control': 'cache',
     'x-apikey': 'dfa09b07d6ac23b2627564ada5e138e273ffc',
     'content-type': 'application/json' },
     json: true };

  request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);

  globalJson = {
    _id: body[0]._id,
    fname: body[0]["first name"],
    lname: body[0]["last name"],
    email: body[0].email,
    username: body[0].username,
    password: body[0].password,
    weeklyBudget: body[0].weeklyBudget,
    savedMoney: body[0].savedMoney,
    spentMoney: body[0].spentMoney
  }
  res.send(body)
  });
})
router.post('/', function(req, res, next) {
  var options = { method: 'POST',
    url: 'http://ncrqe-qe.apigee.net/digitalbanking/oauth2/v1/token',
    headers:
     { 'Postman-Token': '79c98fd6-f626-41c6-9798-55222bb02c88',
       'cache-control': 'no-cache',
       Date: 'Sat, 26 Oct 2019 20:40:30 GMT',
       Accept: 'application/json',
       institutionId: 'DI0516',
       transactionId: 'f3df8be7-621d-4278-994a-1f3d6a156c1d',
       Authorization: 'Basic NDAxZGFhYjIyZTNiNDAxNjgwZTY4ZTk0NmNiZWI5YzI6MDgxMDBmYjIyYWYzNDBmZGIwZDBjYmNjZTViMGJjMmU=',
       'Content-Type': 'application/x-www-form-urlencoded' },
    form:
     { grant_type: 'password',
       scopes: 'accounts:read,transactions:read,transfers:write,account:write,institution-users:read,recipients:read,recipients:write,recipients:delete,disclosures:read,disclosures:write',
       username: 'HACKATHONUSER096',
       password: 'test123' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    res.send(body)
  });
})


// request.get('')

module.exports = router;
