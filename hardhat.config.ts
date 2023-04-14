import "@nomiclabs/hardhat-etherscan"
import "dotenv/config"
import "./tasks/block-number"
//require("@nomicfoundation/hardhat-toolbox");
import "@nomiclabs/hardhat-waffle"
import "hardhat-gas-reporter"
import "solidity-coverage"
import "@nomiclabs/hardhat-ethers"
import "@typechain/hardhat"



const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL ||"https://eth-sepolia/example"
const PRIVATE_KEY =process.env.PRIVATE_KEY || "0xKey"
const ETHERSCAN_API_KEY=process.env.ETHERSCAN_API_KEY || "key"
const COINMARKETCAP_API_KEY=process.env.COINMARKETCAP_API_KEY || "key"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts:[PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost:{
      url:"http://127.0.0.1:8545/",
      chainId: 31337
    }
  },
  solidity: "0.8.17",

  etherscan:{
     apiKey: ETHERSCAN_API_KEY
  },

  gasReporter: {
    enabled: true,
    noColors:true,
    currency:"USD",
    outputFile:"gas_report.txt",
    coinmarketcap:COINMARKETCAP_API_KEY,
    token:"BNB"
  },
  mocha: {
		timeout: 500000,
	},
};
