// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MilanToken is ERC20, Ownable {

    address lockedWallet;

    constructor() ERC20("MilanToken", "MITK") {
        _mint(msg.sender, 1000000 * 10**18);
    }

    function minting(address to, uint256 amount) external onlyOwner() {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external onlyOwner() {
        _burn(from, amount);
    }

    function setLockWallet(address account, uint256 amount) external onlyOwner() {
        lockedWallet = account;
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount) internal override {
        if(lockedWallet != address(0)){
            require(from != lockedWallet, "The wallet is locked");
            require(to != lockedWallet, "The wallet is locked");
        }  
        super._beforeTokenTransfer(from, to, amount);
    }
}