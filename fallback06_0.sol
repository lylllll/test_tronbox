contract Test0{
    event FuncCalled(bytes data,uint a);
}

contract TestFallback1 {

    event FuncCalled(string a);
    fallback() external {
        x = "fallback";
        emit FuncCalled(x);
    }
    string x;
}
//含有payable的fallback，无receice
contract TestFallback2 {

    event FuncCalled(string data);
    fallback() external payable{
        x = "fallback";
        emit FuncCalled(x);
    }
    string x;
}

contract TestFallback3 {
    event FuncCalled(string a);

    fallback() external payable {
        x = "fallback";
        emit FuncCalled(x);
    }

    function test() public returns(uint256){
        return 1;
    }

    receive() external payable {
        x = "receive";
        emit FuncCalled(x);
    }
    string x;
}

contract Caller {
    function callTest0(Test0 test) public{
        (bool success,) = address(test).call(abi.encodeWithSignature("nonExistingFunction()"));
        require(success);
    }
    function callTest1(address test) public returns (bool) {
        (bool success,) = test.call(abi.encodeWithSignature("nonExistingFunction()"));
        require(success);
        (success,) = address(test).call("");
        require(success);
        return true;
    }
    function callTest2(address test) public payable returns (bool) {
        (bool success,) = test.call.value(1000)(abi.encodeWithSignature("nonExistingFunction()"));
        require(success);
        return true;
    }
    function callTestPayable1(TestFallback3 test) public payable returns (bool) {
        (bool success,) = address(test).call(abi.encodeWithSignature("nonExistingFunction()"));
        require(success);
        (success,) = address(test).call("");
        require(success);
        return true;
    }
}

