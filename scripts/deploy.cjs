const hre = require("hardhat");

async function main() {
  const SimpleToken = await hre.ethers.getContractFactory("SimpleToken");
  const token = await SimpleToken.deploy("7ONG TOKEN", "7ONG", 1000000);
  await token.waitForDeployment();
  console.log("Token deployed at:", await token.getAddress());

  const [deployer] = await ethers.getSigners();
  const balance = await token.balanceOf(deployer.address);
  console.log(`Deployer address: ${deployer.address} with balance: ${balance}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
