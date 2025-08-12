import React from "react";

function Home() {
    return (
        <div className="h-[80vh] w-full bg-gray-500 flex items-center">
            <div className="max-w-4xl px-8">
                <h1 className="text-white text-5xl font-bold leading-tight">
                    Your One-Stop <br />
                    Marketplace for <br />
                    Construction Materials
                </h1>
                <p className="text-gray-200 mt-4 text-lg">
                    Connect with trusted suppliers. Buy smarter, build faster.
                </p>
                <div className="mt-6 flex gap-4">
                    <button className="bg-orange-400 hover:bg-orange-500 text-black font-medium px-6 py-2 rounded">
                        Shop Now
                    </button>
                    <button className="border border-white text-white font-medium px-6 py-2 rounded hover:bg-white hover:text-gray-800">
                        Sell on AggreKart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;