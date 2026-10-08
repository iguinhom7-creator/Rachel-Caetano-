import React from 'react';
import { ArrowRight, Instagram, MessageCircle, Sparkles, Shield, Heart, MapPin } from 'lucide-react';
import { RACHEL_DATA } from '../data/rachelData';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-24 pb-12 sm:pt-32 sm:pb-16 relative overflow-hidden text-center">
      {/* Delicate champagne ambient glow behind hero */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#F3E9DD]/60 via-[#FAF4ED]/30 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Central Logo Container - Preserving exact original logo proportion */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            {/* Outer delicate champagne border ring */}
            <div className="p-1 rounded-3xl bg-gradient-to-b from-[#DFC799] via-[#FFFFFF] to-[#C5A059]/40 shadow-xs transition-transform duration-300 hover:scale-[1.02]">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[22px] bg-white overflow-hidden flex items-center justify-center p-2 border border-[#EFE5D8]">
                <img
                  src={RACHEL_DATA.logoUrl}
                  alt="Rachel Caetano Nail Designer - Logo Oficial"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-102"
                  onError={(e) => {
                    if (e.currentTarget.src !== RACHEL_DATA.logoExternalUrl) {
                      e.currentTarget.src = RACHEL_DATA.logoExternalUrl;
                    }
                  }}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Address badge below photo/logo */}
            <a
              href="#localizacao"
              className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-white hover:bg-[#FAF6EF] border border-[#E8DDD1] hover:border-[#C5A059] text-[#735A2F] px-3.5 py-0.5 rounded-full shadow-2xs flex items-center gap-1.5 text-[11px] font-medium whitespace-nowrap transition-colors"
            >
              <MapPin className="w-3 h-3 text-[#C5A059]" />
              <span>Rua Sergipe, 1087 · Savassi</span>
            </a>
          </div>
        </div>

        {/* Studio Name & Specialization */}
        <div className="space-y-1.5 mt-4">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#24201E] leading-[1.12]">
            {RACHEL_DATA.name}
          </h1>
          <p className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-[#8C6B32] tracking-wide">
            {RACHEL_DATA.role}
          </p>
        </div>

        {/* Sophisticated Editorial Phrase */}
        <p className="mt-4 font-display italic text-lg sm:text-xl md:text-2xl text-[#524B45] max-w-xl mx-auto leading-relaxed">
          “{RACHEL_DATA.headlinePhrase}”
        </p>

        {/* Value pills (zero clutter) */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-[#736B63]">
          <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-[#E8DDD1]">
            <Heart className="w-3 h-3 text-[#C5A059]" />
            Unhas Naturais
          </span>
          <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-[#E8DDD1]">
            <Shield className="w-3 h-3 text-[#C5A059]" />
            Biossegurança Rigorosa
          </span>
          <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-[#E8DDD1]">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            Luxo Discreto
          </span>
        </div>

        {/* Primary CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          {/* Main button to WhatsApp */}
          <a
            href={RACHEL_DATA.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase btn-gold-luxury flex items-center justify-center gap-2.5 shadow-md active:scale-98 transition-all text-center"
          >
            <MessageCircle className="w-4.5 h-4.5 fill-current/20" />
            <span>AGENDAR MEU HORÁRIO</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Quick Instagram Access */}
          <a
            href={RACHEL_DATA.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-white hover:bg-[#FAF6EF] border border-[#E8DDD1] text-[#24201E] transition-colors flex items-center justify-center gap-2 shadow-2xs text-center"
          >
            <Instagram className="w-4 h-4 text-[#E1306C]" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};
