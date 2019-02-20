var express = require('express');
var router = express.Router();
var User = require('../models/user');
//req.body.publicAddress
//User.findOne(req.body.publicAddress)
//.then(err, user)
//user.contracts.push({
//   contractAddress: req.body.contractAddress,
//   title: req.body.title,
//   etc
// })
router.put('/', function (req, res) {

}); //closes router.put

module.exports = router;
