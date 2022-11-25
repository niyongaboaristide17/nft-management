import { Contract, providers, Wallet } from 'ethers';

import abi from './utils/contractABI.json'

export const getContract = () =>{

	const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS
	const provider = new providers.JsonRpcProvider(process.env.REACT_APP_RPC_URL)
	const signer = new Wallet(process.env.REACT_APP_KEY).connect(provider)
	const contractInstance = new Contract(contractAddress, abi, signer)
	// const contractInstance = new Contract(contractAddress, abi, provider)

	// console.log(await contractInstance.name())

	return contractInstance

}