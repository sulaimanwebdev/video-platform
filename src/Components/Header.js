import React from 'react'
import {Link} from 'react-router-dom'

const Header = ({account, active}) => {
  return (
    <>
     <div className="bg-white border-b-2 border-yellow-500 w-full">
       <div className="px-5 mx-auto max-w-[1350px] flex items-center justify-between h-[82px]">
       <div><Link to='/'><div className='font-bold text-[29px]'>Logo</div></Link></div>
       <div className="flex items-center bg-gray-100 rounded-full pr-3 gap-3">
       <div className="w-[55px] h-[55px] rounded-full flex items-center justify-center overflow-hidden"><img src="/images/avatar.png" alt="avatar" /></div>
        <div className=" rounded-md py-3">{active ? <span>{account.slice(0, 6)}...</span> : "..."}</div>
       </div>
       </div>
     </div>
    </>
  )
}

export default Header