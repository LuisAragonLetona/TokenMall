// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.10;

interface IERC721 {

    //SE CREA EL EVENTO DE TRANFERENCIA
    event Transfer (
        address indexed from,
        address indexed to,
        uint256 indexed tokenId
    );

    event Approval(
        address indexed _owner,
        address indexed _approved,
        uint256 indexed _tokenId
    );

    function balanceOf(address _owner) external view returns (uint256);

    function ownerOf(uint256 _tokenId) external view returns (address);

    function transferFrom(address _from, address _to, uint256 _tokenId) external;
}