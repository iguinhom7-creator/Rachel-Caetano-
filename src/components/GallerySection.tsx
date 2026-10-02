import React, { useState } from 'react';
import { Instagram, Sparkles, ArrowUpRight, X, Maximize2 } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

export const GallerySection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<{
    url: string;
    title: string;
    subtitle: string;
    tag: string;
  } | null>(null);

  return (
    <section id="trabalhos" className="py-6 max-w-xl mx-auto px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3.5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9A7737]">
            <Sparkles className="w-3 h-3" />
            <span>Apresentação dos Serviços</span>
          </div>
          <h2 className="text-base font-semibold text-[#2C2926]">
            Alongamento Natural & Acabamento
          </h2>
        </div>

        <a
          href={STUDIO_DATA.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-[#9A7737] hover:text-[#7A5B23] flex items-center gap-1 transition-colors"
        >
          <Instagram className="w-3.5 h-3.5" />
          <span>Instagram</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Grid of 4 square service cards */}
      <div className="grid grid-cols-2 gap-3">
        {STUDIO_DATA.workPlaceholders.map((item) => {
          return (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-white border border-[#E8DED6] overflow-hidden shadow-2xs hover:border-[#C5A059] transition-all flex flex-col"
            >
              {/* Square Photo Container */}
              <div 
                className="relative aspect-square w-full bg-[#FAF7F2] overflow-hidden cursor-pointer"
                onClick={() =>
                  setActivePhoto({
                    url: item.imageUrl || item.fallbackUrl,
                    title: item.title,
                    subtitle: item.subtitle,
                    tag: item.tag,
                  })
                }
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  onError={(e) => {
                    if (e.currentTarget.src !== item.fallbackUrl) {
                      e.currentTarget.src = item.fallbackUrl;
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Tag Badge */}
                <div className="absolute top-2 left-2 z-10 bg-white/95 backdrop-blur-xs text-[#2C2926] text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-2xs border border-[#E8DED6]">
                  {item.tag}
                </div>

                {/* Expand icon on hover/tap */}
                <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs text-[#2C2926] flex items-center justify-center shadow-xs opacity-80 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Subtitle / Details */}
              <div className="p-2.5 bg-white border-t border-[#F2ECE5]">
                <h4 className="text-xs font-semibold text-[#2C2926] truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#6B635B] truncate font-light mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Instagram feed link */}
      <div className="mt-3.5 p-3.5 rounded-xl bg-[#FAF6F0] border border-[#E8DED6] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 min-w-0">
          <Instagram className="w-4 h-4 text-[#C13584] shrink-0" />
          <span className="text-[#5D554D] truncate">
            Acompanhe mais trabalhos em <strong>@rachelcaetanonail</strong>
          </span>
        </div>
        <a
          href={STUDIO_DATA.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9A7737] font-semibold hover:underline whitespace-nowrap pl-2"
        >
          Ver perfil
        </a>
      </div>

      {/* Lightbox Modal for enlarged photo view */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-sm w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E8DED6]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              aria-label="Fechar visualização"
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 text-[#2C2926] flex items-center justify-center shadow-md hover:bg-white transition-transform active:scale-95"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-square w-full bg-[#FAF6F0] overflow-hidden">
              <img
                src={activePhoto.url}
                alt={activePhoto.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 text-center bg-white border-t border-[#F2ECE5]">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9A7737] bg-[#FAF5ED] px-2.5 py-0.5 rounded-full">
                {activePhoto.tag}
              </span>
              <h3 className="font-display text-base font-semibold text-[#2C2926] mt-1.5">
                {activePhoto.title}
              </h3>
              <p className="text-xs text-[#6B635B] mt-0.5 font-light">
                {activePhoto.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
