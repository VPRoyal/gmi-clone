import React from 'react'

const items =["Collections", "Portfolio", "Activity", "Airdrop", "Launchpad", "Resources"]
const NavItems = () => {
  return (
        <ul className='tablet:flex items-center list-none hidden '>
          {items.map((item, index) => (<li key={index} className=" px-2 py-1 font-bold cursor-pointer hover:text-gray-300 text-[12px] tablet-text-[14px] laptop:text-[16px] desktop:text-[14px] desktop-lg:text-[16px] ">{item}</li>))}
        </ul>
  )
}

export default NavItems

// Collections
// Portfolio
// Activity
// Airdrop
// Launchpad
// Resources