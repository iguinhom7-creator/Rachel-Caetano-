import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ExternalLink, ArrowRight } from 'lucide-react';
import { ANGELICA_DATA, WorkPhoto } from '../data/angelicaData';

interface GallerySectionProps {
  onOpenBooking: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<WorkPhoto | null>(null);

  return (
    <section id="trabalhos" className="py-16 sm:py-24 bg-white/60 border-t border-[#EAE2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8824B] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Galeria de Atendimentos</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C2724]">
              {ANGELICA_DATA.gallery.title}
            </h2>
            <p className="font-display text-lg sm:text-xl text-[#8C7F75] italic mt-1">
              {ANGELICA_DATA.gallery.subtitle}
            </p>
          </div>

          <div>
            <a
              href={ANGELICA_DATA.links.gallery}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A8824B] hover:text-[#7D5E2F] transition-colors py-1"
            >
              <span>Ver galeria no Postimages</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Gallery Grid: 4 high definition cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {ANGELICA_DATA.gallery.items.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-white border border-[#EAE2D8] hover:border-[#C8A97E] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Photo Area */}
              <div
                className="relative aspect-[4/5] w-full bg-[#FAF7F2] overflow-hidden cursor-pointer"
                onClick={() => setSelectedPhoto(item)}
              >
                <img
                  src={item.localUrl}
                  alt={item.title}
                  onError={(e) => {
                    if (e.currentTarget.src !== item.fallbackUrl) {
                      e.currentTarget.src = item.fallbackUrl;
                    }
                  }}
                  className={`w-full h-full object-cover ${item.objectPosition || 'object-center'} transition-transform duration-700 group-hover:scale-105`}
                  loading="lazy"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Category tag */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#2C2724] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-[#EAE2D8] shadow-2xs">
                  {item.category}
                </div>

                {/* Zoom button */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs text-[#2C2724] flex items-center justify-center shadow-xs opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-[11px] text-white/90 font-light truncate">Toque para ampliar</p>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-4 bg-white border-t border-[#F5ECE8] flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[10px] text-[#A8824B] font-medium uppercase tracking-wider">
                    Foto 0{index + 1}
                  </span>
                  <h4 className="font-display text-base font-semibold text-[#2C2724] mt-0.5 leading-snug">
                    {item.title}
                  </h4>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#FAF7F2] flex items-center justify-between">
                  <span className="text-[11px] text-[#8C7F75] font-light">
                    Resultado 100% Real
                  </span>
                  <button
                    onClick={() => setSelectedPhoto(item)}
                    className="text-xs font-semibold text-[#A8824B] hover:underline cursor-pointer"
                  >
                    Ampliar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery bottom callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D8] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#2C2724]">
              Gostou de algum modelo ou formato?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B615A] font-light max-w-xl">
              Salve a foto de referência e converse diretamente com a Angélica para personalizar o formato e tamanho ideal para as suas unhas.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-full text-xs font-semibold tracking-wide btn-gold-luxury whitespace-nowrap shadow-xs flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Agendar com referência</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-md sm:max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#EAE2D8]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              aria-label="Fechar foto"
              className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs text-[#2C2724] flex items-center justify-center shadow-md hover:bg-white active:scale-95 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Enlarged image */}
            <div className="aspect-[3/4] w-full bg-[#FAF7F2] overflow-hidden">
              <img
                src={selectedPhoto.localUrl}
                alt={selectedPhoto.title}
                onError={(e) => {
                  e.currentTarget.src = selectedPhoto.fallbackUrl;
                }}
                className={`w-full h-full object-cover ${selectedPhoto.objectPosition || 'object-center'}`}
              />
            </div>

            {/* Modal caption */}
            <div className="p-5 text-center bg-white border-t border-[#F5ECE8] space-y-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A8824B] bg-[#FAF7F2] border border-[#EAE2D8] px-2.5 py-0.5 rounded-full">
                {selectedPhoto.category}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-[#2C2724] pt-0.5">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs text-[#8C7F75] font-light">
                Procedimento realizado por Angélica Souza · Acabamento natural e delicado
              </p>

              <div className="pt-2.5">
                <button
                  onClick={() => {
                    setSelectedPhoto(null);
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 rounded-full text-xs font-semibold tracking-wide btn-gold-luxury cursor-pointer"
                >
                  Quero unhas assim · Agendar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
