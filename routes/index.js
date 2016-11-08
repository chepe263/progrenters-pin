var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	pin = 0;
	if(!req.query.pin){
		pin = 1003;
	} else {
		pin = parseInt(req.query.pin);
	}
	if(pin > 1000 &&  pin % 2 === 0){
		return res.json( {'pass': false} );
	}
	console.log(req.query.pin);
	return res.json( {'pass': true} );
	//res.render('index', { title: 'Express' });
});

module.exports = router;
