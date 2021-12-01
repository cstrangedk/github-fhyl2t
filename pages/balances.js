const Web3 = require('web3');
import { ethers } from 'ethers';

export async function getBalances() {
  let rinkebyABIs = require('../contracts/rinkeby_ABIs.json');
  let schainABIs = require('../contracts/schain_ABIs.json');

  let account = process.env.REACT_APP_INSECURE_ACCOUNT;
  let rinkeby = process.env.REACT_APP_INSECURE_RINKEBY;
  // let schainEndpoint = process.env.REACT_APP_INSECURE_SKALE_CHAIN;
  // let schainName = process.env.REACT_APP_INSECURE_CHAIN_NAME;

  // const ethERC20Address = schainABIs.eth_erc20_address;
  // const ethERC20ABI = schainABIs.eth_erc20_abi;

  const communityPoolAddress = rinkebyABIs.community_pool_address;
  const communityPoolABI = rinkebyABIs.community_pool_abi;

  const provider = new ethers.providers.JsonRpcProvider(rinkeby);
  // const web3Rinkeby = new Web3(rinkeby);
  // const web3SkaleChain = new Web3(schainEndpoint);

  // const ETHERC20 = new web3SkaleChain.eth.Contract(
  //   ethERC20ABI,
  //   ethERC20Address
  // );

  // const CommunityPool = new web3Rinkeby.eth.Contract(
  //   communityPoolABI,
  //   communityPoolAddress
  // );

  const balance = await provider.getBalance(account);
  const balanceInEther = ethers.utils.formatEther(balance);

  // const balanceData = await web3Rinkeby.utils.fromWei(
  //   web3Rinkeby.eth.getBalance(account),
  //   'ether'
  // );

  // web3Rinkeby.eth.getBalance(account).then((balance) => {
  //   balanceData = web3Rinkeby.utils.fromWei(balance, 'ether');
  // });
  console.log('balance.js ' + balanceInEther);

  return balanceInEther;

  // CommunityPool.methods
  //   .getBalance(schainName)
  //   .call({ from: account })
  //   .then((balance) => {
  //     if (balance === null) {
  //       balance = 0;
  //     }
  //     balance = web3Rinkeby.utils.hexToNumberString(
  //       web3Rinkeby.utils.numberToHex(balance)
  //     );
  //     document.getElementById('community_balance').value =
  //       web3Rinkeby.utils.fromWei(balance, 'ether');
  //   });

  // ETHERC20.methods
  //   .balanceOf(account)
  //   .call()
  //   .then((balance) => {
  //     if (balance === null) {
  //       balance = 0;
  //     }
  //     balance = web3Rinkeby.utils.hexToNumberString(
  //       web3Rinkeby.utils.numberToHex(balance)
  //     );
  //     document.getElementById('skale_balance').value =
  //       web3Rinkeby.utils.fromWei(balance, 'ether');
  //   });

  // setTimeout(function () {
  //   getBalances();
  // }, 4000);
}
