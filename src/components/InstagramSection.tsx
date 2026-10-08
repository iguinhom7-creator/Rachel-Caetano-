import React from 'react';
import { Instagram, ArrowUpRight, Sparkles, Heart } from 'lucide-react';
import { RACHEL_DATA } from '../data/rachelData';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-white border border-[#E8DDD1] p-8 sm:p-12 shadow-sm overflow-hidden text-center">
          {/* Subtle ambient corner glow */}
          <div
            className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-[#E1306C]/10 via-[#F3E9DD]/40 to-transparent rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Instagram Icon Badge */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FDF2F5] to-[#FAF8F5] border border-[#E8DDD1] mx-auto flex items-center justify-center text-[#E1306C] shadow-2xs mb-5">
            <Instagram className="w-8 h-8 stroke-[1.8]" />
          </div>

          {/* Heading */}
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8824B] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Rede Social & Dia a Dia</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#24201E] tracking-tight">
            Acompanhe meu trabalho no Instagram
          </h2>

          <p className="font-display text-lg sm:text-xl text-[#8C6B32] italic mt-1.5">
            Inspirações diárias, procedimentos ao vivo nos stories e resultados dos atendimentos
          </p>

          <p className="mt-3 text-xs sm:text-sm text-[#6B625B] font-light max-w-md mx-auto">
            Siga <span className="font-semibold text-[#24201E]">{RACHEL_DATA.instagramHandle}</span> e fique por dentro de vagas na agenda, técnicas exclusivas e dicas de cuidados para as unhas.
          </p>

          {/* Featured Works Mini-Strip */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {RACHEL_DATA.galleryItems.slice(0, 4).map((work) => (
              <a
                key={work.id}
                href={RACHEL_DATA.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden border border-[#E8DDD1] bg-[#FAF8F5] block"
              >
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
              </a>
            ))}
          </div>

          {/* Primary Instagram Follow Button */}
          <div className="mt-8 flex justify-center">
            <a
              href={RACHEL_DATA.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase btn-gold-luxury flex items-center justify-center gap-2.5 shadow-md active:scale-98 transition-all"
            >
              <Instagram className="w-4.5 h-4.5" />
              <span>SEGUIR NO INSTAGRAM</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
