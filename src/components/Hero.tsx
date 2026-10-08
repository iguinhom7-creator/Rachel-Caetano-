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
    <section id="inicio" className="pt-26 pb-14 sm:pt-32 sm:pb-20 overflow-hidden relative">
      {/* Background radial soft light */}
      <div 
        className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#F5ECE5]/60 to-transparent blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Presentation & Typography */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#EAE2D8] text-[11px] sm:text-xs font-semibold tracking-wider text-[#A8824B] uppercase shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span>Studio de Unhas Premium</span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="space-y-1.5">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2C2724] leading-[1.1]">
                {ANGELICA_DATA.hero.title}
              </h1>
              <p className="font-display text-xl sm:text-2xl text-[#8C7F75] font-normal italic">
                {ANGELICA_DATA.hero.subtitle}
              </p>
            </div>

            {/* Short text from user brief */}
            <p className="text-base sm:text-lg text-[#5C534D] font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {ANGELICA_DATA.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide btn-gold-luxury flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>{ANGELICA_DATA.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToWorks}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-white hover:bg-[#F5ECE8] border border-[#EAE2D8] text-[#4A433D] transition-colors flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
              >
                <span>{ANGELICA_DATA.hero.secondaryCta}</span>
                <ArrowDown className="w-4 h-4 text-[#A8824B]" />
              </button>
            </div>

            {/* Subtle features */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#7A6F66]">
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

          {/* Right Column: Centered Photo Composition */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[300px] sm:max-w-[340px]">
              
              {/* Outer decorative soft border */}
              <div className="relative rounded-[30px] p-2 bg-gradient-to-b from-[#DFCCA6] via-[#FAF7F2] to-[#C8A97E] shadow-sm">
                
                {/* Main Photo: Angélica Souza */}
                <div className="aspect-[533/800] w-full rounded-[24px] overflow-hidden bg-[#FAF7F2] relative">
                  <img
                    src={ANGELICA_DATA.profilePhoto}
                    alt="Angélica Souza - Nail Designer"
                    className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      if (e.currentTarget.src !== ANGELICA_DATA.fallbackProfilePhoto) {
                        e.currentTarget.src = ANGELICA_DATA.fallbackProfilePhoto;
                      }
                    }}
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                  {/* Discrete bottom name tag on photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[11px] uppercase tracking-wider text-white/80 font-medium">Nail Designer</p>
                    <p className="font-display text-xl font-semibold leading-tight">Angélica Souza</p>
                  </div>
                </div>
              </div>

              {/* Floating Quality Tag */}
              <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 border border-[#EAE2D8] shadow-md flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#FAF7F2] border border-[#EAE2D8] flex items-center justify-center text-[#A8824B]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#A8824B]">Especialidade</p>
                  <p className="text-xs font-semibold text-[#2C2724]">Alongamento Natural</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
