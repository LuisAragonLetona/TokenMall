// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.10;

interface IERC721Metadata {
    function name() external view returns (string memory _name);

    function symbol() external view returns (string memory _symbol);
}