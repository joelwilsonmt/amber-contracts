pragma solidity >=0.4.21 <0.6.0;

import 'openzeppelin-solidity/contracts/math/SafeMath.sol';

contract Dumb{
    //Libs
    using SafeMath for uint256;
    //Global
    address payable depositor;
    address payable creator;
    bool finished;

    //Events
    event Deposited(address indexed payee, uint256 weiAmount);
    event Withdrawn(address indexed creator, uint256 weiAmount);
    event FINISHED(bool);

    mapping(address => uint256) private _deposits;

    constructor(address payable _depositor, address payable _creator)public{
        depositor = _depositor;
        creator = _creator;
        finished = false;
    }

    modifier isOwner(){
        require(msg.sender == creator);
        _;
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

    function withdraw() public payable isOwner {
        require(finished == true);
        uint256 balance = address(this).balance;
        address(creator).transfer(address(this).balance);
        emit Withdrawn(creator, balance);
        selfdestruct(depositor);
    }

    function setFinished() public payable isDepositor{
        finished = true;
        emit FINISHED(finished);
    }

    function getBalance() public view returns(uint256){
        return address(this).balance;
    }

    function cancel() public payable isOwner{
        selfdestruct(depositor);
    }

    function seeOwner() public view returns(address){
        return creator;
    }

    function seeDepositor() public view returns(address){
        return depositor;
    }
}
