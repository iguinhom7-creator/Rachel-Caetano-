import React from 'react';
import { X, Play, MessageCircle } from 'lucide-react';
import { ANGELICA_DATA } from '../data/angelicaData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-sm w-full bg-[#1A1816] rounded-3xl overflow-hidden shadow-2xl border border-white/10 text-white flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DFCCA6] via-[#C8A97E] to-[#B69363]" />

        {/* Header */}
        <div className="flex items-center justify-between p-4 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-full bg-[#A8824B]/20 text-[#DFCCA6] flex items-center justify-center shrink-0">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-white truncate font-display">
                Conheça nosso Espaço
              </h3>
              <p className="text-[11px] text-[#A89F95] font-light truncate">
                Studio Angélica Souza Nails
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Fechar vídeo"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0 ml-2 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player (Vertical 9:16 Reel ratio) */}
        <div className="relative w-full aspect-[9/16] bg-black overflow-hidden max-h-[70vh]">
          <iframe
            src={ANGELICA_DATA.links.vimeoEmbed}
            title="Apresentação do Espaço - Angélica Souza Nails"
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Actions Footer */}
        <div className="p-3.5 bg-[#23201D] border-t border-white/10">
          <a
            href={ANGELICA_DATA.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs flex items-center justify-center gap-2 transition-transform active:scale-98 shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Agendar meu Horário no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
