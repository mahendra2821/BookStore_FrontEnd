import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black text-white shadow-lg transition-all">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-sm font-bold flex items-center transition-all hover:opacity-80">
          <span className="bg-white text-black px-3 py-1 rounded-full">MB</span>
          <span className="ml-2 text-yellow-400 font-serif">Book Store</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="transition-all text-white hover:bg-gray-800 hover:bg-opacity-40 rounded px-4 py-2">
            Home
          </Link>
          <Link to="/books" className="transition-all text-white hover:bg-gray-800 hover:bg-opacity-40 rounded px-4 py-2">
            Books
          </Link>
          <Link to="/about" className="transition-all text-white hover:bg-gray-800 hover:bg-opacity-40 rounded px-4 py-2">
            About Us
          </Link>
          <Link to="/contact" className="transition-all text-white hover:bg-gray-800 hover:bg-opacity-40 rounded px-4 py-2">
            Contact
          </Link>
          
         

          {/* User and Admin Buttons */}
          <Link to="/usersignup">
            <button className="transition-all bg-black text-white hover:bg-gray-700 border-2 border-white hover:border-gray-700 rounded px-4 py-2">
              User SignUp
            </button>
          </Link>
          <Link to="/adminrules">
            <button className="transition-all bg-black text-white hover:bg-gray-700 border-2 border-white hover:border-gray-700 rounded px-4 py-2">
              Admin SignUp
            </button>
          </Link>

          {/* Cart Icon */}
          <Link to="/cartpage">
            <button className="relative p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.6 8m10.6-8l1.6 8m-9 0h8"
                  />
                </svg>
              </div>
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-black bg-opacity-90 shadow-md transition-all duration-500 ease-in-out transform ${
          isMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-full invisible"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4 py-4">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="transition-all text-white hover:bg-gray-800 hover:bg-opacity-40 rounded px-4 py-2">
            Home
          </Link>
          <Link to="/books" onClick={() => setIsMenuOpen(false)} className="transition-all text-white hover:bg-gray-800 hover:bg-opacity-40 rounded px-4 py-2">
            Books
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="transition-all text-white hover:bg-gray-800 hover:bg-opacity-40 rounded px-4 py-2">
            About Us
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="transition-all text-white hover:bg-gray-800 hover:bg-opacity-40 rounded px-4 py-2">
            Contact
          </Link>


       

          {/* User and Admin Buttons */}
          <Link to="/usersignup" onClick={() => setIsMenuOpen(false)}>
            <button className="transition-all bg-black text-white hover:bg-gray-700 border-2 border-white hover:border-gray-700 rounded-full px-6 py-3 shadow-md hover:shadow-lg">
              User SignUp
            </button>
          </Link>
          <Link to="/adminrules" onClick={() => setIsMenuOpen(false)}>
            <button className="transition-all bg-black text-white hover:bg-gray-700 border-2 border-white hover:border-gray-700 rounded-full px-6 py-3 shadow-md hover:shadow-lg">
              Admin SignUp
            </button>
          </Link>

          {/* Cart Button */}
          <Link to="/cartpage" onClick={() => setIsMenuOpen(false)} className="transition-all text-white hover:bg-gray-800 hover:bg-opacity-40 rounded px-4 py-2">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


// import React , {useState} from 'react';

// import {Link} from "react-router-dom";

//  function Header() { 

//     const [isMenuOpen , setIsMenuOpen] = useState(false) 


//    return (
//     <header className='fixed top-0 w-full z-50 bg-[#10265c] text-white shadow-lg transition-all'>
//         <div className="container mx-auto px-4 py-3 flex justify-between items-center">

//             <Link to="/" className='text-2xl font-bold transition-all hover:opacity-80'>
//             Book Store
//             </Link>
//             <nav className="hidden md:flex space-x-8">
//                 <Link to="/" className='transition-all text-white hover:bg-white hover:bg-opacity-20 rounded px-4 py-2'>
//                 Home
//                 </Link>
//                 <Link to="/books" className='transition-all text-white hover:bg-white hover:bg-opacity-20 rounded px-4 py-2'>
//                 Books
//                 </Link>
//                 <Link to="/about" className='transition-all text-white hover:bg-white hover:bg-opacity-20 rounded px-4 py-2'>
//                 About
//                 </Link>
//                 <Link to="/contact" className='transition-all text-white hover:bg-white hover:bg-opacity-20 rounded px-4 py-2'>
//                 Contact
//                 </Link>
//             </nav>

//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='block md:hidden text-white text-2xl'>
//             ☰
//             </button>

        
//         </div>
//         <div className={`absolute top-full left-0 w-full bg-indigo-600 bg-opacity-90 shadow-md transition-all duration-500 ease-in-out transform ${isMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-full invisible"}`}>
//             <nav className='flex flex-col space-y-4 px-4 py-4'>
//                 <Link to="/" onClick={() => setIsMenuOpen(false)} 
//                 className='transition-all text-white hover:bg-opacity-20 rounded px-4 py-2'>
//                     Home
//                 </Link>
//                 <Link to="/books" onClick={() => setIsMenuOpen(false)} 
//                 className='transition-all text-white hover:bg-opacity-20 rounded px-4 py-2'>
//                     Books
//                 </Link>
//                 <Link to="/about" onClick={() => setIsMenuOpen(false)} 
//                 className='transition-all text-white hover:bg-opacity-20 rounded px-4 py-2'>
//                     About Us
//                 </Link>
//                 <Link to="/contact" onClick={() => setIsMenuOpen(false)} 
//                 className='transition-all text-white hover:bg-opacity-20 rounded px-4 py-2'>
//                     Contact
//                 </Link>
//             </nav>
//         </div>

//     </header>

  
//    )
//  }
 
//  export default Header



