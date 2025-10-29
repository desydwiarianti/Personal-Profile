import React from 'react';
import profilePhoto from '../assets/images/4204 edit 3x4.png';
import instagramIcon from '../assets/images/instagram.png';
import githubIcon from '../assets/images/github.png';
import linkedinIcon from '../assets/images/linkedin.png';

function ProfileCard() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center section-padding pt-32"
      style={{
        background: 'linear-gradient(90deg, #E0EAFE 0%, #F9E5FF 100%)',
        minHeight: '699px'
      }}
    >
      <div className="container mx-auto max-w-6xl px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Hello I'm */}
            <p 
              className="text-purple-600 font-medium"
              style={{
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '20px',
                letterSpacing: '0%'
              }}
            >
              Hello, I'm Desy Dwi Arianti
            </p>
            
            {/* Name & Title - ExtraBold */}
            <h1 
              className="text-gray-900 font-extrabold"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '48px',
                fontWeight: '800',
                lineHeight: '48px',
                letterSpacing: '0%',
                maxWidth: '497px'
              }}
            >
              Creative Designer &
              Frontend Developer <br />
            </h1>
            
            {/* Description - Gray */}
            <p 
              className="text-gray-600"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '18px',
                letterSpacing: '0%',
                maxWidth: '446px',
                color: '#5A5F73'
              }}
            >
              Blending design and code to bring ideas to life. 
              I create interfaces that look beautiful and feel effortless to use. I'm passionate about turning concepts into meaningful digital experiences that inspire and engage users.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* See My Work Button */}
              <a 
                href="#portfolio" 
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
                style={{
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  paddingLeft: '24px',
                  paddingRight: '24px',
                  borderRadius: '12px',
                  minWidth: '152px',
                  height: '50px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '100%',
                    letterSpacing: '0%'
                  }}
                >
                  See My Work
                </span>
              </a>
              
              {/* Contact Me Button */}
              <a 
                href="#contact" 
                className="bg-white text-purple-600 border border-purple-300 hover:bg-purple-50 transition-all duration-300 flex items-center justify-center"
                style={{
                  paddingTop: '13px',
                  paddingBottom: '13px',
                  paddingLeft: '25px',
                  paddingRight: '25px',
                  borderRadius: '12px',
                  borderWidth: '1px',
                  minWidth: '144px',
                  height: '50px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '100%',
                    letterSpacing: '0%'
                  }}
                >
                  Contact Me
                </span>
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 pt-6">
              {/* Instagram */}
              <a 
                href="https://instagram.com/desydwia_" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 hover:bg-purple-600 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <img 
                  src={instagramIcon} 
                  alt="Instagram" 
                  className="w-6 h-6 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                />
              </a>
              
              {/* GitHub */}
              <a 
                href="https://github.com/desydwiarianti" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 hover:bg-purple-600 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <img 
                  src={githubIcon} 
                  alt="GitHub" 
                  className="w-6 h-6 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                />
              </a>
              
              {/* LinkedIn */}
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 hover:bg-purple-600 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <img 
                  src={linkedinIcon} 
                  alt="LinkedIn" 
                  className="w-6 h-6 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                />
              </a>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative" style={{ width: '256px', height: '256px' }}>
              {/* Gradient Circle Background */}
              <div 
                className="absolute bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"
                style={{
                  width: '192px',
                  height: '192px',
                  opacity: '0.2',
                  top: '-24px',
                  left: '-24px',
                  borderRadius: '9999px'
                }}
              ></div>
              
              {/* Profile Image */}
              <img 
                src={profilePhoto}
                alt="Desy Dwi Arianti Profile"
                className="relative rounded-full object-cover border-8 border-white shadow-2xl"
                style={{
                  width: '256px',
                  height: '256px',
                  borderRadius: '9999px'
                }}
              />
              
              {/* Sparkle Icon */}
              <div 
                className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-xl"
                style={{
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
