
const hre = require("hardhat");

async function main() {

  const BrewstersNFT = await hre.ethers.getContractFactory("BrewstersNFT");
  const brewstersNFT = await BrewstersNFT.deploy();

  await brewstersNFT.deployed();

  console.log("BrewstersNFT deployed to:", brewstersNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
