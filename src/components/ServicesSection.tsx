import React from 'react';
import { Sparkles, Clock, ArrowRight, Check, MessageCircle } from 'lucide-react';
import { RACHEL_DATA } from '../data/rachelData';

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8824B] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Procedimento Exclusivo</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#24201E] tracking-tight">
            Especialidade do Studio
          </h2>
          <p className="font-display text-lg text-[#8C6B32] italic mt-1.5">
            Técnica minuciosa voltada à saúde, delicadeza e durabilidade da lâmina natural
          </p>
        </div>

        {/* Featured Signature Service Card */}
        <div className="max-w-2xl mx-auto">
          {RACHEL_DATA.services.map((service) => {
            const whatsappMessage = encodeURIComponent(
              `Olá Rachel! Gostaria de agendar o procedimento de ${service.name} no seu estúdio em Belo Horizonte.`
            );
            const bookingUrl = `${RACHEL_DATA.links.whatsapp}?text=${whatsappMessage}`;

            return (
              <div
                key={service.id}
                className="rounded-3xl bg-white border border-[#E8DDD1] hover:border-[#C5A059] p-7 sm:p-9 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#E8DDD1] flex items-center justify-center text-[#A8824B] group-hover:scale-105 transition-transform shadow-2xs">
                      <Sparkles className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    {service.duration && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#736B63] font-light bg-[#FAF8F5] px-3.5 py-1.5 rounded-full border border-[#E8DDD1]">
                        <Clock className="w-3.5 h-3.5 text-[#A8824B]" />
                        {service.duration}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#24201E] group-hover:text-[#A8824B] transition-colors leading-snug">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm sm:text-base text-[#6B625B] font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="mt-6 pt-5 border-t border-[#F3ECE4] space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4A433E]">
                        <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="mt-8 pt-5 border-t border-[#F3ECE4]">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wide btn-gold-luxury flex items-center justify-center gap-2 shadow-sm text-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Agendar este procedimento no WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
