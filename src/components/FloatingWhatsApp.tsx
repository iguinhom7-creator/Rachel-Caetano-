import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside 
      aria-label="Agendamento rápido"
      className="fixed bottom-5 right-4 sm:right-6 z-40"
    >
      <a
        href={STUDIO_DATA.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar horário no WhatsApp com Rachel Caetano"
        className="group flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20BA5A] active:scale-95 transition-all duration-200"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
          Agendar Horário
        </span>
      </a>
    </aside>
  );
};
