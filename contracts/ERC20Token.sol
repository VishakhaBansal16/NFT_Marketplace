//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ERC20Token is ERC20{
    constructor() ERC20("ERC20 Token", "Token"){
    }

    function mint(address account, uint256 amount) public {
        _mint(account, amount);
    }
}