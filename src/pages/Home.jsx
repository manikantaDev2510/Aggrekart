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



// import React from "react";

// function Home() {
//   return (
//     <section className="relative h-[80vh] w-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 flex items-center">
//       {/* Content */}
//       <div className="max-w-5xl px-8 md:px-16">
//         <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
//           Your One-Stop <br className="hidden md:block" />
//           Marketplace for <br className="hidden md:block" />
//           Construction Materials
//         </h1>
//         <p className="text-gray-200 mt-4 text-base md:text-lg max-w-xl">
//           Connect with trusted suppliers. Buy smarter, build faster.
//         </p>
//         <div className="mt-6 flex flex-wrap gap-4">
//           <button className="bg-orange-400 hover:bg-orange-500 text-black font-semibold px-6 py-2 rounded-full shadow-md transition-transform transform hover:scale-105">
//             Shop Now
//           </button>
//           <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-gray-800 transition-transform transform hover:scale-105">
//             Sell on AggreKart
//           </button>
//         </div>
//       </div>

//       {/* Optional background overlay */}
//       <div className="absolute inset-0 bg-black/30" />
//     </section>
//   );
// }

// export default Home;