var express = require('express');
var router = express.Router();
var User = require('../models/user');
//TODO:
//req.body.publicAddress
//User.findOne(req.body.publicAddress)
//.then(err, user)
//if (err) new User({publicAddress: req.body.publicAddress})
router.put('/', function (req, res) {
  console.log("getting user" + " @ " + new Date() + "----------------------------------");

  User.find(req.body)
    .then(function (user) {
        console.log("find user complete");
        res.status(200).send(user);
    }); //closes exec
}); //closes router.put

module.exports = router;
