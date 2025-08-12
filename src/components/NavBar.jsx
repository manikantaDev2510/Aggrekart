import React from "react";
import icon from "../assets/logo.jpg";

function NavBar() {
    return (
        <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
            <img src={icon} alt="AggreKart Icon" className="h-15 w-23 object-cover" />

            <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">Shop Materials</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">Sell on AggreKart</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">How It Works</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>

            <div className="flex items-center gap-3">
                <select className="rounded-4xl bg-green-500 hover:bg-green-600 px-5 py-1.5 m-2 text-white  focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Buyer</option>
                </select>
                <select className="rounded-4xl bg-orange-400 hover:bg-amber-500 px-5 py-1.5 m-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Supplier</option>
                </select>
            </div>
        </nav>
    );
}

export default NavBar;




// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../assets/logo.jpg";

// function NavBar() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between relative">
//             {/* Logo */}
//             <img src={logo} alt="AggreKart Logo" className="h-15 w-23 object-cover" />

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center gap-6">
//                 <a href="#" className="text-gray-700 hover:text-blue-600 transition">
//                     Home
//                 </a>
//                 <a href="#" className="text-gray-700 hover:text-blue-600 transition">
//                     Shop Materials
//                 </a>
//                 <a href="#" className="text-gray-700 hover:text-blue-600 transition">
//                     Sell on AggreKart
//                 </a>
//                 <a href="#" className="text-gray-700 hover:text-blue-600 transition">
//                     How It Works
//                 </a>
//                 <a href="#" className="text-gray-700 hover:text-blue-600 transition">
//                     Contact
//                 </a>
//             </div>

//             {/* Buttons */}
//             <div className="hidden md:flex items-center gap-3">
//                 <select className="rounded-full bg-green-500 hover:bg-green-600 px-5 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-green-300">
//                     <option>Buyer</option>
//                 </select>
//                 <select className="rounded-full bg-orange-400 hover:bg-amber-500 px-5 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-orange-300">
//                     <option>Supplier</option>
//                 </select>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 className="md:hidden text-gray-700 text-2xl"
//             >
//                 {menuOpen ? <FaTimes /> : <FaBars />}
//             </button>

//             {/* Mobile Dropdown Menu */}
//             {menuOpen && (
//                 <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 gap-4 md:hidden z-50">
//                     <a href="#" className="text-gray-700 hover:text-blue-600 transition">
//                         Home
//                     </a>
//                     <a href="#" className="text-gray-700 hover:text-blue-600 transition">
//                         Shop Materials
//                     </a>
//                     <a href="#" className="text-gray-700 hover:text-blue-600 transition">
//                         Sell on AggreKart
//                     </a>
//                     <a href="#" className="text-gray-700 hover:text-blue-600 transition">
//                         How It Works
//                     </a>
//                     <a href="#" className="text-gray-700 hover:text-blue-600 transition">
//                         Contact
//                     </a>

//                     {/* Mobile Buttons */}
//                     <div className="flex flex-col gap-3 w-full">
//                         <select className="rounded-full bg-green-500 hover:bg-green-600 px-5 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-green-300">
//                             <option>Buyer</option>
//                         </select>
//                         <select className="rounded-full bg-orange-400 hover:bg-amber-500 px-5 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-orange-300">
//                             <option>Supplier</option>
//                         </select>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// }

// export default NavBar;