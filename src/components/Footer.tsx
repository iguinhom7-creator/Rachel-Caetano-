import React from 'react';
import { MessageCircle, Instagram, Search, MapPin } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E8DED6] bg-white pt-8 pb-20 text-[#6B635B] mt-auto">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h3 className="font-display text-base font-semibold text-[#2C2926]">
          {STUDIO_DATA.title}
        </h3>
        <p className="text-xs text-[#8A8279] mt-0.5">
          {STUDIO_DATA.specialty}
        </p>

        <a 
          href={STUDIO_DATA.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[#6B635B] hover:text-[#9A7737] mt-2 transition-colors"
        >
          <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>{STUDIO_DATA.address}</span>
        </a>

        {/* 3 Social icon buttons */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <a
            href={STUDIO_DATA.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-9 h-9 rounded-full bg-[#FAFAF8] border border-[#E8DED6] flex items-center justify-center text-[#2C2926] hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors"
            title="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href={STUDIO_DATA.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full bg-[#FAFAF8] border border-[#E8DED6] flex items-center justify-center text-[#2C2926] hover:text-[#E1306C] hover:border-[#E1306C]/40 transition-colors"
            title="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={STUDIO_DATA.links.google}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google"
            className="w-9 h-9 rounded-full bg-[#FAFAF8] border border-[#E8DED6] flex items-center justify-center text-[#2C2926] hover:text-[#4285F4] hover:border-[#4285F4]/40 transition-colors"
            title="Google Perfil e Avaliações"
          >
            <Search className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-6 pt-4 border-t border-[#F2ECE5] text-[11px] text-[#A29A91]">
          <p>© {new Date().getFullYear()} Rachel Caetano Nail Designer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
