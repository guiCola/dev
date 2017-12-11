/*test*/
/*test2*/
/*Source: https://www.youtube.com/watch?v=xWKq86PWG0o*/
/*IDE: https://ethereum.github.io/browser-solidity/#version=soljson-v0.4.19+commit.c4cbbb05.js&optimize=true*/
pragma solidity ^0.4.0;
contract Uss {

    string word ;
    uint number ;
    address owner;
    
    //constructor: called one time at the creation of the SC
    function Uss() public{
        word = "bird";
        number = 42;
        owner = msg.sender;
    }
    
    event change(address adr);
    
    modifier testOwner{
        require(msg.sender == owner);
        _;
    }
    
    //function geter
    function getWord() public constant returns(string){
        return(word);
    }
    
    //function seter
    function setWord(string w) testOwner public{
        word = w ;
        change(msg.sender);
    }
}