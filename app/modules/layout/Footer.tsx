'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  { name: 'Interior Design', href: '/services/interior-design' },
  { name: 'Exterior Design', href: '/services/exterior-design' },
  { name: 'Kitchen & Bath', href: '/services/kitchen-bath' },
  { name: 'Commercial Spaces', href: '/services/commercial' },
  { name: 'Landscape Design', href: '/services/landscape' },
];

const contactInfo = [
  { type: 'Email', value: 'info@clearwaterdesigns.com' },
  { type: 'Phone', value: '(555) 123-4567' },
  { type: 'Hours', value: 'Mon-Fri: 9AM-5PM' },
];

// Animated wave SVG component
const WaveAnimation = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.div 
      className="w-full h-[50vh] overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 100 
      }}
      transition={{ duration: 0.8, ease: [0.46, 0.14, 0.15, 0.86] }}
    >
      <svg className="absolute bottom-0 left-0 w-full h-full" 
        viewBox="0 0 1440 320" 
        xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          initial={{ x: -1440 }}
          animate={{ x: 0 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
          fill="#f1f5f9"
          d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,197.3C672,213,768,203,864,170.7C960,139,1056,85,1152,74.7C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </motion.path>
        <motion.path 
          initial={{ x: 0 }}
          animate={{ x: 1440 }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear"
          }}
          fill="#e2e8f0"
          d="M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,266.7C672,288,768,288,864,272C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </motion.path>
      </svg>
    </motion.div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLDivElement>(null);
  const [showWaves, setShowWaves] = useState(false);
  
  // Set up scroll event listener for showing waves only
  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      
      // Get footer position
      const footerRect = footerRef.current.getBoundingClientRect();
      
      // Show waves if scrolled a certain amount past footer top
      if (footerRect.top <= 0) {
        const scrolledPastFooterTop = Math.abs(footerRect.top);
        setShowWaves(scrolledPastFooterTop > window.innerHeight * 0.3);
      } else {
        setShowWaves(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Footer wrapper with full height for sticky positioning */}
      <footer 
        ref={footerRef}
        className="sticky top-0 h-screen w-screen bg-slate-50 z-40"
      >
        <div className="container mx-auto px-6 h-full flex flex-col">
          <div className="flex-grow pt-16">
            {/* Main footer content - 3 columns on large screens, 1 on small */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Left column - Services */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-6 text-slate-800">Our Services</h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link href={service.href} className="text-slate-600 hover:text-blue-600 transition-colors">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/*5/6/25*/}
              {/* Middle column - Contact Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-6 text-slate-800">Contact Us</h3>
                <ul className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <li key={index} className="text-slate-600">
                      <span className="font-semibold">{item.type}: </span>{item.value}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <h4 className="font-semibold mb-2 text-slate-800">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" aria-label="Facebook" className="text-slate-600 hover:text-blue-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" aria-label="Instagram" className="text-slate-600 hover:text-pink-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" aria-label="Twitter" className="text-slate-600 hover:text-blue-400">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Right column - Company Info (expands on hover) */}
              <motion.div 
                className="space-y-4"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="text-xl font-bold mb-6 text-slate-800">Clearwater Designs</h3>
                <div className="flex items-center mb-4">
                  {/* Replace with your actual logo */}
                  <div className="w-12 h-12 bg-blue-600 rounded-full mr-3 flex items-center justify-center text-white font-bold">
                    CD
                  </div>
                  <span className="text-lg font-semibold text-slate-800">Clearwater Designs</span>
                </div>
                <address className="not-italic text-slate-600 leading-relaxed">
                  123 Design Avenue<br />
                  Creative District<br />
                  New York, NY 10001<br />
                  United States
                </address>
              </motion.div>
            </div>
          </div>
          
          {/* Wave animation and copyright section */}
          <div className="relative mt-auto">
            {/* Only show waves when scrolled enough */}
            {showWaves && <WaveAnimation isVisible={showWaves} />}
            
            <div className="container mx-auto px-6 pb-8 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center">
                  <span className="text-xs text-slate-600">
                    Built by 
                    <a href="#" className="font-medium mx-1 hover:text-blue-600 transition-colors">
                      WebStudio
                    </a>
                  </span>
                  <div className="w-5 h-5 rounded-full bg-slate-800 ml-2 flex items-center justify-center text-white text-xs">
                    W
                  </div>
                </div>
                
                <div className="flex space-x-4 text-xs text-slate-600">
                  <Link href="/sitemap" className="hover:text-blue-600 transition-colors">
                    Sitemap
                  </Link>
                  <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                    Privacy
                  </Link>
                  <Link href="/terms" className="hover:text-blue-600 transition-colors">
                    Terms
                  </Link>
                </div>
                
                <div className="text-xs text-slate-600">
                  &copy; {currentYear} Clearwater Designs. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Extra space to allow scrolling past the footer */}
      <div className="h-screen w-full" />
    </div>
  );
};

export default Footer;
