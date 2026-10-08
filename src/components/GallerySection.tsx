import React, { useState } from 'react';
import { Maximize2, X, ExternalLink } from 'lucide-react';
import { ANGELICA_DATA, WorkPhoto } from '../data/angelicaData';

interface GallerySectionProps {
  onOpenBooking: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<WorkPhoto | null>(null);

  return (
    <section id="trabalhos" className="py-14 sm:py-20 bg-white/60 border-t border-[#EAE2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3 text-center sm:text-left">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2C2724]">
              Alongamentos Naturais
            </h2>
            <p className="font-display text-base sm:text-lg text-[#8C7F75] italic mt-0.5">
              Detalhes, acabamento fino e naturalidade.
            </p>
          </div>

          <div>
            <a
              href={ANGELICA_DATA.links.gallery}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A8824B] hover:text-[#7D5E2F] transition-colors py-1"
            >
              <span>Ver no Postimages</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Square Photos Grid (pure aspect-square cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {ANGELICA_DATA.gallery.items.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-white border border-[#EAE2D8] hover:border-[#C8A97E] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <div
                className="relative aspect-square w-full bg-[#FAF7F2] overflow-hidden cursor-pointer"
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
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle tag */}
                <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-[#2C2724] text-[10px] font-semibold px-2 py-0.5 rounded-full border border-[#EAE2D8] shadow-2xs">
                  Foto 0{index + 1}
                </div>

                {/* Expand icon */}
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs text-[#2C2724] flex items-center justify-center shadow-xs opacity-75 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#EAE2D8]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              aria-label="Fechar foto"
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 text-[#2C2724] flex items-center justify-center shadow-md hover:bg-white active:scale-95 transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-square w-full bg-[#FAF7F2] overflow-hidden">
              <img
                src={selectedPhoto.localUrl}
                alt={selectedPhoto.title}
                onError={(e) => {
                  e.currentTarget.src = selectedPhoto.fallbackUrl;
                }}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 text-center bg-white border-t border-[#F5ECE8] space-y-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A8824B] bg-[#FAF7F2] border border-[#EAE2D8] px-2.5 py-0.5 rounded-full">
                Alongamento Natural
              </span>
              <div>
                <button
                  onClick={() => {
                    setSelectedPhoto(null);
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 rounded-full text-xs font-semibold tracking-wide btn-gold-luxury"
                >
                  Agendar com a Angélica
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
