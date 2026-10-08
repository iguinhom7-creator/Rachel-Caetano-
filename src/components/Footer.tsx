import React from 'react';
import { Instagram, ArrowUp, MessageCircle, Star } from 'lucide-react';
import { RACHEL_DATA } from '../data/rachelData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#E8DDD1] pt-12 pb-24 sm:pb-12 text-[#6B625B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E8DDD1]">
          {/* Brand & Specialty & Phrase */}
          <div className="text-center md:text-left space-y-1">
            <h4 className="font-display text-2xl font-semibold text-[#24201E]">
              {RACHEL_DATA.fullName}
            </h4>
            <p className="font-display italic text-sm text-[#8C6B32]">
              “Beleza, cuidado e sofisticação em cada detalhe.”
            </p>
            <p className="text-xs text-[#8C7F75] font-light">
              Rua Sergipe, 1087 — Savassi · Belo Horizonte · MG
            </p>
          </div>

          {/* Direct Social Links (Instagram, WhatsApp, Google) */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={RACHEL_DATA.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#E8DDD1] text-xs font-medium text-[#24201E] hover:text-[#E1306C] hover:border-[#E1306C] transition-colors shadow-2xs"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
              <span>Instagram</span>
            </a>

            <a
              href={RACHEL_DATA.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#E8DDD1] text-xs font-medium text-[#24201E] hover:text-[#25D366] hover:border-[#25D366] transition-colors shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <a
              href={RACHEL_DATA.links.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#E8DDD1] text-xs font-medium text-[#24201E] hover:text-[#E37400] hover:border-[#E37400] transition-colors shadow-2xs"
            >
              <Star className="w-3.5 h-3.5 text-[#E37400] fill-current" />
              <span>Google</span>
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#E8DDD1] text-xs font-medium text-[#4A433E] hover:bg-[#FAF6EF] transition-colors shadow-2xs cursor-pointer ml-1"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#A8824B]" />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#8C7F75] font-light text-center sm:text-left">
          <p>© {new Date().getFullYear()} {RACHEL_DATA.fullName}. Todos os direitos reservados.</p>
          <p>Belo Horizonte · MG</p>
        </div>
      </div>
    </footer>
  );
};
