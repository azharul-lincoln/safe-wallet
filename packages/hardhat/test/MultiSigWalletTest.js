const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("MultiSigWallet Test", () => {
  let metaMultiSigWallet;
  let owner;
  let addr1;
  let addr2;
  let addr3;
  let addrs;

  let provider;
  let signer;
  let multiSigWallet;
  const CHAIN_ID = 1;
  const signatureRequired = 1; // Starting with something straithforward

  beforeEach(async () => {
    [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();
    const multiSigWalletFactory = await ethers.getContractFactory(
      "MultiSigWallet"
    );
    console.log("owner address", owner.address);
    multiSigWallet = await multiSigWalletFactory.deploy(
      CHAIN_ID,
      [owner.address],
      signatureRequired
    );
    console.log("owner address", multiSigWallet.address);
    await owner.sendTransaction({
      to: multiSigWallet.address,
      value: ethers.utils.parseEther("1.0"),
    });
    provider = owner.provider;
  });

  describe("Testing MultiSigWallet", () => {
    it("isSigner should return true for the owner address", async () => {
      expect(await multiSigWallet.isOwner(owner.address)).to.equal(true);
    });
  });
});
