import React, { useState } from 'react';
import { Calendar, Sparkles, X, Maximize2, MapPin } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

export const Hero: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(STUDIO_DATA.photoUrl);
  const [showFullPhoto, setShowFullPhoto] = useState(false);

  const handleError = () => {
    if (imgSrc !== STUDIO_DATA.fallbackPhotoUrl) {
      setImgSrc(STUDIO_DATA.fallbackPhotoUrl);
    }
  };

  return (
    <section id="topo" className="pt-6 pb-4 sm:pt-10 sm:pb-6 text-center max-w-xl mx-auto px-4">
      {/* Centralized Square Photo Frame */}
      <div className="flex justify-center mb-5">
        <div className="relative group">
          <div className="p-1 rounded-2xl bg-gradient-to-b from-[#DFCA9B] via-[#F8F2EA] to-[#C5A059] shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-[14px] bg-[#F5EEE4] overflow-hidden relative cursor-pointer"
                 onClick={() => setShowFullPhoto(true)}
                 title="Toque para ver a foto completa"
            >
              <img
                src={imgSrc}
                alt="Rachel Caetano Nail Designer"
                className={`w-full h-full object-cover object-[center_18%] transition-all duration-500 group-hover:scale-105 ${
                  imgLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImgLoaded(true)}
                onError={handleError}
                referrerPolicy="no-referrer"
              />

              {/* Discreet expand affordance on hover/tap */}
              <div className="absolute bottom-1.5 right-1.5 w-6 h-6 rounded-md bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Studio Name */}
      <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#2C2926] leading-snug">
        Rachel Caetano
        <span className="block text-base sm:text-lg font-normal text-[#6B635B] mt-0.5 font-sans">
          Nail Designer
        </span>
      </h1>

      {/* Specialty Highlight */}
      <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-[#9A7737] uppercase">
        <Sparkles className="w-3 h-3 text-[#C5A059]" />
        <span>Especialista em Unhas Naturais</span>
        <Sparkles className="w-3 h-3 text-[#C5A059]" />
      </div>

      {/* Studio Address in Savassi BH */}
      <div className="mt-2">
        <a 
          href={STUDIO_DATA.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[#6B635B] hover:text-[#9A7737] bg-white border border-[#E8DED6] px-3 py-1 rounded-full shadow-2xs transition-colors group"
        >
          <MapPin className="w-3.5 h-3.5 text-[#C5A059] group-hover:scale-110 transition-transform shrink-0" />
          <span>Rua Sergipe, 1087 · Savassi, BH</span>
        </a>
      </div>

      {/* Golden Appointment Button */}
      <div className="mt-5">
        <a
          href={STUDIO_DATA.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-luxury w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all active:scale-[0.99]"
        >
          <Calendar className="w-4 h-4" />
          <span>Agendar horário</span>
        </a>
      </div>

      {/* Modal to view full vertical portrait */}
      {showFullPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setShowFullPhoto(false)}
        >
          <div 
            className="relative max-w-sm w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E8DED6]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowFullPhoto(false)}
              aria-label="Fechar"
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 text-[#2C2926] flex items-center justify-center shadow-md hover:bg-white transition-transform active:scale-95"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-[9/16] max-h-[80vh] w-full bg-[#FAF6F0] overflow-hidden">
              <img
                src={imgSrc}
                alt="Rachel Caetano Nail Designer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-4 text-center bg-white border-t border-[#F2ECE5]">
              <h3 className="font-display text-lg font-semibold text-[#2C2926]">
                Rachel Caetano
              </h3>
              <p className="text-xs text-[#9A7737] font-medium">
                Especialista em Unhas Naturais
              </p>
              <p className="text-[11px] text-[#8A8279] mt-0.5">
                Rua Sergipe, 1087 · Savassi, BH
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
