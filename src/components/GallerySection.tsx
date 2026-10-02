import React, { useState } from 'react';
import { Instagram, Plus, Image as ImageIcon, Sparkles, ArrowUpRight } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

export const GallerySection: React.FC = () => {
  // Allow uploading or displaying real authentic photos directly
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>({});

  const handleImageUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomPhotos(prev => ({ ...prev, [id]: event.target!.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="trabalhos" className="py-6 max-w-xl mx-auto px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9A7737]">
            <Sparkles className="w-3 h-3" />
            <span>Trabalhos Realizados</span>
          </div>
          <h2 className="text-base font-semibold text-[#2C2926]">
            Espaço de Fotografias Reais
          </h2>
        </div>

        <a
          href={STUDIO_DATA.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-[#9A7737] hover:text-[#7A5B23] flex items-center gap-1 transition-colors"
        >
          <Instagram className="w-3.5 h-3.5" />
          <span>Ver no Instagram</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Grid of clean reserved photo slots */}
      <div className="grid grid-cols-2 gap-3">
        {STUDIO_DATA.workPlaceholders.map((item) => {
          const uploadedImg = customPhotos[item.id];

          return (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-white border border-[#E8DED6] overflow-hidden shadow-2xs hover:border-[#C5A059] transition-all flex flex-col"
            >
              {/* Photo Area / Reserved slot */}
              <div className="relative aspect-square w-full bg-[#FAF6F0] flex flex-col items-center justify-center p-3 text-center overflow-hidden">
                {uploadedImg ? (
                  <img
                    src={uploadedImg}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-[#8A8279] p-2">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#E8DED6] flex items-center justify-center mb-2 shadow-2xs text-[#9A7737]">
                      <ImageIcon className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#2C2926]">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-[#9A7737] mt-0.5">
                      {item.tag}
                    </span>
                  </div>
                )}

                {/* Upload overlay button allowing real photo insertion */}
                <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer transition-opacity text-white p-2">
                  <Plus className="w-5 h-5 mb-1" />
                  <span className="text-[11px] font-medium text-center">
                    {uploadedImg ? 'Trocar foto real' : 'Inserir foto real'}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(item.id, e)}
                  />
                </label>
              </div>

              {/* Subtitle */}
              <div className="p-2.5 bg-white border-t border-[#F2ECE5]">
                <p className="text-[11px] text-[#6B635B] truncate font-light">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Callout to Instagram for live feed */}
      <div className="mt-4 p-3.5 rounded-xl bg-[#FAF6F0] border border-[#E8DED6] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Instagram className="w-4 h-4 text-[#C13584] shrink-0" />
          <span className="text-[#5D554D]">
            Acompanhe as publicações reais em <strong>@rachelcaetanonail</strong>
          </span>
        </div>
        <a
          href={STUDIO_DATA.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9A7737] font-semibold hover:underline whitespace-nowrap pl-2"
        >
          Acessar
        </a>
      </div>
    </section>
  );
};
