
"use client";
import React, { useState, useEffect } from "react";
import { initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
// Knowledge about Ether.js https://docs.ethers.org/v6/getting-started/
import { ethers } from "ethers";
import { formatEther, parseUnits } from "ethers";
import abi from "./abi.json";
import Poke from "./components/Poke"

const [ metaMask , hooks ] = initializeConnector((actions) => new MetaMask({ actions }))
const { useChainId , useAccounts, useIsActivating , useIsActive , useProvider } = hooks
const contractChain = 11155111 
const contractAddress = '0xfA8586F464D059E23bcd6F60F55295232769b8f9'

export default function Home() {
  const chainId = useChainId()
  const accounts = useAccounts()
  const isActive = useIsActive()
  const provider = useProvider()
  const [error, setError] = useState(undefined)

    //เชือ่มต่อ
    const handleConnect = () => {
      metaMask.activate(contractChain)
    }
    //ยกเลิกการเชื่อมต่อ
    const handleDisconnect = () => {
      metaMask.resetState()
    }
  
    const [ balance , setBalance ] = useState("") 
    useEffect (() => {
      const fetchBalance = async () => {
        const signer = provider.getSigner()
        const smartContract = new ethers.Contract( contractAddress, abi , signer )
        const myBalance = await smartContract.balanceOf(accounts[0])
        console.log(formatEther(myBalance));
        setBalance(formatEther(myBalance))
        
      }
      if (isActive) {
        fetchBalance()
      }
    },[isActive])
  
  
    
    const [aonValue, setAonValue] = useState(0);
  
    const handleSetAonValue = event => {
      setAonValue(event.target.value);
    };
  
    const handleBuy = async () => {
      try {
        if (aonValue <= 0) {
          return;
        }
  
        const signer = provider.getSigner();
        const smartContract = new ethers.Contract(contractAddress, abi, signer);
        const buyValue = parseUnits(aonValue.toString(), "ether");
        const tx = await smartContract.buy({
          value: buyValue.toString(),
        });
        console.log("Transaction hash:", tx.hash);
      } catch (err) {
        console.log(err);
      }
    };


  useEffect(() => {
    void metaMask.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to metamask')
    })
  }, [])



  return (
    <>
      <div class="navbar bg-neutral text-neutral-content">
        <div className="navbar-start ">
          <a className="btn btn-ghost text-xl ">
            My Wallet
          </a>
        </div>
        <div className="navbar-center outline outline-2 outline-neutral-content rounded-full p-2">
          <span className="text-base-300 px-3">Accounts : {accounts ? accounts[0] : ''}</span>
        </div>
        <div className="navbar-end flex-3">
          {isActive ?
            <button className="btn btn-ghost text-error" type='button' onClick={handleDisconnect} value={'Disconnect'}>Disconnect</button>
            :
            <button className="btn btn-ghost" type='button' onClick={handleConnect} value={'Connect'}>Connect</button>
          }
        </div>
      </div>
      {isActive && (
        <div className="mt-5 flex justify-center items-center text-center drop-shadow-lg ">
          <div className="card w-[90vh] bg-base-100 shadow-lg items-center drop-shadow border"> 
            <div className="card-body ">
              <Poke handleBuy={handleBuy} handleSetAonValue={handleSetAonValue} />
            </div>
          </div>
        </div>
      )}
      {!isActive && (
        <div className=" h-[91vh]">
          <div className="container mx-auto h-[70vh] flex justify-center items-center py-8">
            <p className="text-3xl">Please connect To MetaMask!!</p>
          </div>
        </div>
      )}
    </>
  );
}
