pragma experimental ABIEncoderV2;
contract addressNew{
    function checkAddress(address addr) view public returns (address){
        return addr;
    }
    function test() public view returns(uint){
        return 1;
    }
    function checkAddress2(address addr) pure public returns(address){
        return addr;
    }
}