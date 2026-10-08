import React from 'react';
import { ANGELICA_DATA } from '../data/angelicaData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre" className="py-14 sm:py-20 bg-white/70 border-y border-[#EAE2D8]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Title */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C2724]">
          {ANGELICA_DATA.about.heading}
        </h2>

        {/* Exact text provided by user */}
        <div className="mt-6 space-y-4 text-sm sm:text-base text-[#4A433D] font-light leading-relaxed">
          <p className="font-medium text-[#2C2724] text-base sm:text-lg">
            {ANGELICA_DATA.about.paragraphs[0]}
          </p>
          <p>
            {ANGELICA_DATA.about.paragraphs[1]}
          </p>
          <p className="italic text-[#6B615A] pt-1">
            {ANGELICA_DATA.about.paragraphs[2]}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <button
            onClick={onOpenBooking}
            className="px-7 py-3 rounded-full text-xs font-semibold tracking-wide btn-gold-luxury shadow-xs cursor-pointer"
          >
            Agendar com a Angélica
          </button>
        </div>

      </div>
    </section>
  );
};
