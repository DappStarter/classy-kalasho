require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom glide fresh tragic name remember mad method inflict drop slot genius'; 
let testAccounts = [
"0x32d18ae36ed2cdf0c5e9e703215662b2da91cc92b854962785c9c83f841d28f7",
"0x34cdd3b174d0a21f67cc7bf59218d852c4ee9824e5026d9bcbe14d8b5a72a974",
"0x43ad5c6f85756ae55ee02f86645d702a1e1f5e65de800411ab78a86a557b0ff3",
"0x1ce04494e9891e5d8cd064e4d1eb0e8b0fccfdb6a9a7cb5af75b3c3182683071",
"0x8ff174b266b5c048fdea6dc89b47cde94fb01f6d10346c1e0c77ded66378fffd",
"0x05d9d094ca14ce9cbf715940f076ccd2a82883efbbe77a1e5c9f64cec47fce72",
"0x30d15017f1a523920ee9cd58c67ef761d1ee083ee45d57853c3e979d32ccea0b",
"0xa38c41ad2ee0fd15007fb3cec9bc07dac8775db1aaa1745dcc0577ee53fc8734",
"0x28f6a2daf44c43d1ae38e524df11a6625d21167909b061da1d37ab322606d1e8",
"0x69c660505458616f6f76e58bafa1d47e2f9cea2523eb9a13693e19d91e3b70ab"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

