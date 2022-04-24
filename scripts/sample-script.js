// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const ethers = require('ethers');

async function main() {

  const MonikToken = await hre.ethers.getContractFactory("MonikToken");
  const MonikCrowdsale = await hre.ethers.getContractFactory("MonikCrowdsale");

  const monikToken = await MonikToken.deploy("Monik Tokne", "MT", 18, ethers.utils.parseUnits("10", 18));
  await monikToken.deployed();

  console.log("Monik Token deployed to:", monikToken.address);

  const monikCrowdsale = await MonikCrowdsale.deploy(1, "0x169E1F533cb806208342093c406969875F87c9b8", monikToken.address);
  await monikCrowdsale.deployed();

  console.log("Monik Crowdsale deployed to:", monikCrowdsale.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
