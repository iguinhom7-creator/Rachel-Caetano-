import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ANGELICA_DATA } from '../data/angelicaData';

interface ExperienceSectionProps {
  onOpenBooking: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-24 bg-white/70 border-y border-[#EAE2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8824B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Passo a Passo do Atendimento</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C2724]">
            {ANGELICA_DATA.experience.title}
          </h2>
          <blockquote className="font-serif italic text-base sm:text-lg text-[#6B615A] max-w-xl mx-auto pt-1 leading-relaxed">
            {ANGELICA_DATA.experience.quote}
          </blockquote>
        </div>

        {/* 4 Steps Sequence Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {ANGELICA_DATA.experience.steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative bg-[#FAF7F2] rounded-2xl p-6 border border-[#EAE2D8] hover:border-[#C8A97E] transition-all duration-300 shadow-2xs group flex flex-col justify-between"
            >
              <div>
                {/* Step number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-3xl font-bold text-[#C8A97E]/70 group-hover:text-[#A8824B] transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-[#8C7F75] bg-white px-2 py-0.5 rounded-full border border-[#EAE2D8]">
                    Etapa {idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-[#2C2724] group-hover:text-[#A8824B] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C534D] font-light mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#EAE2D8] flex items-center justify-between text-[11px] text-[#A8824B]">
                <span>Experiência Studio</span>
                <span className="text-xs">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="px-7 py-3.5 rounded-full text-xs font-semibold tracking-wide btn-gold-luxury shadow-xs inline-flex items-center gap-2"
          >
            <span>Viver essa experiência · Agendar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
