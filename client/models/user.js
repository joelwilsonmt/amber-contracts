var mongoose = require("./../config/db-config");

UserSchema = mongoose.Schema(
  {
    publicAddress: String,
    avatar: String, //url to picture
    username: String,
    contracts: [
      {
        contractAddress: String, // from contract address and ABI, can get value, date created, other view() functions
        title: String, //user provided
        recipientPublicAddress: String,
        ABI: [Object],
        status: [String] //like 'deployed', 'pending deposit', 'deposit in escrow', 'pending fundReleaseApproval', or 'inactive'
      }
    ]
  },
  { collection: "users" }
);

var User = mongoose.model("User", UserSchema);

module.exports = User;
