import React from 'react';
import dashboardPhoto from '../assets/images/dashboard-web.png';
import uiuxDesign from '../assets/images/ui-ux-design.png';
import prototype from '../assets/images/prototype.png';
import dribbbleIcon from '../assets/images/dribble-putih.png';

function PortfolioSection() {
  const projects = [
    {
      id: 1,
      image: dashboardPhoto,
      title: 'Dashboard Web Beasiscope',
      category: 'UI/UX, Frontend',
      tags: ['UI/UX', 'Frontend']
    },
    {
      id: 2,
      image: uiuxDesign,
      title: 'UI UX Design Felix',
      category: 'UI UX & Visual Design',
      tags: ['Design']
    },
    {
      id: 3,
      image: prototype,
      title: 'Prototyping Felix',
      category: 'Prototyping, Animation',
      tags: ['Prototyping', 'Animation']
    }
  ];
  
  return (
    <section 
      id="portfolio" 
      className="section-padding"
      style={{
        background: '#FFFFFF',
        border: '1px solid #E5E7EB'
      }}
    >
      <div 
        className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16"
        style={{
          maxWidth: '1104px'
        }}
      >
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 
            className="font-bold mb-3 sm:mb-4 text-2xl sm:text-3xl"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700',
              lineHeight: '1.2',
              color: '#232946'
            }}
          >
            Portfolio
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mx-auto mb-3 sm:mb-4"></div>
          <p 
            className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '400',
              color: '#5A5F73'
            }}
          >
            Selected works that showcase my creativity and technical skills
          </p>
        </div>
        
        {/* Portfolio Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: '40px'
          }}
        >
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
              style={{
                width: '100%',
                maxWidth: '341.33px',
                height: '328px',
                borderRadius: '16px',
                margin: '0 auto',
                boxShadow: '0px 10px 15px 0px rgba(0, 0, 0, 0.1), 0px 4px 6px 0px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Image Container - 224px */}
              <div 
                className="relative overflow-hidden"
                style={{
                  height: '224px'
                }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  style={{
                    objectPosition: 'center top'
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-5 md:p-6">
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 flex-wrap">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Card Info - 104px */}
              <div 
                className="p-4 sm:p-5 md:p-6 bg-white"
                style={{
                  height: '104px'
                }}
              >
                <h3 
                  className="font-bold mb-1 sm:mb-2 text-base sm:text-lg"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '700',
                    lineHeight: '1.3',
                    color: '#232946'
                  }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-xs sm:text-sm"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '400',
                    color: '#5A5F73'
                  }}
                >
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dribble Button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <a 
            href="https://dribbble.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-white font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 text-sm sm:text-base"
            style={{
              background: 'linear-gradient(90deg, #7755FF 0%, #FF54B0 100%)',
              width: '100%',
              maxWidth: '218px',
              height: '48px',
              borderRadius: '9999px',
              border: '1px solid #E5E7EB',
              boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.1)',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '600',
              padding: '0 20px'
            }}
          >
            <img 
              src={dribbbleIcon}
              alt="Dribbble"
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            />
            <span>More on Dribbble</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
