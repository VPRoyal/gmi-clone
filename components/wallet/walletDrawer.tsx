import React from 'react'
import WalletBox from './walletBox';
import { Settings, LogOut, X} from 'lucide-react';
import { useWalletContext } from '@/context/walletContext';
import { User } from 'lucide-react';
interface DrawerProps {
    onClose?: () => void;
}
const walletDrawer = ({onClose}:DrawerProps) => {
  const {connected, wallet, balance, usdValue, disconnectWallet} = useWalletContext();
  const handleDisconnect=()=>{
    disconnectWallet();
    onClose?.();
  }

  const shortenAddress = (address: string) =>
        `${address.substring(0, 5)}...${address.substring(address.length - 5)}`
  return (
    <div className="fixed inset-0 top-0 left-0 w-full h-full bg-black/80 z-100">
    {connected&&<div className='bg-[#141619] text-white rounded-md min-w-[400px] max-w-[700px] w-fit h-[100%] flex flex-col absolute right-0'>
        <div className='flex items-center gap-x-5 px-6 py-5'>
            <div className='w-[56px] h-[56px] flex justify-center items-center'><User className='w-full h-full'/></div>
            <div className='flex flex-col gap-y-2'><p className='font-bold text-2xl'>{shortenAddress(wallet!)}</p><p className='text-[14px] font-[400]'>See your profile</p></div>
            <div className='ml-auto cursor-pointer' onClick={onClose}><X className="h-6 w-6 "/></div>
        </div>
        <div className='flex gap-x-2.5 text-[16px] font-bold px-6 py-5'><p><Settings className="h-6 w-6" /></p><p>Account Setting</p></div>
        <div className='flex justify-center'><p className='text-green-500 font-bold border-b-2 px-10 py-2 border-green-500'>My Wallet</p></div>
        <div><WalletBox address={wallet!} balance={balance} usdValue={usdValue}/></div>
        <div className='flex gap-x-2 p-4 mt-auto cursor-pointer' onClick={handleDisconnect}>
          <LogOut className="h-6 w-6 "/>
          <span>Disconnect</span>
        </div>
    </div>}
    </div>
  )
}

export default walletDrawer;