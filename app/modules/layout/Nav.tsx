'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hamburger from 'hamburger-react';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const links = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'Portfolio',
      href: '/portfolio',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
    
  ];
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-100 py-4 px-6 flex items-center justify-between transition-all duration-1000 ${
      isScrolled ? 'bg-black/20' : 'bg-transparent'
    }`}>
      {/* Logo */}
      <Link href="/" className="relative z-50 p-3 rounded-md" aria-label="Clearwater Designs Home">
        <h1 className={`font-bold text-white transition-all duration-1000 ${
          isScrolled ? 'text-2xl' : 'text-4xl'
        }`}>Logo</h1>
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
<div className='md:w-[55vw] md:h-full h-[55vh] relative  px-6 pt-24 w-full'>
<Image src="https://jrdisplays.s3.us-east-1.amazonaws.com/cta/family-cinema-room-new-wave-av-img~fdc1eca005d71adf_14-3477-1-ef14b1d.jpg" alt="nav-bg" fill className='absolute top-0 left-0 w-full z-[-10] h-full border-r-[1px] border-white object-cover object-center' />
            <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10' />
            <div className="flex flex-col space-y-6  text-2xl">
              {links.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href} 
                  className="text-white hover:text-blue-600 transition-colors z-[100]"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              
            </div></div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
