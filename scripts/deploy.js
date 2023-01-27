async function main() {
    const [deployer] = await ethers.getSigners();
    const ERC20Token = await ethers.getContractFactory("ERC20Token");
    const erc20token = await ERC20Token.deploy();
    console.log("ERC20Token contract deplyed to: ", erc20token.address);

    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();
    console.log("NFT contract deplyed to: ", nft.address);

    const platformWallet = "0x02D6A0870104390B0B1117eD4096866FA26A52bE";
    const Marketplace = await ethers.getContractFactory("Marketplace");
    const marketplace = await Marketplace.deploy(nft.address, erc20token.address, platformWallet);
    console.log("Marketplace contract deplyed to: ", marketplace.address);
}
 main()
   .then(() => process.exit(0))
   .catch((error)=> {
       console.error(error);
       process.exit(1);
   });

