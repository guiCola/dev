/*Source: https://www.youtube.com/watch?v=js319cgJvrQ*/
/*IDE: https://ethereum.github.io/browser-solidity/#version=soljson-v0.4.19+commit.c4cbbb05.js&optimize=true*/
pragma solidity ^0.4.0;

/*Contrat qui permet à des user d'acheter des tickets de concert
    Un user envoi des fonds et son adresse est enregistrée comme adresse qui possède un ticket
    Nombre de ticket finit
    Retour des fond au créteur du SC quand tout est vendu
*/

contract Concert {
    
    address owner;
    uint public nbTickets;
    uint constant ticketPrice = 1 ether ;
    mapping (address => uint) public purchasers;
    
    function Concert() public{
       owner = msg.sender;
       nbTickets = 5;
   }
   
   function () public payable{
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
   
}