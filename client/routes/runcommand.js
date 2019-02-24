var express = require("express");
var router = express.Router();

var User = require('../models/user');
const findOrCreate = require('mongoose-find-or-create')
var cmd=require('node-cmd');



//TODO:
//req.body.publicAddress
//User.findOne(req.body.publicAddress)
//.then(err, user)
//if (err) new User({publicAddress: req.body.publicAddress})
router.put("/", function(req, res) {

  console.log("command following:");
  cmd.get(
          'pwd',
          function(err, data, stderr){
              console.log('data from command: ',data);
              console.log(err);
              console.log("std err:", stderr);
          }
      );
  res.send(200);
}); //closes router.put

module.exports = router;
