// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    uint public value;

    function setValue(uint _newValue) public {
        value = _newValue;
    }

    function getValue() public view returns (uint) {
        return value;
    }
}
