import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ActionLayers } from './components/ActionLayers';
import { AboutSection } from './components/AboutSection';
import { SpecialtySection } from './components/SpecialtySection';
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

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero / Primeira Tela (com a foto oficial de perfil) */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Camadas de Links em destaque (Instagram, Google, Agendamento) */}
        <ActionLayers onOpenBooking={handleOpenBooking} />

        {/* 3. Sobre a Profissional */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* 4. Especialidade */}
        <SpecialtySection />

        {/* 5. Instagram */}
        <InstagramSection />

        {/* 6. Localização */}
        <LocationSection />

        {/* 7. CTA Final */}
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
