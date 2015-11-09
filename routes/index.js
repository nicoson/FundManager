var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { data: 'Express' });
});

router.post('/page-one', function(req, res, next){
	console.log(req);
	res.render('index', { data: req.body.testword });
});

module.exports = router;
