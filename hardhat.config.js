require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const AVALANCHE_TEST_PRIVATE_KEY = "e7b42f586ccfe07a8f919698d2772a2e3120c658f4f5f931cf5f1d443b17ee12";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.5.6",
  networks: {
    ga: {
      url: 'HTTP://127.0.0.1:7545',
      gasPrice: 225000000000,
      chainId: 1337,
      accounts: [`0x${AVALANCHE_TEST_PRIVATE_KEY}`]
    },
  }
};
