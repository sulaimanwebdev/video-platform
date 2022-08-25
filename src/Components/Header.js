import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
     <div className="bg-white border-b-2 border-yellow-500 w-full py-4">
       <div className="px-5 mx-auto max-w-[1350px] flex items-center justify-between">
       <div><Link to='/'><div className='font-bold text-[29px]'>Logo</div></Link></div>
       <div><button className='rounded-md text-white bg-yellow-500 transition hover:bg-yellow-600 px-7 py-3 font-[600]'>Connect Wallet</button></div>
       </div>
     </div>
    </>
  )
}

export default Header