//SPDX-License-Identifier: Unlicense
pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";

contract MonikToken is ERC20, ERC20Detailed, Ownable {
    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 _totalSupply
    ) public ERC20Detailed(_name, _symbol, _decimals) {
        // _mint(msg.sender, _totalSupply);
        _mint(address(this), _totalSupply);
    }
}
