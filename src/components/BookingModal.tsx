import React from 'react';
import { X, Instagram, MapPin, Sparkles, ArrowUpRight, Copy, Check, MessageCircle } from 'lucide-react';
import { ANGELICA_DATA } from '../data/angelicaData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(ANGELICA_DATA.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-md w-full bg-[#FAF7F2] rounded-3xl p-6 sm:p-7 border border-[#EAE2D8] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DFCCA6] via-[#C8A97E] to-[#B69363]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border border-[#EAE2D8] text-[#2C2724] flex items-center justify-center hover:bg-[#F5ECE8] active:scale-95 transition-all shadow-2xs"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center pt-2 pb-5 border-b border-[#EAE2D8]">
          <div className="w-14 h-14 rounded-2xl mx-auto mb-3 overflow-hidden border border-[#EAE2D8] bg-white shadow-2xs">
            <img
              src={ANGELICA_DATA.profilePhoto}
              alt="Angélica Souza"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = ANGELICA_DATA.fallbackProfilePhoto;
              }}
            />
          </div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#A8824B] mb-1">
            <Sparkles className="w-3 h-3" />
            <span>Agendamento de Horário</span>
          </div>
          <h3 className="font-display text-2xl font-semibold text-[#2C2724]">
            Angélica Souza Nails
          </h3>
          <p className="text-xs text-[#6B615A] font-light mt-1">
            Especialista em Alongamento Natural
          </p>
        </div>

        {/* Modal Body */}
        <div className="py-5 space-y-4">
          <p className="text-xs sm:text-sm text-[#4A433D] font-light text-center leading-relaxed">
            Os agendamentos são realizados diretamente com a Angélica pelo <strong>Instagram Direct</strong>. Envie uma mensagem informando o procedimento desejado ou suas preferências.
          </p>

          {/* Direct CTA Button */}
          <a
            href={ANGELICA_DATA.links.instagramDirect}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-[#F56040] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs hover:opacity-95 hover:scale-[1.01] active:scale-98 transition-all"
          >
            <Instagram className="w-4 h-4 fill-current" />
            <span>Chamar no Instagram Direct</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Alternative Profile Link */}
          <a
            href={ANGELICA_DATA.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#F5ECE8] border border-[#EAE2D8] text-[#2C2724] font-medium text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <span>Ver perfil completo {ANGELICA_DATA.instagramHandle}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#8C7F75]" />
          </a>

          {/* Address box */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#EAE2D8] flex items-center justify-between text-left">
            <div className="flex items-center gap-2.5 min-w-0">
              <MapPin className="w-4 h-4 text-[#A8824B] shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-semibold text-[#8C7F75]">Studio em BH</p>
                <p className="text-xs text-[#2C2724] font-medium truncate">{ANGELICA_DATA.address}</p>
              </div>
            </div>

            <button
              onClick={handleCopyAddress}
              className="text-[11px] font-semibold text-[#A8824B] hover:text-[#7D5E2F] pl-2 whitespace-nowrap"
            >
              {copied ? 'Copiado!' : 'Copiar'}
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-[#EAE2D8] text-center">
          <button
            onClick={onClose}
            className="text-xs text-[#8C7F75] hover:text-[#2C2724] transition-colors"
          >
            Voltar ao site
          </button>
        </div>
      </div>
    </div>
  );
};
