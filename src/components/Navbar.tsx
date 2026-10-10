import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ANGELICA_DATA } from '../data/angelicaData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Especialidade', href: '#especialidade' },
    { label: 'Trabalhos', href: '#trabalhos' },
    { label: 'Instagram', href: '#instagram' },
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
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#EAE2D8]'
            : 'bg-[#FAF7F2]/80 backdrop-blur-xs border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="group flex flex-col text-left"
          >
            <span className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#2C2724] group-hover:text-[#A8824B] transition-colors">
              Angélica Souza
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-widest uppercase font-medium text-[#8C7F75] -mt-0.5">
              Nails · Alongamento Natural
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5C534D]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#A8824B] transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide btn-gold-luxury shadow-xs cursor-pointer"
            >
              <span>Agendar horário</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-full bg-white border border-[#EAE2D8] text-[#2C2724] active:scale-95 transition-transform cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 w-[82%] max-w-sm bg-[#FAF7F2] p-6 shadow-2xl flex flex-col justify-between border-l border-[#EAE2D8]">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-[#EAE2D8]">
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#2C2724]">
                    Angélica Souza Nails
                  </h3>
                  <p className="text-[11px] text-[#8C7F75]">Especialista em Alongamento Natural</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Fechar menu"
                  className="w-9 h-9 rounded-full bg-white border border-[#EAE2D8] flex items-center justify-center text-[#2C2724] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Links list */}
              <nav className="flex flex-col gap-2 mt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="flex items-center justify-between py-3 px-3.5 rounded-xl text-sm font-medium text-[#4A433D] hover:bg-white hover:text-[#A8824B] transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-[#8C7F75]">→</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom action inside mobile drawer */}
            <div className="pt-6 border-t border-[#EAE2D8] flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-full text-xs font-semibold tracking-wide btn-gold-luxury flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Agendar horário</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={ANGELICA_DATA.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs text-[#8C7F75] hover:text-[#2C2724] py-1 transition-colors"
              >
                {ANGELICA_DATA.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
