import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Instagram } from 'lucide-react';
import { RACHEL_DATA } from '../data/rachelData';

export const FinalCtaSection: React.FC = () => {
  return (
    <section id="agendar" className="py-20 sm:py-28 bg-gradient-to-b from-[#FAF8F5] via-[#F4ECE1]/50 to-[#FAF8F5] relative overflow-hidden text-center">
      {/* Decorative ambient gradients */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#EFE3D3]/40 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Subtle trust badge */}
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8824B] mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Atendimento Exclusivo com Hora Marcada</span>
        </div>

        {/* Title */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#24201E] tracking-tight leading-[1.18]">
          {RACHEL_DATA.finalCta.title}
        </h2>

        {/* Subtitle / Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#524B45] font-light max-w-xl mx-auto leading-relaxed">
          {RACHEL_DATA.finalCta.description}
        </p>

        {/* Primary Golden WhatsApp Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          <a
            href={RACHEL_DATA.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-9 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase btn-gold-luxury flex items-center justify-center gap-2.5 shadow-md active:scale-98 transition-all text-center"
          >
            <MessageCircle className="w-4.5 h-4.5 fill-current/15" />
            <span>AGENDAR MEU HORÁRIO</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={RACHEL_DATA.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-full text-xs sm:text-sm font-medium bg-white hover:bg-[#FAF6EF] border border-[#E8DDD1] text-[#24201E] transition-colors flex items-center justify-center gap-2 shadow-2xs text-center"
          >
            <Instagram className="w-4 h-4 text-[#E1306C]" />
            <span>Instagram Direct</span>
          </a>
        </div>

        {/* Reassuring note */}
        <p className="text-xs text-[#8C7F75] font-light mt-6">
          Atendimento acolhedor e dedicado exclusivamente ao cuidado das suas unhas naturais em Belo Horizonte.
        </p>
      </div>
    </section>
  );
};
