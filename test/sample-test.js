const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Deployment", function () {

  let monikToken;
  let monikCrowdsale;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async () => {
    const MonikToken = await ethers.getContractFactory("MonikToken");
    const MonikCrowdsale = await ethers.getContractFactory("MonikCrowdsale");

    [owner, addr1, addr2] = await ethers.getSigners();

    monikToken = await MonikToken.deploy("Monik Token", "MT", 18, ethers.utils.parseUnits("10", 18));
    await monikToken.deployed();

    monikCrowdsale = await MonikCrowdsale.deploy(1, "0x231464eF37dFBD7b3B9e55DaBAF79386910d82B3", monikToken.address);
    await monikCrowdsale.deployed();

    await monikToken.transferOwnership(monikCrowdsale.address);

    await monikToken.transferFrom(owner.address, monikToken.address, ethers.utils.parseUnits("10", 18));
  });

  it("Owner account has all the token", async () => {
    balance = await monikToken.balanceOf(owner.address);
    expect(balance).to.equal(ethers.utils.parseUnits("10", 18));
  });

  it("Buy token", async function () {
    console.log('** addr1 : ', addr1.address);
    console.log('** addr2 : ', addr2.address);
    console.log('** owner : ', owner.address);

    monikCrowdsale.buyTokens(addr1, { value: ethers.utils.parseUnits("2", 18) });
    let totalSupply = await monikToken.totalSupply();
    expect(totalSupply).to.be.equal(ethers.utils.parseUnits("10", 18));
  });

});
