var MyContract = artifacts.require("./IstanbulTest");
var fk = artifacts.require("./addressNew");
var mt = artifacts.require("./MetaCoin");
var test0 = artifacts.require("./TestFallback3");
module.exports = function(deployer) {
   deployer.deploy(mt,10000);
   deployer.deploy(MyContract);
   deployer.deploy(fk);
   deployer.deploy(test0);
};
