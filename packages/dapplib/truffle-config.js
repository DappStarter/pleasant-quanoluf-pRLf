require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remind concert gesture inflict swallow twin'; 
let testAccounts = [
"0x040d0eb533439a01898472a73dd0fa567744f0ac08454df1aa1835b3bc84d5f1",
"0xf16340a883fece7c9c6a4db9e9b8ecb2020cb5f9cd0699bef11309362f4de990",
"0xea9614ab3d2b6d7466e1df58422c75b26ff97f8d0acb0d543cd6c33d457c4a57",
"0x33e4856996c025cd2d2b496b24b078da8fe113489294a0b558836655945c04ea",
"0xd91d052ad77aac15fa108f8dfcd3564be7cc5d1ceb7dfd7e74a927d642942007",
"0xd91992bf59c1dda8ff76abacb656d959a9c1457e7954afbf4a6f1150556a9a5c",
"0x22148e730cdc79caf9bb4c25d43518f95d645e0bfddd109e69d628ee3ab58ed1",
"0x8172cc6a35996be47621698f3e66f979fccaa5818847e163abab76930f08bc90",
"0x204286ef9506e7550ee1e1238679c74caaaf1a9649c81d36cb8585c7b14b1325",
"0xca9417ef85c752e57878495560a5a2e207c5ddd6982a0f2f815df82c0d6b3dff"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

