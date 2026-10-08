import React from 'react';
import { Star, MessageSquareQuote, ExternalLink, CheckCircle } from 'lucide-react';
import { RACHEL_DATA } from '../data/rachelData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-16 sm:py-24 bg-white border-b border-[#E8DDD1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8824B] mb-2">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Depoimentos & Confiança</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#24201E] tracking-tight">
            O que minhas clientes dizem
          </h2>
          <p className="font-display text-lg text-[#8C6B32] italic mt-1.5">
            Experiências reais de cuidado, elegância e acolhimento
          </p>

          {/* Google Rating Badge */}
          <div className="mt-5 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#FAF8F5] border border-[#E8DDD1] shadow-2xs">
            <div className="flex items-center gap-1 text-[#E37400]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#24201E]">
              5.0 Estrelas no Google
            </span>
            <span className="text-xs text-[#736B63] font-light">
              · Perfil Verificado BH
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {RACHEL_DATA.reviews.items.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#FAF8F5] border border-[#E8DDD1] hover:border-[#C5A059] shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1 text-[#C5A059] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-xs sm:text-sm text-[#4A433E] font-light leading-relaxed italic">
                  “{review.comment}”
                </blockquote>
              </div>

              {/* Author & Verified Service */}
              <div className="mt-6 pt-4 border-t border-[#F3ECE4] flex items-center justify-between">
                <div>
                  <h4 className="font-display text-base font-semibold text-[#24201E]">
                    {review.author}
                  </h4>
                  {review.service && (
                    <p className="text-[11px] text-[#8C6B32] font-medium">
                      {review.service}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-1 text-[11px] text-[#1E9E4B] bg-[#EBFBF0] px-2.5 py-0.5 rounded-full font-medium">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verificada</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Google Reviews Button */}
        <div className="text-center">
          <a
            href={RACHEL_DATA.links.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wide btn-gold-luxury shadow-sm active:scale-98 transition-all"
          >
            <Star className="w-4 h-4 fill-current/30" />
            <span>VER AVALIAÇÕES NO GOOGLE</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-xs text-[#8C7F75] font-light mt-3">
            Toque para abrir a página oficial do estúdio e conferir comentários reais de clientes no Google.
          </p>
        </div>
      </div>
    </section>
  );
};
