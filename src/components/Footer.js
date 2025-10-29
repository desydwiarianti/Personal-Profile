import React from 'react';
import loveIcon from '../assets/images/love.png';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="py-6 sm:py-8 px-4 sm:px-6"
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid #E5E7EB',
        minHeight: '84px'
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center items-center">
          <p 
            className="text-center flex flex-wrap items-center justify-center gap-1 text-xs sm:text-sm"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '400',
              lineHeight: '1.5',
              color: '#5A5F73'
            }}
          >
            <span className="whitespace-nowrap">© {currentYear} Desy Dwi Arianti.</span>
            <span className="flex items-center gap-1 whitespace-nowrap">
              Crafted with
              <img 
                src={loveIcon}
                alt="love"
                className="inline-block w-3 h-3 sm:w-4 sm:h-4 object-contain"
              />
              in Surabaya.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
