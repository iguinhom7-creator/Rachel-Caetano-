import React from 'react';
import { Sparkles, ArrowRight, ArrowDown, ShieldCheck, Heart } from 'lucide-react';
import { ANGELICA_DATA } from '../data/angelicaData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToAbout = () => {
    const el = document.querySelector('#sobre');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-26 pb-8 sm:pt-30 sm:pb-10 overflow-hidden relative text-center">
      {/* Background radial glow */}
      <div 
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#F5ECE5]/70 to-transparent blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Profile Photo Frame - Showing the entire photo centered */}
        <div className="flex justify-center mb-7">
          <div className="relative group max-w-[250px] sm:max-w-[280px] w-full">
            <div className="p-1.5 rounded-[28px] bg-gradient-to-b from-[#DFCCA6] via-[#FAF7F2] to-[#C8A97E] shadow-sm transition-transform duration-300 group-hover:scale-[1.01]">
              <div className="w-full aspect-[533/800] rounded-[22px] bg-[#FAF7F2] overflow-hidden relative">
                <img
                  src={ANGELICA_DATA.profilePhoto}
                  alt="Angélica Souza - Nail Designer"
                  className="w-full h-full object-cover object-[62%_center] scale-108 translate-x-3 sm:translate-x-4 transition-transform duration-500"
                  onError={(e) => {
                    if (e.currentTarget.src !== ANGELICA_DATA.fallbackProfilePhoto) {
                      e.currentTarget.src = ANGELICA_DATA.fallbackProfilePhoto;
                    }
                  }}
                  loading="eager"
                />
              </div>
            </div>

            {/* Subtle verification badge */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-white border border-[#EAE2D8] text-[#A8824B] px-3.5 py-1 rounded-full shadow-2xs flex items-center gap-1.5 text-[11px] font-semibold whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span>Nail Designer</span>
            </div>
          </div>
        </div>

        {/* Studio Name */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#2C2724] leading-tight">
          {ANGELICA_DATA.hero.title}
          <span className="block text-base sm:text-lg font-normal text-[#8C7F75] font-display italic mt-1">
            {ANGELICA_DATA.hero.subtitle}
          </span>
        </h1>

        {/* Short Text */}
        <p className="text-sm sm:text-base text-[#5C534D] font-light max-w-lg mx-auto mt-3 leading-relaxed">
          {ANGELICA_DATA.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide btn-gold-luxury flex items-center justify-center gap-2 shadow-xs"
          >
            <span>{ANGELICA_DATA.hero.primaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToAbout}
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-white hover:bg-[#F5ECE8] border border-[#EAE2D8] text-[#4A433D] transition-colors flex items-center justify-center gap-2 shadow-2xs"
          >
            <span>Sobre a profissional</span>
            <ArrowDown className="w-4 h-4 text-[#A8824B]" />
          </button>
        </div>

      </div>
    </section>
  );
};
