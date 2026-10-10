import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { ANGELICA_DATA } from '../data/angelicaData';

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="agendar" className="py-20 sm:py-28 bg-gradient-to-b from-[#FAF7F2] via-[#F5ECE8] to-[#FAF7F2] relative overflow-hidden">
      {/* Decorative ambient blurred circles */}
      <div 
        className="absolute -top-24 -left-24 w-96 h-96 bg-[#DFCCA6]/25 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F5ECE8] rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Subtle badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-[#EAE2D8] text-xs font-semibold uppercase tracking-wider text-[#A8824B] shadow-2xs mb-5">
          <Heart className="w-3.5 h-3.5 text-[#C8A97E] fill-current" />
          <span>Atendimento Exclusivo</span>
        </div>

        {/* Title from user brief */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2C2724] tracking-tight leading-[1.15]">
          {ANGELICA_DATA.finalCta.title}
        </h2>

        {/* Text from user brief */}
        <p className="mt-4 text-base sm:text-lg text-[#5C534D] font-light max-w-xl mx-auto leading-relaxed">
          {ANGELICA_DATA.finalCta.description}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-9 py-4 rounded-full text-sm font-semibold tracking-wide btn-gold-luxury flex items-center justify-center gap-2.5 shadow-md hover:scale-105 active:scale-98 transition-all cursor-pointer"
          >
            <span>{ANGELICA_DATA.finalCta.button}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={ANGELICA_DATA.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-full text-sm font-medium bg-white hover:bg-[#FAF7F2] border border-[#EAE2D8] text-[#4A433D] transition-colors flex items-center justify-center gap-2 shadow-2xs"
          >
            <span>Conversar no Instagram</span>
          </a>
        </div>

        {/* Peace of mind note */}
        <p className="mt-6 text-xs text-[#8C7F75] font-light">
          Rua Joaquim de Paula, 369 – Inconfidência · Horários reservados individualmente
        </p>

      </div>
    </section>
  );
};
