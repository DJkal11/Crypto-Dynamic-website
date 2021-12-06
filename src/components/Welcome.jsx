import React from "react";

function Welcome() {
    return (
        <div className="-ml-96 h-screen transitionPage welcome-mobile">
            <div className="grid grid-cols-2">
            <h1 className="mt-10 font-bold">Welcome Back</h1>
            <button className="mt-8 w-36 p-2 hover:bg-purple-400 border-purple-500 border-2 rounded-3xl font-bold">Let's Talk</button>
            </div>

            <div className="">
              <h3 className="font-bold text-gray-400">Your CryptoBank for</h3>
              <h1 className="text-5xl text-purple-500 font-bold pt-2">Buy + 70</h1>
              <br/>
              <hr className="text-purple-500 break w-52 "/>
              <button className="mt-10 p-3 w-40 bg-black hover:bg-gray-300 hover:text-black  text-white rounded-lg">▶︎ Watch video</button>
            </div>

            <div className=" mt-10 w-96 h-96 overflow-hidden">
                <img src="/credit-card.svg" alt="#" />
            </div>
           
        </div>
    )
}

export default Welcome;