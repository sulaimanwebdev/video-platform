import React, { useState, useEffect } from "react";

const Login = ({connect}) => {
  return (
    <>
    <div className="px-5 h-[calc(100vh-84px)] w-full flex items-center justify-center gap-8 flex-col">
    <div className='font-bold text-[39px]'>Logo</div>
    <button onClick={connect} className='rounded-md text-white bg-yellow-500 transition hover:bg-yellow-600 px-7 py-3 font-[600]'>Connect Wallet</button>
    </div>
    </>
  )
}

export default Login