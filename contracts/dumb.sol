//use ownable from openzeppelin and escrow and safemath 

pragma solidity ^0.5.2;

import './onering.sol';
import './safeMath.sol';

 /**
  * @title Escrow
  * @dev Base escrow contract, holds funds designated for a payee until they
  * withdraw them.
  * @dev Intended usage: This contract (and derived escrow contracts) should be a
  * standalone contract, that only interacts with the contract that instantiated
  * it. That way, it is guaranteed that all Ether will be handled according to
  * the Escrow rules, and there is no need to check for payable functions or
  * transfers in the inheritance tree. The contract that uses the escrow as its
  * payment method should be its primary, and provide public methods redirecting
  * to the escrow's deposit and withdraw.
  */
contract Dumb is Ownable {

    using SafeMath for uint256;

    address public depositor;
    bool finished;

    event Deposited(address indexed payee, uint256 weiAmount);
    event Withdrawn(address indexed payee, uint256 weiAmount);
    event FINISHED(bool);

    mapping(address => uint256) private _deposits;

    constructor(address _depositor)public{
        depositor = _depositor;
        finished = false;
    }

    modifier isDepositor(){
        require(msg.sender == depositor);
        _;
    }

    function depositsOf(address payee) public view returns (uint256) {
        return _deposits[payee];
    }

    /**
     * @dev Stores the sent amount as credit to be withdrawn.
     * @param payee The destination address of the funds.
     */
    function deposit(address payee) public payable isDepositor{
        uint256 amount = msg.value;
        _deposits[payee] = _deposits[payee].add(amount);
        emit Deposited(payee, amount);

    }

    /**
     * @dev Withdraw accumulated balance for a payee.
     * @param payee The address whose funds will be withdrawn and transferred to.
     */
    function withdraw(address payable payee) public onlyOwner {
        require(finished == true);
        uint256 balance = address(this).balance;
        payee.transfer(address(this).balance);
        emit Withdrawn(payee, balance);
    }

    function setFinished() public payable isDepositor{
        //set value of finished to true must be depositor
        finished = true;

        emit FINISHED(finished);

    }

    function getBalance() public view returns(uint256){
        return address(this).balance;
    }

}
