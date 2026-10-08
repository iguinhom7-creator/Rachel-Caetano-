import React from 'react';
import { Heart, Sparkles, Check } from 'lucide-react';
import { ANGELICA_DATA } from '../data/angelicaData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-white/70 border-y border-[#EAE2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="rounded-3xl p-2 bg-gradient-to-b from-[#F5ECE8] to-[#EFE6DC] border border-[#EAE2D8] shadow-sm">
                <div className="aspect-[4/5] rounded-[22px] overflow-hidden bg-[#FAF7F2]">
                  <img
                    src={ANGELICA_DATA.profilePhoto}
                    alt="Angélica Souza - Nail Designer"
                    className="w-full h-full object-cover object-[center_15%]"
                    onError={(e) => {
                      if (e.currentTarget.src !== ANGELICA_DATA.fallbackProfilePhoto) {
                        e.currentTarget.src = ANGELICA_DATA.fallbackProfilePhoto;
                      }
                    }}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Discreet quote badge */}
              <div className="mt-4 text-center">
                <span className="text-xs font-serif italic text-[#8C7F75]">
                  “Cuidado, carinho e respeito à saúde de cada unha.”
                </span>
              </div>
            </div>
          </div>

          {/* Text Presentation Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8824B] mb-2">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Sobre a Profissional</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C2724]">
                {ANGELICA_DATA.about.heading}
              </h2>
            </div>

            {/* Exact presentation text requested by user */}
            <div className="space-y-4 text-sm sm:text-base text-[#4A433D] font-light leading-relaxed">
              <p className="font-medium text-[#2C2724] text-base sm:text-lg">
                {ANGELICA_DATA.about.paragraphs[0]}
              </p>
              <p>
                {ANGELICA_DATA.about.paragraphs[1]}
              </p>
              <p className="italic text-[#6B615A] pt-1">
                {ANGELICA_DATA.about.paragraphs[2]}
              </p>
            </div>

            {/* Values / Commitments */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4A433D] text-left">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#EAE2D8]">
                <div className="w-5 h-5 rounded-full bg-[#EAE2D8] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#A8824B]" />
                </div>
                <span>Técnica fina e imperceptível</span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#EAE2D8]">
                <div className="w-5 h-5 rounded-full bg-[#EAE2D8] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#A8824B]" />
                </div>
                <span>Biossegurança e higiene rigorosa</span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#EAE2D8]">
                <div className="w-5 h-5 rounded-full bg-[#EAE2D8] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#A8824B]" />
                </div>
                <span>Respeito ao formato natural</span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#EAE2D8]">
                <div className="w-5 h-5 rounded-full bg-[#EAE2D8] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#A8824B]" />
                </div>
                <span>Atendimento acolhedor e exclusivo</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full text-xs font-semibold tracking-wide btn-gold-luxury shadow-xs cursor-pointer"
              >
                Agendar com a Angélica
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
