import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-5 max-w-xl mx-auto px-4">
      <div className="bg-white rounded-2xl border border-[#E8DED6] p-5 sm:p-6 text-center shadow-xs">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9A7737] mb-2.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Apresentação</span>
        </div>

        <p className="text-sm text-[#4A433D] font-normal leading-relaxed">
          {STUDIO_DATA.about.text}
        </p>

        <div className="mt-4 pt-3.5 border-t border-[#F2ECE5] flex items-center justify-center gap-2 text-xs text-[#8A8279]">
          <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
          <span>Biossegurança rigorosa e foco na saúde da sua unha natural</span>
        </div>
      </div>
    </section>
  );
};
