'use client';

import { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import Hamburger from 'hamburger-react';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 py-4 px-6  border-b-[1px] border-white bg-black/20 backdrop-blur-sm flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="relative z-50 p-3 rounded-md" aria-label="Clearwater Designs Home">
        <h1 className="text-2xl font-bold text-white">Clearwater Designs</h1>
      </Link>

      {/* Hamburger Menu Icon */}
      <div className="relative z-50 p-2 rounded-md">
        <Hamburger 
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
          size={24}
          label="Toggle menu"
          hideOutline={false}
          color="#FFFFFF"
        />
      </div>

      {/* Animated Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y:-60 }}
            animate={{ 
              opacity: 1, 
              y: -60,
              transition: { 
                duration: .7, 
                ease: [0.4, 0, 0.2, 1],
              }
            }}
            exit={{ 
              opacity: 0, 

              transition: { 
                duration: .7, 
                ease: [0.4, 0, 0.2, 1], 
              }
            }}
            className="fixed inset-0 flex md:flex-row flex-col h-screen mt-[60px] w-screen bg-black z-40"
          >
<div className='md:w-[55vw] md:h-full h-[55vh] bg-red-500 px-6 pt-24 w-full'>

            <div className="flex flex-col space-y-6 text-2xl">
              <Link 
                href="/" 
                className="text-white hover:text-blue-600 transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-blue-600 transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="text-white hover:text-blue-600 transition-colors"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link 
                href="/portfolio" 
                className="text-white hover:text-blue-600 transition-colors"
                onClick={closeMenu}
              >
                Portfolio
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-blue-600 transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div></div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
