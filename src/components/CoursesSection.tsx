import React from 'react';
import { GraduationCap, Sparkles, CheckCircle2, Users, BookOpen, MessageCircle, ArrowRight } from 'lucide-react';
import { RACHEL_DATA } from '../data/rachelData';

export const CoursesSection: React.FC = () => {
  return (
    <section id="cursos" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8824B] mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Educação & Mentoria</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#24201E] tracking-tight">
            {RACHEL_DATA.courses.heading}
          </h2>
          <p className="font-display text-lg text-[#8C6B32] italic mt-1.5">
            {RACHEL_DATA.courses.subheading}
          </p>
          <p className="mt-3 text-xs sm:text-sm text-[#6B625B] font-light max-w-xl mx-auto leading-relaxed">
            {RACHEL_DATA.courses.intro}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {RACHEL_DATA.courses.items.map((course) => {
            const whatsappMessage = encodeURIComponent(
              `Olá Rachel! Gostaria de saber mais informações sobre o curso: "${course.title}".`
            );
            const courseInquiryUrl = `${RACHEL_DATA.links.whatsapp}?text=${whatsappMessage}`;

            return (
              <div
                key={course.id}
                className="rounded-3xl bg-white border border-[#E8DDD1] hover:border-[#C5A059] p-7 sm:p-8 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Top Bar with Badge & Modality */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#FAF4ED] text-[#8C6B32] border border-[#E8DDD1]">
                      {course.badge || 'Formação Profissional'}
                    </span>
                    <span className="text-xs text-[#736B63] font-medium flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                      {course.modality}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#24201E] group-hover:text-[#A8824B] transition-colors leading-tight">
                      {course.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#736B63] font-light">
                      {course.subtitle}
                    </p>
                  </div>

                  {/* Target Audience */}
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DDD1]/80">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A8824B] mb-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>Para quem é o curso</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#524B45] font-light leading-relaxed">
                      {course.targetAudience}
                    </p>
                  </div>

                  {/* Techniques Taught */}
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A8824B] mb-3">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Técnicas ensinadas</span>
                    </div>
                    <ul className="space-y-2">
                      {course.techniques.map((tech, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A433E]">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Enrollment Information */}
                  <div className="pt-2 text-xs text-[#736B63] font-light flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059] shrink-0" />
                    <span>{course.enrollmentInfo}</span>
                  </div>
                </div>

                {/* Primary Button: "Quero saber mais" */}
                <div className="mt-8 pt-5 border-t border-[#F3ECE4]">
                  <a
                    href={courseInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wide btn-gold-luxury flex items-center justify-center gap-2 shadow-sm text-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Quero saber mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Mentorship Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8DDD1] shadow-2xs text-center max-w-2xl mx-auto">
          <GraduationCap className="w-8 h-8 text-[#A8824B] mx-auto mb-2" />
          <h4 className="font-display text-xl sm:text-2xl font-semibold text-[#24201E]">
            Mentoria VIP Personalizada
          </h4>
          <p className="text-xs sm:text-sm text-[#736B63] font-light mt-1.5 leading-relaxed">
            Deseja uma formação sob medida focada exatamente nas suas dificuldades práticas? Agende uma mentoria individual com Rachel Caetano.
          </p>
          <div className="mt-5">
            <a
              href={`${RACHEL_DATA.links.whatsapp}?text=${encodeURIComponent(
                'Olá Rachel! Gostaria de consultar informações sobre Mentoria VIP Individual em Nail Design.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide btn-gold-luxury"
            >
              <span>Consultar Mentoria VIP no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
