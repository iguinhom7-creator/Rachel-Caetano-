import React from 'react';
import { MapPin, Clock, ShieldCheck, ExternalLink, MessageCircle, Navigation, Sparkles } from 'lucide-react';
import { RACHEL_DATA } from '../data/rachelData';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-white border-t border-[#E8DDD1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8824B] mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Studio & Localização</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#24201E] tracking-tight">
            Onde estamos
          </h2>
          <p className="font-display text-lg text-[#8C6B32] italic mt-1.5">
            Espaço acolhedor e exclusivo no coração da Savassi
          </p>
        </div>

        {/* Location Information Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#FAF8F5] border border-[#E8DDD1] p-7 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Details Column */}
            <div className="space-y-6 text-left">
              {/* Primary Address Box */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8DDD1] flex items-center justify-center text-[#A8824B] shrink-0 shadow-2xs">
                  <MapPin className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C6B32] block">
                    Endereço Oficial
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#24201E] mt-0.5">
                    {RACHEL_DATA.location.street}
                  </h3>
                  <p className="text-sm font-medium text-[#4A433E] mt-0.5">
                    {RACHEL_DATA.location.neighborhood} · {RACHEL_DATA.location.city}
                  </p>
                </div>
              </div>

              {/* Schedule Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8DDD1] flex items-center justify-center text-[#A8824B] shrink-0 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-[#24201E]">
                    Horário de Atendimento
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B625B] font-light mt-0.5">
                    {RACHEL_DATA.location.scheduleHours}
                  </p>
                </div>
              </div>

              {/* Atmosphere & Comfort */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8DDD1] flex items-center justify-center text-[#A8824B] shrink-0 shadow-2xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-[#24201E]">
                    Ambiente & Privacidade
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B625B] font-light mt-0.5">
                    {RACHEL_DATA.location.directionsText}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Location Visual & Actions */}
            <div className="p-7 rounded-3xl bg-white border border-[#E8DDD1] text-center space-y-4 shadow-2xs">
              <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#E8DDD1] flex items-center justify-center text-[#A8824B] mx-auto shadow-2xs">
                <Navigation className="w-6 h-6 stroke-[1.8]" />
              </div>

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C6B32]">
                  Fácil Acesso
                </span>
                <h4 className="font-display text-xl font-bold text-[#24201E] mt-0.5">
                  Savassi · Belo Horizonte
                </h4>
                <p className="text-xs text-[#736B63] font-light mt-1 max-w-xs mx-auto">
                  Rua Sergipe, nº 1087 — ponto nobre e de fácil localização com diversas opções de estacionamento próximas.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {/* Direct Google Maps Navigation Button */}
                <a
                  href={RACHEL_DATA.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase btn-gold-luxury flex items-center justify-center gap-2 shadow-2xs text-center"
                >
                  <MapPin className="w-4 h-4" />
                  <span>ABRIR NO GOOGLE MAPS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Google Verified Business Profile */}
                <a
                  href={RACHEL_DATA.links.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full text-xs font-medium bg-[#FAF8F5] hover:bg-[#FAF6EF] border border-[#E8DDD1] text-[#24201E] flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Ver perfil do estúdio no Google</span>
                </a>

                {/* WhatsApp Help */}
                <a
                  href={`${RACHEL_DATA.links.whatsapp}?text=${encodeURIComponent(
                    'Olá Rachel! Gostaria de confirmar a localização e pontos de referência do estúdio na Savassi.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#736B63] hover:text-[#24201E] flex items-center justify-center gap-1.5 pt-1 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Tirar dúvidas de rota pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
