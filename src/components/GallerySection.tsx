import React, { useState, useEffect } from 'react';
import { Instagram, Camera, Sparkles, ArrowUpRight, X, Maximize2, Upload, Link as LinkIcon, Check } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';
import { savePhoto, getAllPhotos, compressImage } from '../utils/imageStorage';

export const GallerySection: React.FC = () => {
  const [photos, setPhotos] = useState<Record<string, string>>({});
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [urlModalId, setUrlModalId] = useState<string | null>(null);
  const [urlInput, setUrlInput] = useState('');

  const [activePhoto, setActivePhoto] = useState<{
    url: string;
    title: string;
    subtitle: string;
    tag: string;
  } | null>(null);

  useEffect(() => {
    const ids = STUDIO_DATA.workPlaceholders.map((w) => w.id);
    getAllPhotos(ids).then((saved) => {
      setPhotos(saved);
    });
  }, []);

  const handleFileUpload = async (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setLoadingId(id);
      // Keep maximum resolution and natural quality without re-encoding distortions
      const compressedDataUrl = await compressImage(file, 1600, 0.92);
      await savePhoto(id, compressedDataUrl);
      setPhotos((prev) => ({ ...prev, [id]: compressedDataUrl }));
    } catch (err) {
      console.error('Erro ao salvar foto:', err);
    } finally {
      setLoadingId(null);
    }
  };

  const handleSaveUrl = async (id: string) => {
    if (!urlInput.trim()) return;
    const url = urlInput.trim();
    await savePhoto(id, url);
    setPhotos((prev) => ({ ...prev, [id]: url }));
    setUrlModalId(null);
    setUrlInput('');
  };

  return (
    <section id="trabalhos" className="py-6 max-w-xl mx-auto px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9A7737]">
            <Sparkles className="w-3 h-3" />
            <span>Apresentação dos Serviços</span>
          </div>
          <h2 className="text-base font-semibold text-[#2C2926]">
            Fotografias Reais dos Trabalhos
          </h2>
        </div>

        <a
          href={STUDIO_DATA.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-[#9A7737] hover:text-[#7A5B23] flex items-center gap-1 transition-colors"
        >
          <Instagram className="w-3.5 h-3.5" />
          <span>Instagram</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Grid of 4 square authentic service slots */}
      <div className="grid grid-cols-2 gap-3">
        {STUDIO_DATA.workPlaceholders.map((item, idx) => {
          const currentImg = photos[item.id] || item.imageUrl;
          const isLoading = loadingId === item.id;

          return (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-white border border-[#E8DED6] overflow-hidden shadow-2xs hover:border-[#C5A059] transition-all flex flex-col"
            >
              {/* Square Area */}
              <div className="relative aspect-square w-full bg-[#FAF7F2] overflow-hidden">
                {currentImg ? (
                  <>
                    <img
                      src={currentImg}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                      onClick={() =>
                        setActivePhoto({
                          url: currentImg,
                          title: item.title,
                          subtitle: item.subtitle,
                          tag: item.tag,
                        })
                      }
                      referrerPolicy="no-referrer"
                    />

                    {/* Tag Badge */}
                    <div className="absolute top-2 left-2 z-10 bg-white/95 backdrop-blur-xs text-[#2C2926] text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-2xs border border-[#E8DED6]">
                      {item.tag}
                    </div>

                    {/* Expand icon */}
                    <button
                      onClick={() =>
                        setActivePhoto({
                          url: currentImg,
                          title: item.title,
                          subtitle: item.subtitle,
                          tag: item.tag,
                        })
                      }
                      aria-label="Ampliar foto original"
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs text-[#2C2926] flex items-center justify-center shadow-xs hover:bg-white transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Bottom action to swap photo */}
                    <div className="absolute bottom-2 inset-x-2 flex items-center gap-1.5">
                      <label
                        className="flex-1 bg-black/70 backdrop-blur-xs text-white text-[10px] font-medium py-1.5 px-2 rounded-lg flex items-center justify-center gap-1 cursor-pointer hover:bg-black/85 transition-colors"
                        title="Substituir por outra foto original"
                      >
                        <Upload className="w-3 h-3 text-[#E2D2B5]" />
                        <span>{isLoading ? 'Salvando...' : 'Alterar foto'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileUpload(item.id, e)}
                        />
                      </label>

                      <button
                        onClick={() => {
                          setUrlModalId(item.id);
                          setUrlInput(currentImg.startsWith('http') ? currentImg : '');
                        }}
                        className="w-7 h-7 rounded-lg bg-black/70 text-white flex items-center justify-center hover:bg-black/85 transition-colors"
                        title="Inserir link da foto"
                      >
                        <LinkIcon className="w-3 h-3" />
                      </button>
                    </div>
                  </>
                ) : (
                  /* Empty slot waiting for original photo */
                  <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-[#FAF7F2]">
                    <div className="w-10 h-10 rounded-2xl bg-white border border-[#E8DED6] flex items-center justify-center text-[#9A7737] mb-2 shadow-2xs">
                      <Camera className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    <span className="text-[11px] font-semibold text-[#2C2926] leading-tight">
                      Foto Original {idx + 1}
                    </span>
                    <span className="text-[10px] text-[#8A8279] mt-0.5 line-clamp-1">
                      {item.subtitle}
                    </span>

                    <div className="mt-2.5 flex items-center gap-1.5 w-full">
                      <label className="flex-1 btn-gold-luxury py-1.5 px-2 rounded-lg text-[10px] font-semibold flex items-center justify-center gap-1 cursor-pointer shadow-2xs">
                        <Upload className="w-3 h-3" />
                        <span>{isLoading ? 'Carregando...' : 'Inserir foto'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileUpload(item.id, e)}
                        />
                      </label>

                      <button
                        onClick={() => {
                          setUrlModalId(item.id);
                          setUrlInput('');
                        }}
                        className="w-6.5 h-6.5 rounded-lg border border-[#E8DED6] bg-white text-[#6B635B] flex items-center justify-center hover:bg-[#F2ECE5] transition-colors"
                        title="Inserir link da foto (Postimages, etc.)"
                      >
                        <LinkIcon className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Subtitle / Details */}
              <div className="p-2.5 bg-white border-t border-[#F2ECE5]">
                <h4 className="text-xs font-semibold text-[#2C2926] truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#6B635B] truncate font-light mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Guide Card explaining the authentic original photos */}
      <div className="mt-3.5 p-3 rounded-xl bg-white border border-[#E8DED6] flex items-start gap-2.5 text-xs text-[#5D554D] shadow-2xs">
        <Camera className="w-4 h-4 text-[#9A7737] shrink-0 mt-0.5" />
        <div className="leading-relaxed text-[11.5px]">
          <strong>Fotos 100% Originais da Câmera:</strong> Toque no botão <strong>Inserir foto</strong> de cada moldura para selecionar as 4 fotos originais diretamente do seu celular ou computador. Elas serão mantidas naturais, sem filtros ou IA.
        </div>
      </div>

      {/* URL Modal */}
      {urlModalId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setUrlModalId(null)}
        >
          <div
            className="relative max-w-sm w-full bg-white rounded-2xl p-5 shadow-xl border border-[#E8DED6]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-[#2C2926]">
                Inserir link da foto original
              </h3>
              <button
                onClick={() => setUrlModalId(null)}
                className="w-7 h-7 rounded-full bg-[#FAFAF8] text-[#6B635B] flex items-center justify-center hover:bg-[#F2ECE5]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#7B736A] mb-3">
              Cole o link direto da imagem (ex: do Postimages, Imgur ou Google Drive):
            </p>

            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://i.postimg.cc/..."
              className="w-full px-3 py-2 text-xs rounded-xl border border-[#E8DED6] focus:outline-none focus:border-[#C5A059] bg-[#FAFAF8] mb-3"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setUrlModalId(null)}
                className="px-3 py-1.5 rounded-lg text-xs text-[#6B635B] hover:bg-[#F2ECE5]"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleSaveUrl(urlModalId)}
                className="btn-gold-luxury px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Salvar foto</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for enlarged photo view */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-sm w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E8DED6]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              aria-label="Fechar visualização"
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 text-[#2C2926] flex items-center justify-center shadow-md hover:bg-white transition-transform active:scale-95"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-square w-full bg-[#FAF6F0] overflow-hidden">
              <img
                src={activePhoto.url}
                alt={activePhoto.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 text-center bg-white border-t border-[#F2ECE5]">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9A7737] bg-[#FAF5ED] px-2.5 py-0.5 rounded-full">
                {activePhoto.tag}
              </span>
              <h3 className="font-display text-base font-semibold text-[#2C2926] mt-1.5">
                {activePhoto.title}
              </h3>
              <p className="text-xs text-[#6B635B] mt-0.5 font-light">
                {activePhoto.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
