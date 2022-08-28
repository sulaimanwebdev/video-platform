import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({connect, active}) => {
  const navigate = useNavigate();

  useEffect(() => {
       if(active === true){
        navigate('/home')
  }

       
  }, [])

  if(active === true){
    navigate('/home')
}

  

  return (
    <>
    {
      active === true ? "" : 
      <div className="px-5 min-h-[calc(100vh-84px)] w-full flex items-center justify-center gap-8 flex-col  py-10">
      <div className='font-bold text-[39px]'>Logo</div>
      <button onClick={connect} className='rounded-md text-white bg-yellow-500 transition hover:bg-yellow-600 px-7 py-3 font-[600]'>Connect Wallet</button>
      </div>
    }
    
    </>
  )
}

export default Login