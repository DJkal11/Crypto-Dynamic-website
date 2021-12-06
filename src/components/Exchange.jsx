import React from "react";

function Exchange() {
    return (
        <div className="-ml-96 h-screen transitionPage welcome-mobile">
        <div className="grid grid-cols-2">
        <button className="mt-10 w-36 p-2 hover:bg-purple-400  border-purple-500 border-2 rounded-3xl font-bold">Let's Talk</button>
        </div>
         
         <div className="grid grid-cols-2 grid-mobile"> 
        
        <div className=" mt-40 w-96 h-96 overflow-hidden dont-display">
            <img src="/crypto-portfolio.svg" alt="#" />
        </div>

        <div className="mt-10">
          <h3 className="font-bold text-gray-400">Exchange</h3>
          <h1 className="text-7xl  font-bold pt-2 ">Buy and sell more</h1>
          <p className="p-10 pb-4 pl-0 text-2xl">We have a big crypto portfolio and we add one new crypto every 15 days.</p>
          <br/>
        
          <button className=" p-3 w-40 hover:bg-gray-300 hover:text-black  bg-black text-white rounded-lg">Know more</button>
        </div>

        </div>
       
    </div>
    )
}

export default Exchange;