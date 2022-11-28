import React, { useRef } from 'react'
import { getContract } from '../../contract'
import { prepareWriteContract, writeContract } from '@wagmi/core'

import abi from '../../utils/contractABI.json'

const AddNFT = (props) => {

	const contract = getContract()

	const tokenIdRef = useRef(null)
	const toRef = useRef(null)
	const imageRef = useRef(null)

	const mint = async () => {

		if (!tokenIdRef.current.value) {
			console.log('No tokenIdRef');
		}

		if (!toRef.current.value) {
			console.log('No to');
		}

		if (!imageRef.current.value) {
			console.log('No image');
		}

		try {

			const config = await prepareWriteContract({
				address: process.env.REACT_APP_CONTRACT_ADDRESS,
				abi: abi,
				functionName: 'mint',
				args:[
					toRef.current.value,
					tokenIdRef.current.value,
					imageRef.current.value,
				]
			})

			const { hash } = await writeContract(config)

			console.log(JSON.stringify(hash));

			// const res = await contract.mint(toRef.current.value, tokenIdRef.current.value, imageRef.current.value)

			// const responseTx = await res.wait()
			// console.log(responseTx);
			console.log('minted successfully');
		} catch (error) {
			console.log(error);
		}

	}

	return (
		<div className='flex flex-col space-y-2 w-full'>
			{/* <input type="file" accept="image/*" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required/> */}
			{/* <input type="text" placeholder='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' /> */}
			<input ref={tokenIdRef} type="text" placeholder='Token id' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
			<input ref={toRef} type="text" placeholder='To Address' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required />
			<input ref={imageRef} type="text" placeholder='Image URL' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required />
			<div className="flex space-x-2">
				<button onClick={() => mint()} className='text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800'>CREATE</button>
				<button onClick={props.close} className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>CLOSE</button>
			</div>
		</div>
	)
}

export default AddNFT
