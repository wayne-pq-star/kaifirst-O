
import React from 'react';
import { NavItem } from '../types';

interface NavbarProps {
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/90 text-black border-b border-zinc-100 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="block">
          <img 
            src="https://res.cloudinary.com/dihkqwd43/image/upload/v1772283159/LOGO-768-21-%E8%AA%BF%E6%95%B4_%E5%BE%AE%E8%AA%BF%E9%BB%9E_-2_r786nb.png" 
            alt="ARCH STUDIO" 
            className="h-12 w-auto object-contain" 
            width={180}
            height={48}
            loading="eager"
            // @ts-ignore
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium tracking-[0.2em] hover:opacity-50 transition-opacity"
            >
              {item.label}
            </a>
          ))}
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4 pl-4 border-l border-zinc-200">
            <a 
              href="https://www.youtube.com/@TheWayneFang" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-50 transition-opacity"
              aria-label="YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/KaiFirstDesign/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-50 transition-opacity"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/w6988215/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-50 transition-opacity"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://www.threads.net/@w6988215" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-50 transition-opacity"
              aria-label="Threads"
            >
              {/* Threads Icon (At Sign style) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 flex flex-col items-start bg-white text-black">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium tracking-[0.2em] w-full py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
