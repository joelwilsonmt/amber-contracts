var express = require("express");
var router = express.Router();

var User = require('../models/user');
const findOrCreate = require('mongoose-find-or-create')


//TODO:
//req.body.publicAddress
//User.findOne(req.body.publicAddress)
//.then(err, user)
//if (err) new User({publicAddress: req.body.publicAddress})
router.put("/", function(req, res) {
  console.log(
    "getting user" + " @ " + new Date() + "----------------------------------"
  );
  console.log(req.body);
  var data = req.body;


  User.findOrCreate({ publicAddress: data.publicAddress }, {username: data.username}, (err, result) => {
    if(err){console.log(err);}
    console.log("successful find user by public address: ", result);
    res.status(200).send(result);
  });

  // new User({
  //     username:data.username,
  //     publicAddress: data.publicAddress
  //   }).save(function (err, user) {
  //       if (err) {
  //             console.log(err);
  //             res.sendStatus(400);
  //           }
  //       console.log("Sending user back to client");
  //       res.status(200).send(user);
  //   });
  new User({
    username: data.username,
    publicAddress: data.publicAddress
  }).save(function(err, user) {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    }
    console.log("Sending user back to client");
    res.status(200).send(user);
  });
  // User.find(req.body)
  //   .then(function (user) {
  //       console.log("find user complete");
  //       res.status(200).send(user);
  //   }); //closes exec
}); //closes router.put

module.exports = router;
