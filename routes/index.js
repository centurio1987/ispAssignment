var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.set("Content-Type", "text/html");
	fs.readFile("public/html/main.html", function(err, data){
		res.send(data);
	})
});

router.get('/testangular', function(req, res, next){
	res.set('Content-Type', 'text/html');
	fs.readFile('public/html/testangular.html', function(err, data){
		res.send(data)
	});
});

router.get('/testmap', function(req, res, next){
	res.set('Content-Type', 'text/html');
	fs.readFile('public/html/testmap.html', function(err, data){
		res.send(data)
	});
});

router.get('/testangboot', function(req, res, next){
	res.set('Content-Type', 'text/html');
	fs.readFile('public/html/testangboot.html', function(err, data){
		res.send(data);
	});
});

router.get('/retrieve_data/test_data', function(req, res, next){
	res.set('Content-Type', 'application/json');
	var testdata = {
		hello:"hello",
		world:"world"
	};
	res.send(testdata);
});

router.route('/retrieve_data/test_data')
.get(function(req, res, next){
	res.set('Content-Type', 'application/json');
	var testdata = {
		hello:"hello",
		world:"world"
	};
	res.send(testdata);
})
.post(function(req, res, next){
	res.set('Content-Type', 'application/json');
	var testdata = {
		hello:"hello",
		world:"world"
	};
	res.send(testdata);
});

module.exports = router;
