import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import aboutPhoto from '../assets/images/4204 edit 3x4.png';
import letsConnectIcon from '../assets/images/lets-connect.png';

function AboutSection() {
  const expertise = [
    { text: 'UI/UX Design' },
    { text: 'Web Development' },
    { text: 'Interaction Design' },
    { text: 'Prototyping' },
  ];
  
  return (
    <section 
      id="about" 
      className="section-padding bg-white"
      style={{
        borderTop: '1px solid #E5E7EB',
        borderBottom: '1px solid #E5E7EB'
      }}
    >
      <div 
        className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16"
        style={{
          maxWidth: '1024px'
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Gradient Background */}
              <div 
                className="absolute bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                  width: '85%',
                  height: '85%',
                  top: '10px',
                  left: '10px'
                }}
              ></div>
              
              {/* Image - Responsive Size */}
              <img 
                src={aboutPhoto}
                alt="Desy Dwi Arianti - About Me"
                className="relative object-cover transform group-hover:scale-105 transition-transform duration-500 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
                style={{
                  borderRadius: '16px',
                  border: '4px solid #E0EAFE',
                  boxShadow: '0px 20px 25px 0px #0000001A, 0px 8px 10px 0px #0000001A'
                }}
              />
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* About Me Heading */}
            <div>
              <h2 
                className="font-bold mb-3 sm:mb-4 text-2xl sm:text-3xl"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  color: '#232946'
                }}
              >
                About Me
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
            </div>
            
            {/* Description */}
            <p 
              className="leading-relaxed text-sm sm:text-base md:text-lg"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '400',
                lineHeight: '1.6',
                color: '#5A5F73',
                maxWidth: '454px'
              }}
            >
              Hi! I'm <span className="font-semibold text-purple-600">Desy</span>, 
              a creative designer and frontend developer based in Surabaya, Indonesia. With a passion for blending design and technology, I craft digital experiences that are visually engaging, intuitive, and meaningful.
            </p>
            
            {/* Expertise Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-2 sm:pt-4">
              {expertise.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 rounded-lg transition-all duration-300 hover:shadow-md"
                  style={{
                    padding: '8px 12px',
                    background: '#F0E7FF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    boxShadow: '0px 2px 4px 0px #0000001A'
                  }}
                >
                  <FaCheckCircle 
                    className="flex-shrink-0" 
                    style={{ 
                      color: '#7755FF',
                      fontSize: '14px'
                    }} 
                  />
                  <span 
                    className="font-semibold text-xs sm:text-sm"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '600',
                      lineHeight: '100%',
                      color: '#7755FF'
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Let's Connect Button - Icon di KIRI */}
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105 mt-4 sm:mt-6 md:mt-8 w-full sm:w-auto text-sm sm:text-base"
              style={{
                background: 'linear-gradient(90deg, #7755FF 0%, #FF54B0 100%)',
                maxWidth: '464px',
                height: '48px',
                borderRadius: '12px',
                border: '1px solid #E5E7EB',
                boxShadow: '0px 4px 6px 0px #0000001A',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '600',
                padding: '0 20px'
              }}
            >
              {/* Icon Text */}
              <img 
                src={letsConnectIcon} 
                alt="Connect" 
                className="w-4 h-4 sm:w-5 sm:h-5 object-contain brightness-0 invert"
              />
              <span>Let's Connect</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
