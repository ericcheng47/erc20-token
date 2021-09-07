const WProvider = require('truffle-hdwallet-provider')
require('dotenv').config()

const mnemonic = process.env.MNEMONIC
const pID = process.env.PROJECT_ID

module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.RINKEBY_APIKEY,
    bscscan: process.env.BSC_APIKEY,
    kovanscan: process.env.KOVAN_APIKEY,
  },
  networks: {
    ropsten: {
      provider: () =>new WProvider(mnemonic,`https://ropsten.infura.io/v3/${pID}`),
      network_id: 3,
      confirmations: 2,
      timeoutBlocks: 200, 
      skipDryRun: true,
      networkCheckTimeout: 1000000000,
      gas: 6721975,        // Ropsten has a lower block limit than mainnet
      gasPrice: 200000000000  ,
    },
    bsc: {
      provider: () => new WProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 1000000
    },
    testnet: {
      provider: () => new WProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545/`),
      network_id: 97,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 1000000
    },
    kovantest: {
      provider: () => new WProvider(mnemonic,`https://kovan.infura.io/v3/${pID}`),
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 100000,
      network_id: 42,
      gasPrice: 10e9,
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 5777,
      networkCheckTimeout: 10000
    },
  },
  compilers: {
    solc: {
      version: "0.8.0"
    }
  }
}