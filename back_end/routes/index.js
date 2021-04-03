var express = require('express');
var router = express.Router();
const database = require('../database')

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send({
    name:"Malindu"
  })
});

module.exports = router;
