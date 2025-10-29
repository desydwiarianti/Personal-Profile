import React from 'react';
import uiuxIcon from '../assets/images/ui-ux.png';
import frontendIcon from '../assets/images/frontend-dev.png';
import visualIcon from '../assets/images/visual-design.png';
import prototypingIcon from '../assets/images/prototyping.png';

function SkillsSection() {
  const skills = [
    {
      icon: uiuxIcon,
      title: 'UI/UX Design',
      description: 'Figma & Adobe XD',
      bgColor: '#F0E7FF'
    },
    {
      icon: frontendIcon, 
      title: 'Frontend Dev',
      description: 'React & Tailwind',
      bgColor: '#E0EAFE'
    },
    {
      icon: visualIcon,
      title: 'Visual Design',
      description: 'Canva',
      bgColor: '#FFE978'
    },
    {
      icon: prototypingIcon,
      title: 'Prototyping',
      description: 'Figma',
      bgColor: '#E0EAFE'
    }
  ];
  
  return (
    <section 
      id="skills" 
      className="section-padding"
      style={{
        background: '#FAFBFC',
        border: '1px solid #E5E7EB'
      }}
    >
      <div 
        className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16"
        style={{
          maxWidth: '1024px'
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
            My Skills
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
            Tools and technologies I use to bring creative ideas to life
          </p>
        </div>
        
        {/* Skills Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group w-full"
              style={{
                background: skill.bgColor,
                borderRadius: '16px',
                maxWidth: '220px',
                height: 'auto',
                minHeight: '180px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {/* Icon */}
              <div 
                className="mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300"
              >
                <img 
                  src={skill.icon}
                  alt={skill.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                  style={{
                    imageRendering: '-webkit-optimize-contrast'
                  }}
                />
              </div>
              
              {/* Title  */}
              <h3 
                className="font-bold text-center mb-1 sm:mb-2 text-base sm:text-lg"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '700',
                  lineHeight: '1.4',
                  color: '#232946'
                }}
              >
                {skill.title}
              </h3>
              
              {/* Description  */}
              <p 
                className="text-center text-xs sm:text-sm"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '400',
                  lineHeight: '1.5',
                  color: '#5A5F73'
                }}
              >
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
