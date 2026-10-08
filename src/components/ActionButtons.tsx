import React from 'react';
import { Instagram, ArrowUpRight, MessageCircle, Star } from 'lucide-react';
import { RACHEL_DATA } from '../data/rachelData';

export const ActionButtons: React.FC = () => {
  const mainButtons = [
    {
      id: 'whatsapp',
      name: 'Agendar pelo WhatsApp',
      subtitle: 'Atendimento exclusivo com hora marcada',
      badge: 'Agendamento Direto',
      icon: MessageCircle,
      iconColor: 'text-[#25D366]',
      iconBg: 'bg-[#25D366]/10',
      badgeClass: 'text-[#1E9E4B] bg-[#EBFBF0]',
      url: RACHEL_DATA.links.whatsapp,
    },
    {
      id: 'instagram',
      name: 'Acompanhar no Instagram',
      subtitle: 'Stories diários, fotos reais e novidades da agenda',
      badge: RACHEL_DATA.instagramHandle,
      icon: Instagram,
      iconColor: 'text-[#E1306C]',
      iconBg: 'bg-[#E1306C]/10',
      badgeClass: 'text-[#C13584] bg-[#FDF2F5]',
      url: RACHEL_DATA.links.instagram,
    },
    {
      id: 'google',
      name: 'Avaliações & Localização',
      subtitle: '5.0 estrelas no Google Perfil de Empresa · BH',
      badge: 'Google 5.0 ★',
      icon: Star,
      iconColor: 'text-[#E37400]',
      iconBg: 'bg-[#FEF7E0]',
      badgeClass: 'text-[#B06000] bg-[#FEF7E0]',
      url: RACHEL_DATA.links.google,
    },
  ];

  return (
    <section className="py-4 max-w-2xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col gap-3">
        {mainButtons.map((btn) => {
          const Icon = btn.icon;

          return (
            <a
              key={btn.id}
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white border border-[#E8DDD1] shadow-2xs hover:border-[#C5A059] hover:shadow-xs transition-all duration-200 active:scale-[0.99] min-h-[72px]"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                {/* Icon box */}
                <div
                  className={`w-12 h-12 rounded-xl ${btn.iconBg} ${btn.iconColor} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105`}
                >
                  <Icon className="w-5 h-5 stroke-[2] fill-current/15" />
                </div>

                {/* Text information */}
                <div className="text-left min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-semibold text-[#24201E] group-hover:text-[#A8824B] transition-colors truncate">
                      {btn.name}
                    </span>
                    <span className={`text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md whitespace-nowrap ${btn.badgeClass}`}>
                      {btn.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#736B63] mt-0.5 line-clamp-1 font-light">
                    {btn.subtitle}
                  </p>
                </div>
              </div>

              {/* Arrow button */}
              <div className="w-9 h-9 rounded-full bg-[#FAF8F5] group-hover:bg-[#FAF4ED] flex items-center justify-center shrink-0 ml-2 transition-colors border border-[#EFE5D8]">
                <ArrowUpRight className="w-4 h-4 text-[#A8824B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
