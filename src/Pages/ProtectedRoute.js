import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import WhitelistAddresses from '../Whitelist-addresses.json'

const ProtectedRoute = ({Component, account, active}) => {
const navigate = useNavigate();

    useEffect(() => {
         if(active === false){
          navigate('/')
    }

    }, [])

    if(active === false){
      navigate('/')
  }
  
    
        
  return (
    <>
     {active === false ? navigate('/') && ""  : <>{WhitelistAddresses.includes(account) ? <Component/> : <div className='w-full flex items-center justify-center h-[calc(100vh-85px)] px-5'>Sorry you are not eligible</div>}</>}
    </>
  )
}

export default ProtectedRoute