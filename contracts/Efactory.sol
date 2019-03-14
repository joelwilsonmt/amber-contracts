pragma solidity >=0.4.0<0.6.0;

import "./serviceAgreement.sol";

contract CreateDeployServiceAgreement {
    event NewContract(address _newContract,address actionTo, uint256 weiAmount);

    function init(address payable _depositor, uint256 _requestAmount) public {
        address _newContract = address(new ServiceAgreement(_depositor, msg.sender, _requestAmount));
        emit NewContract(_newContract, _depositor, _requestAmount);
    }
}
