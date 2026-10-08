import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';

interface FloatingMobileCtaProps {
  onOpenBooking: () => void;
}

export const FloatingMobileCta: React.FC<FloatingMobileCtaProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-30 sm:hidden pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        <button
          onClick={onOpenBooking}
          className="w-full py-3.5 px-5 rounded-full btn-gold-luxury shadow-lg flex items-center justify-between border border-white/30 active:scale-98 transition-transform cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <Calendar className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-xs font-semibold tracking-wide">
              Agendar Horário
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-medium bg-black/15 px-2.5 py-1 rounded-full">
            <span>Contato</span>
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </button>
      </div>
    </div>
  );
};
