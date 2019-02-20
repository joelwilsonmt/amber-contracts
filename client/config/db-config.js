var mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.DB_CONFIG);
mongoose.connect(process.env.DB_CONFIG, {useNewUrlParser: true}, console.log);


module.exports = mongoose;
