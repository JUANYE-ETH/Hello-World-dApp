// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract HelloWorld {
    string public response = "Hello World";

    function setResponse(string memory _response) public{
     response = _response;
 }

    function getResponse() public view returns(string memory){
     return response;
 }

}