import React from 'react'
import { ApeChainLogo } from '../ui/logo'
const TokenButton = () => {
  return (
    <div className='flex items-center justify-center min-w-12 h-9.5 rounded-md bg-[#0054FA] cursor-pointer'>
      <ApeChainLogo className=' fill-white w-7 h-7'/>
        {/* <svg viewBox="0 0 24 24" className='w-7 h-7 fill-white' xmlns="http://www.w3.org/2000/svg"><path d="M12.0026 3.80005L17 8.86449L12.0004 13.9259L10.0002 11.9013L13.0002 8.86449L12.0004 7.85199L8.00009 11.9013L12.0004 15.9507L18.0002 9.87651L20 11.9013L12.0004 20L4 11.9013L12.0026 3.80005Z"></path></svg> */}
    </div>
  )
}

export default TokenButton