import React from 'react';
import stackImage from '../assets/about/udit-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M63.047 5.863c-21.758.375-20.406 9.422-20.406 9.422h10.457c0 0 14.156-1.859 14.156 12.395v9.293h-24.79v-2.062c0 0 1.258-15.688-21.695-15.688-22.953 0-25.074 13.988-25.074 25.102 0 11.113 2.063 24.266 22.25 24.266h7.945s2.43.082 2.43-5.234v-11.89h18.238v16.12c0 14.254-12.785 13.926-12.785 13.926H22.793S1.656 102.508 1.656 80.594C1.656 58.68 18.063 56.68 18.063 56.68h9.453s12.59 2.063 12.59-11.453V26.973c0-13.516 11.664-21.484 32.941-21.11z"/>
      <path fill="#FFE873" d="M64.953 122.137c21.758-.375 20.406-9.422 20.406-9.422H74.902c0 0-14.156 1.859-14.156-12.395v-9.293h24.79v2.062s-1.258 15.688 21.695 15.688c22.953 0 25.074-13.988 25.074-25.102 0-11.113-2.063-24.266-22.25-24.266h-7.945s-2.43-.082-2.43 5.234v11.89H81.672V60.42c0-14.254 12.785-13.926 12.785-13.926h28.75s21.137-5.984 21.137 15.93c0 21.914-16.406 23.914-16.406 23.914h-9.453s-12.59-2.063-12.59 11.453v18.258c0 13.516-11.664 21.484-32.941 21.11z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);

const MachineLearningIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="54" fill="none" stroke="#FFD700" strokeWidth="4" />
      <circle cx="64" cy="34" r="10" fill="#FFD700" />
      <circle cx="34" cy="74" r="10" fill="#FFD700" />
      <circle cx="94" cy="74" r="10" fill="#FFD700" />
      <line x1="64" y1="34" x2="34" y2="74" stroke="#FFD700" strokeWidth="3" />
      <line x1="64" y1="34" x2="94" y2="74" stroke="#FFD700" strokeWidth="3" />
      <line x1="34" y1="74" x2="94" y2="74" stroke="#FFD700" strokeWidth="3" />
      <circle cx="64" cy="61" r="14" fill="#ff2a2a" stroke="#fff" strokeWidth="2" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">AI / ML</span>
  </div>
);

const DatabaseIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#00758F" d="M64 8c-30.928 0-56 7.163-56 16v16c0 8.837 25.072 16 56 16s56-7.163 56-16V24c0-8.837-25.072-16-56-16zm0 10c22.091 0 40 4.03 40 9s-17.909 9-40 9-40-4.03-40-9 17.909-9 40-9zm-48 30v16c0 8.837 25.072 16 56 16s56-7.163 56-16V48c-9.155 5.474-28.75 8-48 8s-38.845-2.526-48-8zm0 32v16c0 8.837 25.072 16 56 16s56-7.163 56-16V80c-9.155 5.474-28.75 8-48 8s-38.845-2.526-48-8z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">MySQL / DB</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Udit Mishra — Aspiring AI/ML Engineer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <MachineLearningIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <DatabaseIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
