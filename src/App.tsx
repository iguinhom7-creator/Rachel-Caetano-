/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ActionButtons } from './components/ActionButtons';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { GallerySection } from './components/GallerySection';
import { CourseSection } from './components/CourseSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { STUDIO_DATA } from './data/studioData';
import { Check } from 'lucide-react';

export default function App() {
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: STUDIO_DATA.title,
      text: `${STUDIO_DATA.title} - ${STUDIO_DATA.specialty} · Savassi, BH:`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        copyUrlToClipboard();
      }
    } else {
      copyUrlToClipboard();
    }
  };

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2200);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#2C2926] flex flex-col font-sans selection:bg-[#EBDBC8] selection:text-[#3B2C1A]">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-[#2C2926] text-white text-xs px-4 py-2 rounded-full shadow-md flex items-center gap-2 animate-in fade-in duration-150">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>Link copiado para a área de transferência!</span>
        </div>
      )}

      {/* Clean Top Navigation */}
      <Header onShare={handleShare} />

      <main className="flex-1 pb-4">
        {/* Hero Section: Foto na parte quadrada, Nome, Destaque, Endereço Savassi e Botão dourado de agendamento */}
        <Hero />

        {/* Botões Principais: WhatsApp, Cursos, Instagram, Google Savassi BH */}
        <ActionButtons />

        {/* Apresentação Curta e Elegante */}
        <AboutSection />

        {/* Localização do Estúdio: Rua Sergipe, 1087 · Savassi BH */}
        <LocationSection />

        {/* Seção de Trabalhos: Espaço de Fotografias Reais & Instagram */}
        <GallerySection />

        {/* Destaque Explicativo para Cursos & Capacitação posicionado por último */}
        <CourseSection />

        {/* Chamada Final para Agendamento */}
        <FinalCTA />
      </main>

      {/* Footer Minimalista com Endereço e Links */}
      <Footer />

      {/* Botão Flutuante de WhatsApp para navegação ágil no mobile */}
      <FloatingWhatsApp />
    </div>
  );
}
