var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

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

router.post('/signin', function(req, res, next) {
	User.findOne({email: req.body.email}, function(err, user) {
		  if(err) {
            return res.status(401).json({
            title: 'An error occured',
            error: err
          });
         }
         if(!user) {
         	return res.status(401).json({
         		title: 'Login failed',
         		error: {message: 'Invalid login credentials'}
         	});
         }
         if(!bycrypt.compareSync(req.body.password, user.password)) {
         	 return res.status(401).json({
         		title: 'Login failed',
         		error: {message: 'Invalid login credentials'}
         	});
          }
          var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
		  res.status(200).json({
		  	message: 'Successfully logged in',
		  	userId: user._id	
		  }); 	
	});
});

module.exports = router;
