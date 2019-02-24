//use ownable from openzeppelin and escrow and safemath

pragma solidity ^0.5.2;

import './onering.sol';
import './safeMath.sol';

contract Dumb is Ownable {

    using SafeMath for uint256;

    address payable depositor;
    address payable painter;
    bool finished;

    event Deposited(address indexed payee, uint256 weiAmount);
    event Withdrawn(address indexed painter, uint256 weiAmount);
    event FINISHED(bool);

    mapping(address => uint256) private _deposits;

    constructor(address payable _depositor)public{
        depositor = _depositor;
        painter = msg.sender;
        finished = false;
    }

    modifier isDepositor(){
        require(msg.sender == depositor);
        _;
    }

    function depositsOf(address payee) public view returns (uint256) {
        return _deposits[payee];
    }


    function deposit(address payee) public payable isDepositor{
        uint256 amount = msg.value;
        _deposits[payee] = _deposits[payee].add(amount);
        emit Deposited(payee, amount);

    }


    function withdraw() public payable onlyOwner {
        require(finished == true);
        uint256 balance = address(this).balance;
        address(painter).transfer(address(this).balance);
        emit Withdrawn(painter, balance);
        selfdestruct(depositor);
    }

    function setFinished() public payable isDepositor{
        //set value of finished to true must be depositor
        finished = true;

        emit FINISHED(finished);

    }

    function getBalance() public view returns(uint256){
        return address(this).balance;
    }

    function cancel() public payable onlyOwner {
        selfdestruct(depositor);
    }


}
