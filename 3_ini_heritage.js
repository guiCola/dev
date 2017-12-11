/*Source: https://www.youtube.com/watch?v=kOBet0BPKzg*/
/*IDE: https://ethereum.github.io/browser-solidity/#version=soljson-v0.4.19+commit.c4cbbb05.js&optimize=true*/
pragma solidity ^0.4.0;

/*Héritage de contrats
*/

contract Concert {
    address owner;
    uint public nbTickets;
    uint constant ticketPrice = 1 ether ;
    mapping (address => uint) public purchasers;
    
    function Concert(uint t) public{
       owner = msg.sender;
       nbTickets = t;
   }
   
   function () private payable{
   }
   
   function contractBalance() public constant returns(uint256 bal){
       bal = this.balance;
       return bal; 
   }
   
   function buyTickets(uint amount) public payable{
       
       if(msg.value != (amount * ticketPrice) || amount > nbTickets ){
           revert();
       }
       purchasers[msg.sender] += amount;
       nbTickets -= amount;
       
       if(nbTickets == 0){
           selfdestruct(owner);
       }
   }
   
   function webSite() public returns (string);
}

interface refundable{
    function refund(uint RefnbTickets) public returns(bool);
}

contract groupSaberus is Concert(10), refundable{
   
   function webSite() public returns(string){
       return "http://www.ecosia.org";
   } 
   
   function refund(uint RefnbTickets) public returns(bool){
       if(purchasers[msg.sender] < RefnbTickets){
           return false;
       }
       msg.sender.transfer(RefnbTickets * ticketPrice);
       purchasers[msg.sender] -= RefnbTickets;
       nbTickets += RefnbTickets;
       return true;
   }
}