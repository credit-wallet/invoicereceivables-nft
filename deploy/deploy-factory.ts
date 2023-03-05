import { utils, Wallet } from 'zksync-web3';
import * as ethers from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { Deployer } from '@matterlabs/hardhat-zksync-deploy';

export default async function (hre: HardhatRuntimeEnvironment) {
  console.log("running");
  const wallet = new Wallet('0760f12e22b81d72ab9cbf7321990b9c05a73cf5bf0f0e180b9382eb9abc9fc8');
  const deployer = new Deployer(hre, wallet);
  const invoiceNFTArtifact = await deployer.loadArtifact('InvoiceNFT');
  // const aaArtifact = await deployer.loadArtifact('TwoUserMultisig');
  console.log("1");

  const usdcAddr: string[] = ["0x07865c6e87b9f70255377e024ace6630c1eaa37f"];

  // Getting the bytecodeHash of the account
  // const bytecodeHash = utils.hashBytecode(aaArtifact.bytecode);

  const factory = await deployer.deploy(
    invoiceNFTArtifact,
    usdcAddr,
  );

  console.log(`Invoice NFT address: ${factory.address}`);
}
