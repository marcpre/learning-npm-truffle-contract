pragma solidity ^0.4.17;

contract Friend {

    string name;
    uint age;

    function setFriend(string _name, uint _age) public {
        name = _name;
        age = _age;
    }

    function getFriend() public constant returns (string, uint) {
        return(name, age);
    }
}
