require("@nomiclabs/hardhat-waffle");

const endpointUrl = "https://green-virulent-season.bsc-testnet.quiknode.pro/5ebb6c9dc368e8caf625152d1ab73c602ea71d95/";
const privateKey = "354a56c74d1c990d65f213a504bd5c5edbe6a51439182d18c264c056bf3a5878";

module.exports = {
  solidity: "0.8.21",
  networks: {
    sepolia: {
      url: endpointUrl,
      accounts: [privateKey],
    },
  },
};