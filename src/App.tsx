import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ActionButtons } from './components/ActionButtons';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { CoursesSection } from './components/CoursesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingMobileCta } from './components/FloatingMobileCta';

export function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#24201E] font-body flex flex-col selection:bg-[#EFE3D3] selection:text-[#3B2C1A]">
      {/* 1. Header de navegação minimalista */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero com Logo oficial preservada, Nome, Frase sofisticada e Botões */}
        <Hero />

        {/* 3. Acesso rápido aos canais oficiais (WhatsApp, Instagram, Google) */}
        <ActionButtons />

        {/* 4. Serviços do Studio em cards elegantes */}
        <ServicesSection />

        {/* 6. Galeria "Conheça meu trabalho" com fotos reais e visualização ampliada */}
        <GallerySection />

        {/* 7. Cursos e Formação com técnicas ensinadas e botão "Quero saber mais" */}
        <CoursesSection />

        {/* 8. Avaliações reais "O que minhas clientes dizem" com selo Google 5.0 estrelas */}
        <ReviewsSection />

        {/* 9. Seção de destaque do Instagram com botão "SEGUIR NO INSTAGRAM" */}
        <InstagramSection />

        {/* 10. Localização do Studio "Onde estamos" em Belo Horizonte */}
        <LocationSection />

        {/* 11. Chamada final de agendamento */}
        <FinalCtaSection />
      </main>

      {/* 12. Rodapé minimalista com links e frase de encerramento */}
      <Footer />

      {/* 13. Botão flutuante do WhatsApp sempre visível no smartphone */}
      <FloatingMobileCta />
    </div>
  );
}

export default App;
