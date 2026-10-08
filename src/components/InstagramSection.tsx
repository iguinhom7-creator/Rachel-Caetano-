import React from 'react';
import { Instagram, ArrowUpRight, Sparkles } from 'lucide-react';
import { ANGELICA_DATA } from '../data/angelicaData';

export const InstagramSection: React.FC = () => {
  const previewImages = [
    { 
      url: '/images/angelica/trabalho_1.png', 
      fallback: 'https://i.postimg.cc/7LCtD1h8/IMG-1852.png',
      objectPosition: 'object-[center_60%]'
    },
    { 
      url: '/images/angelica/trabalho_2.jpg', 
      fallback: 'https://i.postimg.cc/zfL25wB9/IMG-1848.jpg',
      objectPosition: 'object-center'
    },
    { 
      url: '/images/angelica/trabalho_3.jpg', 
      fallback: 'https://i.postimg.cc/YS4DkN95/IMG-1854.jpg',
      objectPosition: 'object-center'
    },
    { 
      url: '/images/angelica/trabalho_4.jpg', 
      fallback: 'https://i.postimg.cc/tg1vydTS/IMG-1847.jpg',
      objectPosition: 'object-[45%_72%]' // Centraliza perfeitamente a unha vermelha sem cortar
    }
  ];

  return (
    <section id="instagram" className="py-14 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C2724]">
            {ANGELICA_DATA.instagramSection.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6B615A] font-light">
            {ANGELICA_DATA.instagramSection.description}
          </p>
        </div>

        {/* Profile Card with Feed Photos */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-5 sm:p-7 border border-[#EAE2D8] shadow-xs">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b border-[#F5ECE8] text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden bg-white border border-white">
                  <img
                    src={ANGELICA_DATA.profilePhoto}
                    alt="Angélica Souza Instagram"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = ANGELICA_DATA.fallbackProfilePhoto;
                    }}
                  />
                </div>
              </div>
              <div>
                <a
                  href={ANGELICA_DATA.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-base text-[#2C2724] hover:text-[#A8824B] flex items-center justify-center sm:justify-start gap-1.5 transition-colors"
                >
                  <span>angelica_souzanails</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
                </a>
                <p className="text-xs text-[#8C7F75] font-light mt-0.5">
                  Nail Designer · Especialista em Alongamento Natural
                </p>
              </div>
            </div>

            <a
              href={ANGELICA_DATA.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-[#E1306C] to-[#C13584] text-white shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Instagram className="w-4 h-4 fill-current" />
              <span>{ANGELICA_DATA.instagramSection.cta}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Photos below the Instagram profile */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {previewImages.map((img, i) => (
              <a
                key={i}
                href={ANGELICA_DATA.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden bg-[#FAF7F2] border border-[#EAE2D8]"
              >
                <img
                  src={img.url}
                  alt={`Instagram Angélica Souza ${i + 1}`}
                  onError={(e) => {
                    e.currentTarget.src = img.fallback;
                  }}
                  className={`w-full h-full object-cover ${img.objectPosition} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-1.5 text-xs font-medium">
                  <Instagram className="w-4 h-4" />
                  <span>Ver post</span>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
