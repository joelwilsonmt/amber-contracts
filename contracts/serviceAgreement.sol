pragma solidity >=0.4.21 <0.6.0;

import 'openzeppelin-solidity/contracts/math/SafeMath.sol';

contract ServiceAgreement{
    //Libs
    using SafeMath for uint256;
    //Global
    address payable depositor;
    address payable creator;
    uint256 requestAmount;
    bool finished;

    //Events
    event Deposited(address indexed despositor, uint256 weiAmount);
    event Withdrawn(address indexed creator, uint256 weiAmount);
    event NextAction(string);
    event FINISHED(bool);


    constructor(address payable _depositor, address payable _creator, uint256 _requestAmount )public{
        depositor = _depositor;
        creator = _creator;
        requestAmount = _requestAmount;
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

    function deposit_funds() public payable isDepositor{
        require(msg.value == requestAmount);
        uint256 amount = msg.value;
        emit Deposited(msg.sender, amount);
        emit NextAction("agree_upon_services_delievered");
    }

     function agree_upon_services_delievered() public payable isDepositor{
        finished = true;
        emit FINISHED(finished);
        emit NextAction("withdraw_and_terminate_contract");
    }

    function withdraw_and_terminate_contract() public payable isOwner {
        require(finished == true);
        uint256 balance = address(this).balance;
        address(creator).transfer(address(this).balance);
        emit Withdrawn(creator, balance);
        selfdestruct(depositor);
    }

    function cancel() public payable isOwner{
        selfdestruct(depositor);
    }

    function get_balance() public view returns(uint256){
        return address(this).balance;
    }

    function see_owner() public view returns(address){
        return creator;
    }

    function see_depositor() public view returns(address){
        return depositor;
    }
  }
