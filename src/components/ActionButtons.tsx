import React from 'react';
import { MessageCircle, Instagram, Search, ArrowUpRight, GraduationCap } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

export const ActionButtons: React.FC = () => {
  const buttons = [
    {
      label: "WhatsApp",
      description: "Agendar horário e atendimento",
      url: STUDIO_DATA.links.whatsapp,
      icon: MessageCircle,
      iconColor: "text-[#25D366]",
      iconBg: "bg-[#25D366]/10",
      badge: "Agendamento"
    },
    {
      label: "Curso de Alongamento Natural",
      description: "Informações, técnicas e vagas pelo WhatsApp",
      url: STUDIO_DATA.links.whatsappCourse,
      icon: GraduationCap,
      iconColor: "text-[#C5A059]",
      iconBg: "bg-[#C5A059]/15",
      badge: "Curso & Vagas"
    },
    {
      label: "Instagram",
      description: "Conhecer fotos reais dos trabalhos",
      url: STUDIO_DATA.links.instagram,
      icon: Instagram,
      iconColor: "text-[#E1306C]",
      iconBg: "bg-[#E1306C]/10",
      badge: "@rachelcaetanonail"
    },
    {
      label: "Google",
      description: "Rua Sergipe, 1087 · Savassi (Perfil e Avaliações)",
      url: STUDIO_DATA.links.google,
      icon: Search,
      iconColor: "text-[#4285F4]",
      iconBg: "bg-[#4285F4]/10",
      badge: "Savassi · BH"
    }
  ];

  return (
    <section className="py-4 max-w-xl mx-auto px-4">
      <div className="flex flex-col gap-3">
        {buttons.map((btn, idx) => {
          const Icon = btn.icon;
          return (
            <a
              key={idx}
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 sm:p-4.5 rounded-2xl bg-white border border-[#E8DED6] shadow-xs hover:border-[#C5A059] hover:shadow-sm transition-all duration-200 active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className={`w-11 h-11 rounded-xl ${btn.iconBg} ${btn.iconColor} flex items-center justify-center shrink-0`}>
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="text-left min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#2C2926] group-hover:text-[#9A7737] transition-colors truncate">
                      {btn.label}
                    </span>
                    <span className="text-[11px] font-normal text-[#9A7737] bg-[#FAF5ED] px-2 py-0.5 rounded-md whitespace-nowrap">
                      {btn.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#7B736A] mt-0.5 line-clamp-1">
                    {btn.description}
                  </p>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-[#FAFAF8] group-hover:bg-[#FAF5ED] flex items-center justify-center shrink-0 ml-2 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-[#9A7737] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
