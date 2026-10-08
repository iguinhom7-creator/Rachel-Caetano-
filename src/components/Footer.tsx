import React from 'react';
import { Instagram, MapPin, ArrowUp } from 'lucide-react';
import { ANGELICA_DATA } from '../data/angelicaData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#EAE2D8] pt-12 pb-24 sm:pb-12 text-[#6B615A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#EAE2D8]">
          
          {/* Brand & Specialty */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-2xl font-semibold text-[#2C2724]">
              {ANGELICA_DATA.name}
            </h4>
            <p className="text-xs text-[#8C7F75] font-light mt-0.5">
              {ANGELICA_DATA.specialty} · Unhas delicadas e duradouras
            </p>
            <p className="text-xs text-[#8C7F75] font-light mt-1 flex items-center justify-center md:justify-start gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#A8824B]" />
              <span>{ANGELICA_DATA.address}</span>
            </p>
          </div>

          {/* Social and back to top */}
          <div className="flex items-center gap-4">
            <a
              href={ANGELICA_DATA.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-[#EAE2D8] flex items-center justify-center text-[#2C2724] hover:text-[#E1306C] hover:border-[#E1306C] transition-colors shadow-2xs"
              aria-label="Instagram de Angélica Souza"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#EAE2D8] text-xs font-medium text-[#4A433D] hover:bg-[#F5ECE8] transition-colors shadow-2xs"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#A8824B]" />
            </button>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#8C7F75] font-light text-center sm:text-left">
          <p>© {new Date().getFullYear()} Angélica Souza Nails. Todos os direitos reservados.</p>
          <p>Belo Horizonte · MG</p>
        </div>
      </div>
    </footer>
  );
};
