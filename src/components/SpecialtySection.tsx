import React from 'react';
import { 
  Sparkles, 
  Feather, 
  Palette, 
  Heart, 
  Clock, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { ANGELICA_DATA } from '../data/angelicaData';

export const SpecialtySection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    acabamento: <Feather className="w-5 h-5 text-[#A8824B]" />,
    formatos: <Palette className="w-5 h-5 text-[#A8824B]" />,
    delicadeza: <Heart className="w-5 h-5 text-[#A8824B]" />,
    durabilidade: <Clock className="w-5 h-5 text-[#A8824B]" />,
    cuidado: <ShieldCheck className="w-5 h-5 text-[#A8824B]" />,
    detalhes: <CheckCircle2 className="w-5 h-5 text-[#A8824B]" />
  };

  return (
    <section id="especialidade" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8824B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Foco Técnico & Estético</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C2724]">
            {ANGELICA_DATA.specialtySection.title}
          </h2>
          <p className="font-display text-xl sm:text-2xl text-[#8C7F75] italic">
            {ANGELICA_DATA.specialtySection.subtitle}
          </p>
          <p className="text-sm sm:text-base text-[#5C534D] font-light leading-relaxed pt-1">
            {ANGELICA_DATA.specialtySection.description}
          </p>
        </div>

        {/* 6 Minimalist Concepts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ANGELICA_DATA.specialtySection.concepts.map((concept) => (
            <div
              key={concept.id}
              className="bg-white/90 hover:bg-white rounded-2xl p-6 border border-[#EAE2D8] hover:border-[#C8A97E] transition-all duration-300 shadow-2xs hover:shadow-xs group flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#EAE2D8] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {iconMap[concept.id] || <Sparkles className="w-5 h-5 text-[#A8824B]" />}
                </div>
                <h3 className="font-display text-lg font-semibold text-[#2C2724] group-hover:text-[#A8824B] transition-colors">
                  {concept.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B615A] font-light mt-1.5 leading-relaxed">
                  {concept.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F5ECE8] flex items-center justify-between text-[11px] text-[#A8824B] font-medium">
                <span>Padrão Angélica Souza</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
