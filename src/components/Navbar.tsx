import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { RACHEL_DATA } from '../data/rachelData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Cursos', href: '#cursos' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E8DDD1]'
            : 'bg-[#FAF8F5]/90 backdrop-blur-xs border-b border-[#E8DDD1]/40'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
          {/* Brand Wordmark & Mini Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#E8DDD1] bg-white p-0.5 shrink-0">
              <img
                src={RACHEL_DATA.logoUrl}
                alt="Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  if (e.currentTarget.src !== RACHEL_DATA.logoExternalUrl) {
                    e.currentTarget.src = RACHEL_DATA.logoExternalUrl;
                  }
                }}
              />
            </div>
            <span className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#24201E] group-hover:text-[#A8824B] transition-colors">
              Rachel Caetano
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-[#6B625B]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#24201E] hover:text-[#A8824B] transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={RACHEL_DATA.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide btn-gold-luxury"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current/20" />
              <span>Agendar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-[#E8DDD1] text-[#24201E] active:scale-95 transition-transform"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/45 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-[#FAF8F5] p-6 shadow-2xl flex flex-col justify-between border-l border-[#E8DDD1]">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#E8DDD1]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#E8DDD1] bg-white p-0.5">
                    <img
                      src={RACHEL_DATA.logoUrl}
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#24201E]">
                      Rachel Caetano
                    </h3>
                    <p className="text-[11px] text-[#8C7F75] font-light">Nail Designer · BH</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Fechar menu"
                  className="w-9 h-9 rounded-full bg-white border border-[#E8DDD1] flex items-center justify-center text-[#24201E]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="flex flex-col gap-1.5 mt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="flex items-center justify-between py-3 px-3.5 rounded-xl text-sm font-medium text-[#4A433E] hover:bg-white hover:text-[#A8824B] transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-[#8C7F75]">→</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E8DDD1] flex flex-col gap-3">
              <a
                href={RACHEL_DATA.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 rounded-full text-xs font-semibold tracking-wide btn-gold-luxury flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current/20" />
                <span>Agendar no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={RACHEL_DATA.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs text-[#8C7F75] hover:text-[#24201E] py-1.5 transition-colors"
              >
                {RACHEL_DATA.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
