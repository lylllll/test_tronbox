var MyContract = artifacts.require("./IstanbulTest");
var fk = artifacts.require("./addressNew");
var mt = artifacts.require("./MetaCoin");
var test0 = artifacts.require("./TestPayable");
module.exports = function(deployer) {
   deployer.deploy(mt,10000);
   deployer.deploy(MyContract);
   deployer.deploy(fk);
   deployer.deploy(test0);
};
