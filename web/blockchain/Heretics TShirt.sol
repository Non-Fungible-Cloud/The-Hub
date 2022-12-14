// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.0/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts@4.8.0/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.0/token/ERC1155/extensions/ERC1155Supply.sol";

// TODO change name of the token
// Create a nft contract for each apparel?


contract TESTNFTs is ERC1155, Ownable, ERC1155Supply {
    uint128[] supplies = [500, 50];
    uint128[] minted = [0, 0];
    uint64[] price = [0.05 ether, 0.1 ether];

    constructor() ERC1155("https://ipfs.io/ipfs/QmbAx3rWxnC4NH6sa67TVibc9QSKHT6cLdVKSNyxtotVBS") {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(uint256 id, uint128 amount)
        public
        payable
    {
        require(id <= supplies.length, "Token does not exist");
        require(id > 0, "Token does not exist");
        require(msg.value >= amount * price[id - 1], "Not enough ether sent");
        require(minted[id -1] + amount <= supplies[id - 1], "Not enough supply");

        _mint(msg.sender, id, amount, "");
        minted[id-1] += amount;
    }


    function withdraw() public onlyOwner{
        require(address(this).balance > 0, "Balance must be more than 0");
        payable(owner()).transfer(address(this).balance);
    }


    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}
