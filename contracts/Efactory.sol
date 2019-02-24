pragma solidity >=0.4.0<0.6.0;

import "./dumb.sol";

contract EFactory {
    event NewContract(address _newEscrow);

    function creator(address payable _depositor) public {
        address _newEscrow = address(new Dumb(_depositor, msg.sender));
        emit NewContract(_newEscrow);
    }

}
