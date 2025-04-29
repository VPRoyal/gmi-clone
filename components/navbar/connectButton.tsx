"use client"
import {useEffect, useState} from 'react'
import { User } from 'lucide-react';
import ConnectWalletPopup from '../wallet/connectWalletPopup';
import WalletDrawer from '../wallet/walletDrawer';
import { useWalletContext } from '@/context/walletContext';
const ConnectButton= () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [showDrawer, setShowDrawer] = useState<boolean>(false);
    const {connected, wallet} = useWalletContext();
    const shortenAddress = (address: string) =>
      `${address.substring(0, 5)}...${address.substring(address.length - 5)}`;

    const handleClick = () => {
        if (connected) {
          setShowDrawer(true);
        } else {
          setShowPopup(true);
        }
    }
  return (
    <div className={`flex items-center justify-center rounded-md min-w-fit max-w-fit flex-grow-1 border-[#525f6b] border-[1px] ${connected?'':'bg-[#0054FA]'}`}>
        <button className='cursor-pointer items-center flex gap-x-2 px-4 py-1' onClick={handleClick}>
          {connected?<User className='w-[26px] h-[26px]'/>:""}
          <span className='text-nowrap hidden  tablet-sm:inline-block font-semibold text-[14px] laptop:text-[16px] desktop:text-[14px] desktop-lg:[16px]'>{connected?shortenAddress(wallet!):"Connect Wallet"}</span>
          <span className={` ${connected?'hidden':''} tablet-sm:hidden font-semibold text-[14px]`}>Connect</span>
        </button>
        {showPopup && <ConnectWalletPopup onClose={() => setShowPopup(false)} />}
        {showDrawer && <WalletDrawer onClose={() => setShowDrawer(false)} />}
    </div>
  )
}

export default ConnectButton;