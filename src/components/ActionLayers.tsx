import React from 'react';
import { Instagram, Search, ArrowUpRight, MessageCircle, Play } from 'lucide-react';
import { ANGELICA_DATA } from '../data/angelicaData';

interface ActionLayersProps {
  onOpenBooking: () => void;
  onOpenVideo?: () => void;
}

export const ActionLayers: React.FC<ActionLayersProps> = ({ onOpenVideo }) => {
  const layers = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      description: 'Agendamento de horários, dúvidas e atendimento direto',
      badge: '(31) 99096-9136',
      icon: MessageCircle,
      iconColor: 'text-[#25D366]',
      iconBg: 'bg-[#25D366]/12',
      badgeBg: 'bg-[#EBFBF0] text-[#1E9E4B]',
      url: ANGELICA_DATA.links.whatsapp,
      isExternal: true,
    },
    {
      id: 'espaco',
      label: 'Conhecer nosso Espaço',
      description: 'Vídeo de apresentação e tour pelo Studio exclusivo',
      badge: 'Vídeo do Studio',
      icon: Play,
      iconColor: 'text-[#A8824B]',
      iconBg: 'bg-[#A8824B]/15',
      badgeBg: 'bg-[#FAF5ED] text-[#A8824B]',
      isExternal: false,
      onClick: onOpenVideo,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      description: 'Conhecer fotos reais dos trabalhos e novidades',
      badge: '@angelica_souzanails',
      icon: Instagram,
      iconColor: 'text-[#E1306C]',
      iconBg: 'bg-[#E1306C]/10',
      badgeBg: 'bg-[#FDF2F5] text-[#E1306C]',
      url: ANGELICA_DATA.links.instagram,
      isExternal: true,
    },
    {
      id: 'google',
      label: 'Google',
      description: 'Rua Joaquim de Paula, 369 – Inconfidência (Perfil e Localização)',
      badge: 'Ver no Google',
      icon: Search,
      iconColor: 'text-[#4285F4]',
      iconBg: 'bg-[#4285F4]/10',
      badgeBg: 'bg-[#F0F5FE] text-[#4285F4]',
      url: ANGELICA_DATA.links.googleMaps,
      isExternal: true,
    },
  ];

  return (
    <section className="py-6 max-w-2xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col gap-3 sm:gap-3.5">
        {layers.map((layer) => {
          const Icon = layer.icon;

          if (layer.isExternal && layer.url) {
            return (
              <a
                key={layer.id}
                href={layer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 sm:p-4.5 rounded-2xl bg-white border border-[#EAE2D8] shadow-2xs hover:border-[#C8A97E] hover:shadow-xs transition-all duration-200 active:scale-[0.99]"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className={`w-11 h-11 rounded-xl ${layer.iconBg} ${layer.iconColor} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105`}>
                    <Icon className="w-5 h-5 stroke-[2] fill-current/15" />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-[#2C2724] group-hover:text-[#A8824B] transition-colors truncate">
                        {layer.label}
                      </span>
                      <span className={`text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md whitespace-nowrap ${layer.badgeBg}`}>
                        {layer.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#7A6F66] mt-0.5 line-clamp-1 font-light">
                      {layer.description}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#FAF7F2] group-hover:bg-[#FAF5ED] flex items-center justify-center shrink-0 ml-2 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[#A8824B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          }

          return (
            <button
              key={layer.id}
              onClick={layer.onClick}
              className="group flex items-center justify-between p-4 sm:p-4.5 rounded-2xl bg-white border border-[#EAE2D8] shadow-2xs hover:border-[#C8A97E] hover:shadow-xs transition-all duration-200 active:scale-[0.99] text-left w-full cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className={`w-11 h-11 rounded-xl ${layer.iconBg} ${layer.iconColor} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105`}>
                  <Icon className="w-5 h-5 stroke-[2] fill-current/25" />
                </div>
                <div className="text-left min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#2C2724] group-hover:text-[#A8824B] transition-colors truncate">
                      {layer.label}
                    </span>
                    <span className={`text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md whitespace-nowrap ${layer.badgeBg}`}>
                      {layer.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#7A6F66] mt-0.5 line-clamp-1 font-light">
                    {layer.description}
                  </p>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-[#FAF7F2] group-hover:bg-[#FAF5ED] flex items-center justify-center shrink-0 ml-2 transition-colors">
                <Play className="w-3.5 h-3.5 text-[#A8824B] fill-current group-hover:scale-110 transition-transform ml-0.5" />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
