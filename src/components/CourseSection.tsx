import React from 'react';
import { GraduationCap, MessageCircle, ArrowRight } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

export const CourseSection: React.FC = () => {
  return (
    <section id="cursos" className="py-5 max-w-xl mx-auto px-4">
      <div className="relative rounded-2xl bg-gradient-to-br from-[#FAF6F0] via-white to-[#F5EEE4] border border-[#E2D2B5] p-5 sm:p-6 shadow-xs overflow-hidden">
        {/* Subtle decorative gold sheen */}
        <div 
          className="absolute -top-12 -right-12 w-32 h-32 bg-[#DFCA9B]/20 rounded-full blur-2xl pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#9A7737] bg-white/80 px-2.5 py-1 rounded-md border border-[#E8DED6]">
              <GraduationCap className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Capacitação Profissional</span>
            </span>
            <span className="text-[11px] text-[#8A8279]">
              Vagas limitadas
            </span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#2C2926] mt-1">
            {STUDIO_DATA.course.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#5D554D] font-light mt-2 leading-relaxed">
            {STUDIO_DATA.course.description}
          </p>

          <div className="mt-4 pt-3.5 border-t border-[#E8DED6]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-xs text-[#7B736A]">
              Informações sobre datas, formato e valores diretamente com a profissional.
            </p>

            <a
              href={STUDIO_DATA.links.whatsappCourse}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-luxury inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap shadow-xs hover:shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Falar sobre o curso no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
