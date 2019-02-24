const dumb = artifacts.require('./dumb.sol');

module.exports = function(deployer) {
	deployer.deploy(dumb);
};
