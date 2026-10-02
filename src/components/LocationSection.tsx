import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ArrowUpRight } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("Rua Sergipe, 1087, Savassi, Belo Horizonte - MG");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="localizacao" className="py-4 max-w-xl mx-auto px-4">
      <div className="rounded-2xl bg-white border border-[#E8DED6] p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-[#FAF0E1] text-[#9A7737] flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 stroke-[2]" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9A7737]">
              Localização do Estúdio
            </span>
            <h3 className="text-sm sm:text-base font-semibold text-[#2C2926] mt-0.5">
              Rua Sergipe, 1087 · Savassi
            </h3>
            <p className="text-xs text-[#7B736A] mt-0.5">
              Belo Horizonte - MG · Atendimento com hora marcada
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#F2ECE5]">
          <button
            onClick={handleCopy}
            className="flex-1 sm:flex-initial py-2 px-3 rounded-xl border border-[#E8DED6] bg-[#FAFAF8] hover:bg-[#F2ECE5] text-xs font-medium text-[#5D554D] flex items-center justify-center gap-1.5 transition-colors"
            title="Copiar endereço completo"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#8A8279]" />
                <span>Copiar</span>
              </>
            )}
          </button>

          <a
            href={STUDIO_DATA.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial btn-gold-luxury py-2 px-3.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-2xs whitespace-nowrap"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Ver Rota</span>
          </a>
        </div>
      </div>
    </section>
  );
};
