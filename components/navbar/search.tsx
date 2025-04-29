import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
const Search = () => {
  return (
    <div className='max-w-150 w-auto flex-grow'>
        <div className='flex items-center rounded-md border h-9 desktop:h-7.5 desktop-lg:h-9 border-gray-500 pl-3.5 gap-x-4 text-gray-400'>
        <MagnifyingGlassIcon className=" w-6 h-6" />
        <input
            type="text"
            placeholder="Search"
            className="w-full text-[14px] focus:outline-none placeholder:text-gray-500"
          />
        </div>
        <div></div>
    </div>
  )
}

export default Search

// bg-[#2e333a] text-white px-3 py-2 rounded-md border border-[#2e333a] focus:border-gray-500 focus:outline-none