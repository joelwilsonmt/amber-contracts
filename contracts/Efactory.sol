pragma solidity >=0.4.0<0.6.0;

import "./serviceAgreement.sol";

contract CreateDeployServiceAgreement {
    event NewContract(address _newEscrow);

    function create_and_deploy_service_agreement(address payable _depositor) public {
        address _newEscrow = address(new ServiceAgreement(_depositor, msg.sender));
        emit NewContract(_newEscrow);
    }

}
