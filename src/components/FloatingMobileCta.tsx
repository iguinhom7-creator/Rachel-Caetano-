import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { RACHEL_DATA } from '../data/rachelData';

export const FloatingMobileCta: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        <a
          href={RACHEL_DATA.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-5 rounded-full btn-gold-luxury shadow-xl flex items-center justify-between border border-white/40 active:scale-98 transition-transform"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white fill-current/20" />
            </div>
            <span className="text-xs font-semibold tracking-wide text-white">
              Agende seu horário pelo WhatsApp
            </span>
          </div>

          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </a>
      </div>
    </div>
  );
};
