import React from 'react';
import { Calendar, Share2 } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

interface HeaderProps {
  onShare: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onShare }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E8DED6]/70 transition-all">
      <div className="max-w-xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Zone 1: Single text wordmark */}
        <a 
          href="#topo" 
          className="font-display text-lg sm:text-xl font-semibold tracking-wide text-[#2C2926] hover:text-[#9A7737] transition-colors whitespace-nowrap"
        >
          Rachel Caetano
        </a>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onShare}
            aria-label="Compartilhar biosite"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#6B635B] hover:text-[#2C2926] hover:bg-[#F2ECE5] transition-colors"
            title="Compartilhar"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>

          <a
            href={STUDIO_DATA.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-luxury px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-2xs whitespace-nowrap"
          >
            <Calendar className="w-3 h-3" />
            <span>Agendar</span>
          </a>
        </div>
      </div>
    </header>
  );
};
