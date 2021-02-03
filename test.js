var MetaCoin = artifacts.require("./MetaCoin.sol");
var address = artifacts.require("./addressNew")
var IstanbulTest = artifacts.require("./IstanbulTest")
var test0 = artifacts.require("./Test0")

contract('Test case', function (accounts) {
  it("trigger MetaCoin", async function () {
        this.timeout(10000)
        const meta = await MetaCoin.deployed();
        await wait(3);
        const res = (await MetaCoin.getOwner.call());
        const r = (await meta.hello.call())
        const re = (await meta.checkAddress.call(accounts[0]))
        assert.equal(tronWeb.address.toHex(accounts[0]), res, "owner should accounts[0]");
        assert.equal(1,r,"hello test");
        assert.equal(tronWeb.address.toHex(accounts[0]),re,"accounts shoule accounts[1]")
    });

    it("trigger address06_0", async function () {
          this.timeout(10000)
          const meta = await address.deployed();
          await wait(3);
          const res = (await address.checkAddress.call(accounts[0]));
          const re = (await meta.checkAddress2.call(accounts[0]))
          assert.equal(tronWeb.address.toHex(accounts[0]), res, "owner is same");
          assert.equal(tronWeb.address.toHex(accounts[0]),re,"accounts shoule same")
    });

    it("trigger is IstanbulTest", async function () {
      this.timeout(10000)
      const meta = await IstanbulTest.deployed();
      await wait(3);
      const t = 100;
      const res = (await meta.test.call(t));
      assert.equal(t, res, "owner is same");
      const re = (await meta.getBalance.call()).toNumber();
      assert.equal(re,0);
      const r = (await meta.getId.call());
      assert.notEqual(r,0);
    });

    it("trigger is fallback", async function () {
              this.timeout(10000)
              const meta = await test0.deployed();
              await wait(3);
              const t = 100;
              const res = (await meta.checkAddress.call());
//              assert.equal(tronWeb.address.toHex(accounts[0]), res);
//              const re = (await meta.hello.call(account[0]));
//              assert.equal(tronWeb.address.toHex(accounts[0]), res);
    });

});

//  before(async function () {
//
//    meta = await MetaCoin.deployed()
//    if(accounts.length < 3) {
//      // Set your own accounts if you are not using Tron Quickstart
//    }
//  })

//  it("should verify that there are at least three available accounts", async function () {
//    if(accounts.length < 3) {
//      console.log(chalk.blue('\nYOUR ATTENTION, PLEASE.]\nTo test MetaCoin you should use Tron Quickstart (https://github.com/tronprotocol/docker-tron-quickstart) as your private network.\nAlternatively, you must set your own accounts in the "before" statement in "test/metacoin.js".\n'))
//    }
//    assert.isTrue(accounts.length >= 3)
//  })
//
//  it("should verify that the contract has been deployed by accounts[0]", async function () {
//    assert.equal(await meta.getOwner(), tronWeb.address.toHex(accounts[0]))
//  });
//
//  it("should put 10000 MetaCoin in the first account", async function () {
//    const balance = await meta.getBalance(accounts[0], {from: accounts[0]});
//    assert.equal(balance, 10000, "10000 wasn't in the first account");
//  });

//  it("should call a function that depends on a linked library", async function () {
//    this.timeout(10000);
//    const meta = await MetaCoin.deployed();
//    await wait(1);
//    const metaCoinBalance = (await meta.getBalance.call(accounts[0])).toNumber();
//    const metaCoinEthBalance = (await meta.getBalanceInEth.call(accounts[0])).toNumber();
//    assert.equal(metaCoinEthBalance, 2 * metaCoinBalance, "Library function returned unexpected function, linkage may be broken");
//  });

//  it("should send coins from account 0 to 3 and verify that a Transfer event has been emitted", function (done) {
//    assert.isTrue(accounts[3] ? true : false, 'accounts[1] does not exist. Use Tron Quickstart!')

//    this.timeout(20000)
//    MetaCoin.deployed()
//        .then(meta => {
//          return tronWeb.contract().at(meta.address)
//              .then(meta2 => {
//                meta2.Transfer().watch((err, res) => {
//                  if(res) {
//                    assert.equal(res.result._from, tronWeb.address.toHex(accounts[0]))
//                    assert.equal(res.result._to, tronWeb.address.toHex(accounts[3]))
//                    assert.equal(res.result._value, 1)
//                    done()
//                  }
//                })
//
//                meta.sendCoin(accounts[3], 1, {
//                  from: accounts[0]
//                });
//              })
//        })
//  })

//  it("should send coins from account 0 to 1", async function () {
//    assert.isTrue(accounts[1] ? true : false, 'accounts[1] does not exist. Use Tron Quickstart!')
//
//    this.timeout(10000)
//    const meta = await MetaCoin.deployed();
//    await wait(3);
//    const account_one_starting_balance = (await meta.getBalance.call(accounts[0])).toNumber();
//    const account_two_starting_balance = (await meta.getBalance.call(accounts[1])).toNumber();
//    await meta.sendCoin(accounts[1], 10, {
//      from: accounts[0]
//    });
//    assert.equal(await meta.getBalance.call(accounts[0]), account_one_starting_balance - 10, "Amount wasn't correctly taken from the sender");
//    assert.equal(await meta.getBalance.call(accounts[1]), account_two_starting_balance + 10, "Amount wasn't correctly sent to the receiver");
//  });

