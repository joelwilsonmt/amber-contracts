// Contract accepts deposit from 1 user and accepts outside transaction from whitelisted address, oracleAddress

pragma solidity 0.4.24;

contract RainyDay {

  // Declare a persistent public variable, balanceOf, that maps from account addresses to 256-bit unsigned integers, which represent the current balance of ether stored by the contract on behalf of the corresponding address. Remember that mappings can be indexed just like arrays in JavaScript. We write the variable, balanceOf, this way so that for more than 1 sender, it can keep track of the ether balances assigned to each account. The bank contract's ether balance is the sum of all the balances of all accounts. We don't need to define a contructor for balanceOf, because the mapping already already provides default values of 0.
  mapping(address => uint256) public balanceOf;

  function deposit(uint256 amount) public payable {

    require(msg.value == amount);

    // adjust balance of contract account
    balanceOf[msg.sender] += amount;

  }


  // The weather event should trigger this function, which refunds each sender's contract balance
  function issueRefund(uint256 amount) public {

    // The refund amount is the sender's entire contract balance
    require(amount = balanceOf[msg.sender]);

    // funds are sent to the sender requesting the withdrawal
    msg.sender.transfer(amount);

  }


  // WEATHER ORACLE STUFF BELOW THIS LINE

  // Our contract exposes one public address, oracleAddress:
  address public oracleAddress;

  // Setting the input parameter for oracleAddress:
  constructor (address _oracleAddress) public {
    oracleAddress = _oracleAddress;
  }

  // This is our publicly visible function that can be called from an outside transaction (our oracle). The require statement means that only the whitelisted address (oracleAddress) can trigger this function, which triggers the refund.
  function updateWeather (string rainVolume) public {

    require(msg.sender == oracleAddress);

    issueRefund();

  }

}
