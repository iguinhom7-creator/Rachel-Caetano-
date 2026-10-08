import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { ANGELICA_DATA } from '../data/angelicaData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ANGELICA_DATA.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-white/70 border-t border-[#EAE2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8824B]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Endereço do Studio</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C2724]">
            {ANGELICA_DATA.location.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6B615A] font-light">
            Ambiente pensado para o seu conforto, segurança e bem-estar durante todo o atendimento.
          </p>
        </div>

        {/* Location Details Card */}
        <div className="max-w-3xl mx-auto bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#EAE2D8] shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#EAE2D8]">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-13 h-13 rounded-2xl bg-white border border-[#EAE2D8] text-[#A8824B] flex items-center justify-center shrink-0 shadow-2xs">
                <MapPin className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#A8824B]">
                  Studio Angélica Souza Nails
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#2C2724] mt-0.5">
                  {ANGELICA_DATA.address}
                </h3>
                <p className="text-xs text-[#8C7F75] font-light mt-0.5">
                  Belo Horizonte · MG
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto">
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto px-4 py-2.5 rounded-full text-xs font-medium bg-white hover:bg-[#F5ECE8] border border-[#EAE2D8] text-[#4A433D] transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Endereço copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#8C7F75]" />
                    <span>Copiar endereço</span>
                  </>
                )}
              </button>

              <a
                href={ANGELICA_DATA.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide btn-gold-luxury flex items-center justify-center gap-2 shadow-xs whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5 fill-current" />
                <span>{ANGELICA_DATA.location.cta}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Styled Google Maps iframe representation */}
          <div className="mt-6 rounded-2xl overflow-hidden border border-[#EAE2D8] bg-white h-64 sm:h-72 relative">
            <iframe
              title="Localização Angélica Souza Nails"
              src="https://maps.google.com/maps?q=Rua+Joaquim+de+Paula,+369+Inconfidência+Belo+Horizonte&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[25%] contrast-[1.05]"
            />

            {/* Float badge over map */}
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-[#EAE2D8] shadow-md flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-[#2C2724]">
                Atendimento com horário agendado
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
