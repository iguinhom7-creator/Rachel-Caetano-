import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SpecialtySection } from './components/SpecialtySection';
import { GallerySection } from './components/GallerySection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingMobileCta } from './components/FloatingMobileCta';

export function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2724] font-body flex flex-col selection:bg-[#EBDBC8] selection:text-[#3B2C1A]">
      {/* Fixed Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sections Flow */}
      <main className="flex-grow">
        {/* 1. Hero / Primeira Tela */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Sobre a Profissional */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* 3. Especialidade */}
        <SpecialtySection />

        {/* 4. Galeria de Trabalhos */}
        <GallerySection onOpenBooking={handleOpenBooking} />

        {/* 5. Diferenciais */}
        <DifferentialsSection />

        {/* 6. Experiência do Atendimento */}
        <ExperienceSection onOpenBooking={handleOpenBooking} />

        {/* 7. Instagram */}
        <InstagramSection />

        {/* 8. Localização */}
        <LocationSection />

        {/* 9. CTA Final */}
        <FinalCtaSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button for Mobile */}
      <FloatingMobileCta onOpenBooking={handleOpenBooking} />

      {/* Booking / Scheduling Modal */}
      <BookingModal isOpen={bookingModalOpen} onClose={handleCloseBooking} />
    </div>
  );
}

export default App;
