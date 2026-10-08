import React from 'react';
import { 
  Feather, 
  Palette, 
  Heart, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { ANGELICA_DATA } from '../data/angelicaData';

export const SpecialtySection: React.FC = () => {
  const concepts = [
    { id: 'acabamento', label: 'Acabamento natural', icon: Feather },
    { id: 'formatos', label: 'Formatos personalizados', icon: Palette },
    { id: 'delicadeza', label: 'Delicadeza', icon: Heart },
    { id: 'durabilidade', label: 'Durabilidade', icon: Clock },
    { id: 'cuidado', label: 'Cuidado com as unhas', icon: ShieldCheck },
    { id: 'detalhes', label: 'Atenção aos detalhes', icon: CheckCircle2 },
  ];

  return (
    <section id="especialidade" className="py-14 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
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

        {/* 6 Clean Minimalist Concept Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {concepts.map((concept) => {
            const Icon = concept.icon;
            return (
              <div
                key={concept.id}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EAE2D8] hover:border-[#C8A97E] transition-all duration-300 shadow-2xs text-center flex flex-col items-center justify-center gap-3 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#EAE2D8] flex items-center justify-center group-hover:scale-105 transition-transform text-[#A8824B]">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-display text-sm sm:text-base font-semibold text-[#2C2724] group-hover:text-[#A8824B] transition-colors leading-snug">
                  {concept.label}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
