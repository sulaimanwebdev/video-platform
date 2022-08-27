
import { useState, useEffect } from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from './Pages/Home';
import Login from "./Pages/Login";
import SingleCourse from "./Pages/Single-course";
import SingleVideo from "./Pages/Single-video";

import { useWeb3React } from "@web3-react/core"
import { injected } from "./Components/connectors"
function App() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
      localStorage.setItem('isWalletConnected', true)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
      localStorage.setItem('isWalletConnected', false)
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected)
          localStorage.setItem('isWalletConnected', true)
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    // connectWalletOnPageLoad()
  }, [])


  return (
   <>
     <BrowserRouter>
    
     <Header account={account} active={active}/>
     <Routes>
      <Route path="/" element={<Login connect={connect}/>} />

      {/* bottom routes should be protected */}
      <Route path="/home" element={<Home account={account}/>} />
      <Route path="/course/:id" element={<SingleCourse/>} />
      <Route path="/course/:course/:category/:id" element={<SingleVideo/>} />
      
    </Routes>

    </BrowserRouter>
   </>
  );
}

export default App;
