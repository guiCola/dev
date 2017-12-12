// https://www.youtube.com/channel/UC0Wu-J4_SoFOYVKA8JRuRRg/videos
pragma solidity ^0.4.0;

library Groups{

// We can use more then one attribute in the structure    
    struct Group {
        mapping (address => int) = members;
    }
    
    function addMember (Group storage self, address addr) returns(bool) {
        if(self.members[addr]){  // Already a member
            return false;  
            
        }
        self.members[addr] = true;
        return true;
    }
    
    function delMember (Group storage self, address addr) returns(bool) {
        if(!self.members[addr]){ // Not a member 
            return false;  
            
        }
        self.members[addr] = false;
        return true;
    }
    
    
}