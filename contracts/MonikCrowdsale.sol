//SPDX-License-Identifier: Unlicense
pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/crowdsale/Crowdsale.sol";

contract MonikCrowdsale is Crowdsale {
    constructor(
        uint256 _rate,
        address payable _wallet,
        IERC20 _token
    ) public Crowdsale(_rate, _wallet, _token) {}
}
