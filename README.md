# Clarity ERC721


How to run the erc721 minter webapp.

## Install clarinet(like truffle)
https://docs.hiro.so/smart-contracts/clarinet
### Install stack wallet
https://www.hiro.so/wallet
### get some testnet stack
https://explorer.stacks.co/sandbox/faucet?chain=testnet
### deploy contract to testnet
update clarinet/settings/testnet.tom and add your seedphrase
## deploy you contract
clarinet deploy --testnet
then copy the smart contracts address
## update src/config.js with contracts details as below
```javascript
const Config = {
	erc721ContractName: "erc721",
	erc721ContractAddress: "STH65BDD88EQ3FE0HARR848CNWBP17KGEK0BNEH0"
}
```
## install react dependencies
```sh
yarn
```
## run the app
```sh
yarn start
```