import React from "react";

function Cryptobank() {
    return (
        <div className="-ml-96 display h-screen transitionPage">
            <div className="grid grid-cols-2">
            <h1 className="mt-10">Welcome Back</h1>
            <button className="mt-10 w-36 p-2 border-purple-500 border-2 rounded-3xl font-bold">Let's Talk</button>
            </div>
             
             <div className="grid grid-cols-2"> 
            <div className="mt-10">
              <h3 className="font-bold text-gray-400">CryptoBank</h3>
              <h1 className="text-7xl  font-bold pt-2 ">Card with<br/> up to 5% Cashback</h1>
              <br/>
              <p className="p-10 pb-4 pl-0 text-2xl">Start to use your crypto in your daily basis.</p>
              <button className="mt-10 p-3 w-40 bg-black text-white rounded-lg">Get started</button>
            </div>

            <div className=" mt-40 w-96 h-96 overflow-hidden">
                <img src="/mobile-pay.svg" alt="#" />
            </div>
            </div>
           
        </div>
    )
}

export default Cryptobank;