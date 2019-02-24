const eFactoryContract = artifacts.require('./Efactory.sol');

let accounts;
let factory;

beforeEach(async () => {
	accounts = await web3.eth.getAccounts();

	factory = await eFactoryContract.deployed();
	console.log(factory);
});

describe('Efactory Contract', () => {
	it('Should Deploy a contract', () => {
		assert.ok(factory.address);
		console.log(factory.address);
	});
});
