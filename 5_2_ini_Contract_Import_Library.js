// https://www.youtube.com/channel/UC0Wu-J4_SoFOYVKA8JRuRRg/videos
pragma solidity ^0.4.0;
import '5_1_ini_Library.js';

contract Funlibrary {

 	Groups.Group admins;
 	event Success();

    /* Version 1 of a modifier
 	modifier OnlyAdmins(){ 

 		bool IsAdmin = false;

 		if(admins.members[msg.sender]){  // is a member    
            IsAdmin == true; 
 		}
 		_;
 	}
 	*/
    // Version 2 of a modifier : in this version if its not an admin address => Error 
 	modifier OnlyAdmins(){ 
 		require(admins.members[msg.sender]);// is a admin 
 		_;
 	}
 	

 	function Funlibrary() {
 		Groups.addMember(Admins , msg.sender);
 	}
 
 	// function acting like a proxy to the functions of the library.
 	function add(address addr) OnlyAdmins {
 		if(Groups.addMember(admins,addr))
 	    Success();

 	}

 	function remove(address addr) OnlyAdmins {
 		if(Groups.delMember(admins,addr))
 	    Success();

 	}


}