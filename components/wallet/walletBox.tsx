"use client"
import { Copy, ExternalLink, CheckCircle, CircleDollarSign } from 'lucide-react';
// import { formatValues} from '@/utilities/formatter';

interface props {
    address: string,
    balance: string,
    usdValue: number
}
const WalletBox = ({ address, balance, usdValue }: props) => {
    const shortenAddress = (address: string) =>
        `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
    const copyToClipboard = () => {
        navigator.clipboard.writeText(address || "");
    };
    return (
        <div className='dark:bg-[#21252b] p-2'>
            <div className="flex items-center justify-between mb-2 border-b border-[#2e333a] pb-4">
                <div className='flex items-center text-white gap-x-1'>
                    <img src="/nrg.svg" alt="" className='w-[26px] h-[26px]' /><span>Energi</span>
                </div>
                <div className="text-green-600 flex items-center gap-1">
                    <CheckCircle size={16} />
                    <span className="text-sm">Connected</span>
                </div>
            </div>
            <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <img src="/metamask.svg" alt="" className='w-[25px] h-[25px]' />
                    <span>{shortenAddress(address)}</span>
                </div>
                <div className="flex gap-2">
                    <button onClick={copyToClipboard}>
                        <Copy className="h-5 w-5 text-gray-500 hover:text-black cursor-pointer focus:text-green-500" />
                    </button>
                    <a
                        href={`https://etherscan.io/address/${address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ExternalLink className="h-5 w-5 text-gray-500 hover:text-black" />
                    </a>
                </div>
            </div>
            <div className=" mt-6">
                <div className=' justify-items-center'>
                    <p className="text-sm text-gray-500">
                        Total Balance
                    </p>
                    <p>$ {usdValue}</p>
                </div>
                <div className="flex justify-center mt-5 mb-2.5 ">
                        <button className='px-2.5 py-[5px] rounded-md bg-green-500'>Add Funds</button>
                </div>
            </div>
        </div>
    )
}
export default WalletBox;