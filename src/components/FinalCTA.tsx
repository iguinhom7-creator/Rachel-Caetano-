import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

export const FinalCTA: React.FC = () => {
  return (
    <section id="agendamento" className="py-8 max-w-xl mx-auto px-4 text-center">
      <div className="rounded-3xl bg-gradient-to-b from-[#2E2824] to-[#201D1A] text-white p-6 sm:p-8 shadow-md border border-[#52463C]/30">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white leading-tight">
          Agende seu momento
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#D1C5B8] max-w-md mx-auto font-light">
          Consulte os horários disponíveis e reserve seu atendimento exclusivo pelo WhatsApp.
        </p>

        <div className="mt-5">
          <a
            href={STUDIO_DATA.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-luxury w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
