import { ethers } from "hardhat";

async function main() {
  const MyToken = await ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy();
  console.log(`Contract deployed to ${token.address}`);

  const signers = await ethers.getSigners();
  const signer = signers[0];
  const signerAddr = await signer.getAddress();

  const tx = await token.mint(signerAddr, "100000000000000000000");
  const res = await tx.wait();
  console.log(res);
  console.log("Finish minting.");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
