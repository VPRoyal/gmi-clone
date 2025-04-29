import React from 'react'
import NavItems from './navItems'
import Logo from './logo'
import Search from './search'
import TokenButton from './tokenButton'
import ConnectButton from './connectButton'
import { WalletProvider } from '@/context/walletContext'
const Navbar = () => {
  return (
    <div className='flex items-center bg-[#141619] text-white h-fit px-[12.8px] py-2 border-b gap-x-5 border-[#2e333a]'>
        <Logo />
        <NavItems />
        <Search />
        <TokenButton />
        <WalletProvider>
        <ConnectButton />
        </WalletProvider>
    </div>
  )
}

export default Navbar