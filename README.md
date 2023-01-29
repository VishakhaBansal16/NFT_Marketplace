Task Description:
Create a marketplace smart contract to buy and sell NFT with your custom ERC20 token.

Functionalities:
Buy, Sell and mint NFT.
You need to add 2.5% of the sell price/token to the platform fee.
Users can set fractional Royalties of multiple Owners for the NFT's selling price.
Create 3 different smart contracts for ERC20, ERC721 and Marketplace.
For achieving this task I have done the following:
Created a ERC20 token contract.
Created a ERC721 token contract.
Created a Marketplace contract.

Technologies Used:
Soldity
Openzepplein
Hardhat

Install and Run:
To run this project, you must have the following installed:
nodejs
npm
Run npm install to install dependencies
$ npm install
Run npx hardhat compile to compile all contracts.
$ npx hardhat compile
Run npx hardhat run scripts/deploy.js to deploy contracts on hardhat.
$ npx hardhat run scripts/deploy.js
Run npx hardhat run scripts/deploy.js --network goerli to deploy contracts on testnet goerli.
$ npx hardhat run scripts/deploy.js --network goerli
