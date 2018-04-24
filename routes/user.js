var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

var User = require('..model/user');

router.post('/', function(req, res, next) {
  	var user = new User({
  		firstName: req.firstName,
  		lastName: req.lastName,
  		password: bcrypt.hashSync(req.password, 10),
  		email: req.email,
  	});
  	user.save(function(err, result) {
  		  if(err) {
            return res.status(500).json({
            title: 'An error occured',
            error: err
          });
         }
         res.status(201).json({
         	message: 'User created',
         	obj: result
         });
  	});
});

module.exports = router;
