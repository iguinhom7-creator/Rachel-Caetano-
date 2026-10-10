import React from 'react';
import { Sparkles, ArrowRight, ArrowDown, Heart, ShieldCheck } from 'lucide-react';
import { ANGELICA_DATA } from '../data/angelicaData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToWorks = () => {
    const el = document.querySelector('#trabalhos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-26 pb-14 sm:pt-32 sm:pb-20 overflow-hidden relative text-center">
      {/* Background radial soft light */}
      <div 
        className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-gradient-to-b from-[#F5ECE5]/60 to-transparent blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* 1. Photo Frame - Centered horizontally, positioned ABOVE the title and text, shifted slightly right inside */}
        <div className="flex justify-center mb-7 sm:mb-8">
          <div className="relative group max-w-[260px] sm:max-w-[290px] w-full">
            {/* Outer luxury border */}
            <div className="p-1.5 rounded-[30px] bg-gradient-to-b from-[#DFCCA6] via-[#FAF7F2] to-[#C8A97E] shadow-sm transition-transform duration-300 group-hover:scale-[1.01]">
              <div className="w-full aspect-[533/800] rounded-[24px] bg-[#FAF7F2] overflow-hidden relative">
                <img
                  src={ANGELICA_DATA.profilePhoto}
                  alt="Angélica Souza - Nail Designer"
                  className="w-full h-full object-cover object-[65%_center] scale-108 translate-x-3 sm:translate-x-4 transition-transform duration-500"
                  onError={(e) => {
                    if (e.currentTarget.src !== ANGELICA_DATA.fallbackProfilePhoto) {
                      e.currentTarget.src = ANGELICA_DATA.fallbackProfilePhoto;
                    }
                  }}
                  loading="eager"
                />
              </div>
            </div>

            {/* Subtle verification badge centered at the bottom of the photo */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xs border border-[#EAE2D8] text-[#A8824B] px-3.5 py-1 rounded-full shadow-2xs flex items-center gap-1.5 text-[11px] font-semibold whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span>Nail Designer</span>
            </div>
          </div>
        </div>

        {/* 2. Tagline kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#EAE2D8] text-[11px] sm:text-xs font-semibold tracking-wider text-[#A8824B] uppercase shadow-2xs mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
          <span>Studio de Unhas Premium</span>
        </div>

        {/* 3. Main Title & Subtitle */}
        <div className="space-y-1.5 max-w-2xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2C2724] leading-[1.1]">
            {ANGELICA_DATA.hero.title}
          </h1>
          <p className="font-display text-xl sm:text-2xl text-[#8C7F75] font-normal italic">
            {ANGELICA_DATA.hero.subtitle}
          </p>
        </div>

        {/* 4. Legenda / Short text from brief */}
        <p className="text-base sm:text-lg text-[#5C534D] font-light max-w-xl mx-auto mt-4 leading-relaxed">
          {ANGELICA_DATA.hero.description}
        </p>

        {/* 5. CTA Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide btn-gold-luxury flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <span>{ANGELICA_DATA.hero.primaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToWorks}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-white hover:bg-[#F5ECE8] border border-[#EAE2D8] text-[#4A433D] transition-colors flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
          >
            <span>{ANGELICA_DATA.hero.secondaryCta}</span>
            <ArrowDown className="w-4 h-4 text-[#A8824B]" />
          </button>
        </div>

        {/* 6. Subtle features */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#7A6F66]">
          <div className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-[#A8824B]" />
            <span>Atendimento personalizado</span>
          </div>
          <span className="text-[#D3C7BC]">·</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A8824B]" />
            <span>Preservação da lâmina</span>
          </div>
          <span className="text-[#D3C7BC]">·</span>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#A8824B]" />
            <span>Estrutura fina & natural</span>
          </div>
        </div>

      </div>
    </section>
  );
};
