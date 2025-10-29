import React, { useState } from 'react';
import emailIcon from '../assets/images/email.png';
import telpIcon from '../assets/images/telp.png';
import instagramIcon from '../assets/images/instagram.png';
import dribbbleIcon from '../assets/images/dribble.png';
import githubIcon from '../assets/images/github.png';
import linkedinIcon from '../assets/images/linkedin.png';
import sendIcon from '../assets/images/lets-connect.png';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };
  
  const contactInfo = [
    {
      icon: emailIcon,
      label: 'Email',
      value: 'desydwiarianti@gmail.com',
      color: 'bg-pink-600'
    },
    {
      icon: telpIcon,
      label: 'Phone',
      value: '+62 831002601277',
      color: 'bg-pink-600'
    }
  ];
  
  const socialMedia = [
    { icon: instagramIcon, href: 'https://instagram.com/desydwia_', label: 'Instagram' },
    { icon: githubIcon, href: 'https://github.com/desydwiarianti', label: 'GitHub' },
    { icon: dribbbleIcon, href: 'https://dribbble.com', label: 'Dribbble' },
    { icon: linkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];
  
  return (
    <section 
      id="contact" 
      className="section-padding"
      style={{
        background: '#F0E7FF'
      }}
    >
      <div 
        className="container mx-auto px-4 sm:px-6 lg:px-16"
        style={{
          maxWidth: '896px'
        }}
      >
        {/* FIXED: Items centered di mobile/tablet, aligned start di desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center lg:items-start">
          
          {/* Left - Contact Info - FIXED: Center di mobile/tablet */}
          <div className="space-y-6 sm:space-y-8 w-full max-w-md mx-auto lg:mx-0">
            {/* Contact Me Heading */}
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
                Contact Me
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mb-4 sm:mb-6"></div>
              <p 
                className="leading-relaxed text-sm sm:text-base"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '400',
                  lineHeight: '1.6',
                  color: '#5A5F73'
                }}
              >
                Interested working together? Let's talk about your project and 
                make something amazing!
              </p>
            </div>
            
            {/* Contact Cards */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 bg-white p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon Container */}
                  <div 
                    className={`${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                    style={{
                      width: '48px',
                      height: '48px',
                      minWidth: '48px',
                      minHeight: '48px'
                    }}
                  >
                    <img 
                      src={info.icon}
                      alt={info.label}
                      className="w-5 h-5 object-contain brightness-0 invert"
                      style={{
                        imageRendering: '-webkit-optimize-contrast'
                      }}
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <p 
                      className="text-xs sm:text-sm mb-1"
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '500',
                        color: '#5A5F73'
                      }}
                    >
                      {info.label}
                    </p>
                    <p 
                      className="font-semibold text-sm sm:text-base truncate"
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '600',
                        color: '#232946'
                      }}
                    >
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Media */}
            <div className="pt-2 sm:pt-4">
              <p 
                className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '600',
                  color: '#232946'
                }}
              >
                Follow Me:
              </p>
              <div className="flex gap-2 sm:gap-3">
                {socialMedia.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-white text-purple-600 hover:bg-purple-600 hover:text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <img 
                      src={social.icon}
                      alt={social.label}
                      className="w-5 h-5 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right - Contact Form - FIXED: Center di mobile/tablet */}
          <div 
            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-md mx-auto"
            style={{
              borderRadius: '16px',
              border: '1px solid #E5E7EB',
              boxShadow: '0px 20px 25px 0px #0000001A, 0px 8px 10px 0px #0000001A'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label 
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-semibold mb-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '600',
                    color: '#232946'
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all text-sm"
                  style={{
                    fontFamily: 'Poppins, sans-serif'
                  }}
                  required
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-semibold mb-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '600',
                    color: '#232946'
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all text-sm"
                  style={{
                    fontFamily: 'Poppins, sans-serif'
                  }}
                  required
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-semibold mb-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '600',
                    color: '#232946'
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all resize-none text-sm"
                  style={{
                    fontFamily: 'Poppins, sans-serif'
                  }}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center gap-2 text-white font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 text-sm sm:text-base"
                style={{
                  background: 'linear-gradient(90deg, #7755FF 0%, #FF54B0 100%)',
                  height: '48px',
                  borderRadius: '12px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '600'
                }}
              >
                <img 
                  src={sendIcon}
                  alt="Send"
                  className="w-4 h-4 object-contain brightness-0 invert"
                />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
