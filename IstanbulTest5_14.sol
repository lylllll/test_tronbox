contract IstanbulTest {
    constructor() public payable {}
    function getId() public view returns(uint256){
        uint256 id;
        assembly {
            id := chainid()
        }
        return id;
    }
    function getBalance() public view returns(uint256){
        return address(this).balance;
    }

    function test(uint256 t) public view returns(uint256){
        return t;
    }
}
