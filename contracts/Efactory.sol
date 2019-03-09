pragma solidity >=0.4.0<0.6.0;

import "./serviceAgreement.sol";

contract CreateDeployServiceAgreement {
    event NewContract(address _newEscrow, uint256 weiAmount);

    function create_and_deploy_service_agreement(address payable _depositor, uint256 _requestAmount) public {
        address _newEscrow = address(new ServiceAgreement(_depositor, msg.sender, _requestAmount));
        emit NewContract(_newEscrow, _requestAmount);
    }
}
