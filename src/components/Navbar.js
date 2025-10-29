import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      {/* Container with responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo - My Profile with responsive size */}
          <a 
            href="#home" 
            className="text-xl sm:text-2xl font-bold text-gray-900"
            style={{ 
              fontWeight: '700',
              lineHeight: '28px'
            }}
          >
            My Profile
          </a>

          {/* Desktop Menu - Center (hidden on mobile & tablet) */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-900 font-medium transition-colors duration-300 hover:text-purple-600 text-sm lg:text-base"
                style={{
                  fontWeight: '500',
                  lineHeight: '24px'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Hire Me Button - Right (hidden on mobile & tablet) */}
          <div className="hidden lg:flex">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm lg:text-base"
              style={{
                fontWeight: '600',
                lineHeight: '24px'
              }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button (visible on mobile & tablet only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-900 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu with responsive spacing */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-3 sm:py-4 space-y-2 sm:space-y-3 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-900 font-medium py-2 hover:text-purple-600 transition-colors duration-300 text-sm sm:text-base"
                style={{
                  fontWeight: '500',
                  lineHeight: '24px'
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-center hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              style={{
                fontWeight: '600',
                lineHeight: '24px'
              }}
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
