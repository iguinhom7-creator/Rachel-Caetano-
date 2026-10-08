import React from 'react';
import { Sparkles, Feather, UserCheck, ShieldCheck, Gem } from 'lucide-react';
import { ANGELICA_DATA } from '../data/angelicaData';

export const DifferentialsSection: React.FC = () => {
  const icons = [
    <Feather className="w-5 h-5 text-[#A8824B]" />,
    <UserCheck className="w-5 h-5 text-[#A8824B]" />,
    <Sparkles className="w-5 h-5 text-[#A8824B]" />,
    <Gem className="w-5 h-5 text-[#A8824B]" />
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C2724]">
            {ANGELICA_DATA.differentials.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6B615A] font-light">
            Conheça os motivos que fazem do nosso studio a escolha de quem busca sofisticação sem artificialidade.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {ANGELICA_DATA.differentials.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EAE2D8] hover:border-[#C8A97E] transition-all duration-300 shadow-2xs hover:shadow-xs group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D8] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {icons[idx]}
                </div>
                <h3 className="font-display text-xl font-semibold text-[#2C2724] group-hover:text-[#A8824B] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C534D] font-light mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F5ECE8] flex items-center gap-1.5 text-[11px] font-medium text-[#8C7F75]">
                <span className="text-[#A8824B]">0{idx + 1}</span>
                <span>·</span>
                <span>Diferencial Exclusivo</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
