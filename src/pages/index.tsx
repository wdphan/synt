import { FC } from 'react'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import Loader from '@/components/Loader'
import React, { useContext } from 'react'
import { TransactionContext } from '@/context/TransactionContext'

const companyCommonStyles =
	'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'

const Input = ({ placeholder, name, type, value, handleChange }) => (
	<input
		placeholder={placeholder}
		type={type}
		step="0.0001"
		value={value}
		onChange={e => handleChange(e, name)}
		className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
	/>
)

const Hero = () => {
	const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } =
		useContext(TransactionContext)

	const handleSubmit = e => {
		const { addressTo, amount, keyword, message } = formData

		e.preventDefault()

		if (!addressTo || !amount || !keyword || !message) return

		sendTransaction()
	}

	return (
		<div className="sm:mb-14 md:h-100vh lg:h-100vh xl:h-100vh ">
			<div className="flex justify-center items-center h-100vh sm:block ">
				<div className="flex mf:flex-row flex-col items-start justify-between md:pr-20 lg:pr-20 xl:pr-20 py-12 px-4 ">
					<div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
						<h1 className="text-5xl sm:text-3xl text-white font-bold">
							Send Crypto <br /> across the world
						</h1>
						<p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
							Explore the crypto world. <br></br>Send cryptocurrency easily with Synt.
						</p>
						{!currentAccount && (
							<button type="button" onClick={connectWallet}>
								<p className="text-white text-base font-semibold mt-10 rounded-full pr-10 pl-10 pt-2 pb-2 bg-[#43B5F4] hover:bg-[#89CFF5]">
									Connect Wallet
								</p>
							</button>
						)}

						<div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 bg-[#232329] rounded-2xl text-white">
							<div
								className={`rounded-tl-2xl border-[#0e0e0f]
							${companyCommonStyles}`}
							>
								Reliability
							</div>
							<div className={`rounded-tr-2xl border-[#0e0e0f] ${companyCommonStyles}`}>Security</div>
							<div
								className={`sm:rounded-tr-2xl border-[#0e0e0f]
							${companyCommonStyles}`}
							>
								Ethereum
							</div>
							<div
								className={`sm:rounded-bl-2xl border-[#0e0e0f]
							${companyCommonStyles}`}
							>
								Web 3.0
							</div>
							<div
								className={`rounded-bl-2xl border-[#0e0e0f]
							${companyCommonStyles}`}
							>
								Low Fees
							</div>
							<div
								className={`rounded-br-2xl border-[#0e0e0f]
							${companyCommonStyles}`}
							>
								Blockchain
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col flex-1 items-center justify-start w-full mt-0">
					<div className="p-3 flex justify-end items-start flex-col rounded-xl sm:h-32 md:h-40 lg:h-40 xl:h-40 w-72 sm:w-72 my-5 eth-card .white-glassmorphism ">
						<div className="flex justify-between flex-col w-full h-full">
							<div className="flex justify-between items-start">
								<div className="w-10 h-10 rounded-full border-2 border-[white] flex justify-center items-center">
									<SiEthereum fontSize={21} color="#fff" />
								</div>
								<BsInfoCircle fontSize={17} color="#fff" />
							</div>
							<div>
								<p className="text-white font-light text-sm"></p>
								<p className="text-white font-semibold text-lg mt-1">Ethereum</p>
							</div>
						</div>
					</div>
					<div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism sm:mt-0 sm:h-45 mb-5 text-white">
						<Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
						<Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
						<Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
						<Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
						<div className="h-[1px] w-full bg-gray-400 my-2" />

						{false ? (
							<Loader />
						) : (
							<button
								type="button"
								onClick={handleSubmit}
								className="text-white w-full mt-2 border-[1px] p-2 border-[#43B5F4] hover:bg-[#43B5F4] rounded-full cursor-pointer font-semibold"
							>
								Send now
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
