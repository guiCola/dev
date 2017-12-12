// https://www.youtube.com/channel/UC0Wu-J4_SoFOYVKA8JRuRRg/videos
pragma solidity ^0.4.0;

contract foo{
    
    Calculator Calc = Calculator(0xbde95422681e4c3984635af2f2f35f8c44a4ddc9); // If the contract "Caculator" is already on the BC
    // Calculator Calc = new Calculator();
    
    function ByTwo() constant returns(int){
        return Calc.multiply(2,3);
       
    }
    
    function PlusNine() constant returns(int){
        return Calc.add(2,9);
        
    }
}
/*
contract Calculator{
    
    function add(int a , int b) returns(int)  {
        return a + b;
    }
    
    function multiply(int a, int b) returns(int) {
        return a * b;
    }
}
*/