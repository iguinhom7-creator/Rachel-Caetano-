import React, { useState } from 'react';
import { Maximize2, X, Instagram, MessageCircle, Sparkles, ArrowUpRight } from 'lucide-react';
import { RACHEL_DATA, GalleryItem } from '../data/rachelData';

export const GallerySection: React.FC = () => {
  const [items] = useState<GalleryItem[]>(RACHEL_DATA.galleryItems);
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = ['Todos', 'Esmaltação em Gel', 'Alongamento', 'Unhas Naturais'];

  const filteredItems = activeFilter === 'Todos'
    ? items
    : items.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria" className="py-16 sm:py-24 bg-white border-b border-[#E8DDD1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8824B] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portfólio Real</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#24201E] tracking-tight">
              Conheça meu trabalho
            </h2>
            <p className="font-display text-lg text-[#8C6B32] italic mt-1">
              Resultados reais de procedimentos com foco em naturalidade e beleza
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <a
              href={RACHEL_DATA.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-[#DFCA9B] text-[#24201E] hover:bg-[#FAF6EF] transition-colors shadow-2xs"
            >
              <Instagram className="w-4 h-4 text-[#E1306C]" />
              <span>Feed do Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8C6B32]" />
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center md:justify-start gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === cat
                  ? 'bg-[#24201E] text-white shadow-2xs'
                  : 'bg-[#FAF8F5] text-[#6B625B] hover:text-[#24201E] border border-[#E8DDD1]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Side by side (2 columns on mobile, 4 on desktop) and Square */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-[#E8DDD1] hover:border-[#C5A059] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Photo Display Frame - Square aspect ratio (1:1) */}
              <div className="relative aspect-square w-full bg-[#FAF8F5] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 contrast-[1.02] brightness-[1.01]"
                  onError={(e) => {
                    if (item.externalUrl && e.currentTarget.src !== item.externalUrl) {
                      e.currentTarget.src = item.externalUrl;
                    }
                  }}
                  loading={index < 4 ? 'eager' : 'lazy'}
                />

                {/* Overlaid badges */}
                <div className="absolute top-2 left-2 sm:top-3.5 sm:left-3.5 bg-white/95 backdrop-blur-xs text-[#24201E] text-[10px] sm:text-[11px] font-medium px-2 sm:px-2.5 py-0.5 rounded-full border border-[#E8DDD1] shadow-2xs truncate max-w-[85%]">
                  {item.category}
                </div>

                <div className="absolute top-2 right-2 sm:top-3.5 sm:right-3.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-xs text-[#24201E] flex items-center justify-center shadow-2xs opacity-85 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C6B32]" />
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-2.5 sm:p-4 bg-white border-t border-[#F3ECE4] text-left">
                <h3 className="font-display text-xs sm:text-base font-semibold text-[#24201E] group-hover:text-[#A8824B] transition-colors truncate">
                  {item.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-[#736B63] font-light truncate mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E8DDD1]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              aria-label="Fechar foto ampliada"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/95 text-[#24201E] flex items-center justify-center shadow-md hover:bg-white active:scale-95 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Enlarged Photo - Square format */}
            <div className="aspect-square max-h-[65vh] w-full bg-[#FAF8F5] overflow-hidden flex items-center justify-center">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  if (selectedPhoto.externalUrl && e.currentTarget.src !== selectedPhoto.externalUrl) {
                    e.currentTarget.src = selectedPhoto.externalUrl;
                  }
                }}
              />
            </div>

            {/* Modal Info & Direct WhatsApp CTA */}
            <div className="p-5 sm:p-6 text-center bg-white border-t border-[#F3ECE4] space-y-3">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A8824B]">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-display text-2xl font-semibold text-[#24201E] mt-0.5">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#736B63] font-light mt-0.5">
                  {selectedPhoto.subtitle}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`${RACHEL_DATA.links.whatsapp}?text=${encodeURIComponent(
                    `Olá Rachel! Vi a foto de "${selectedPhoto.title}" no seu biosite e gostaria de agendar esse modelo!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide btn-gold-luxury flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar este modelo no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
