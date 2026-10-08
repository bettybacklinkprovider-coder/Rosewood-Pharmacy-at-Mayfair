import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { PrescriptionModal } from './components/PrescriptionModal';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  // Parse initial page from location hash, default to 'home'
  const getInitialPage = (): PageId => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash === 'about' || hash === 'services' || hash === 'contact') {
      return hash as PageId;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage());
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('Prescription Services');

  // Sync hash changes (browser back/forward button)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'about' || hash === 'services' || hash === 'contact') {
        setCurrentPage(hash as PageId);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync document title with current page
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Rosewood Pharmacy at Mayfair | Luxury London Healthcare',
      about: 'About Us | Rosewood Pharmacy at Mayfair London',
      services: 'Pharmacy Services | Rosewood Pharmacy at Mayfair',
      contact: 'Contact & Visit Dispensary | Rosewood Pharmacy at Mayfair',
    };
    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openConsultationWithService = (serviceName: string) => {
    setSelectedServiceForModal(serviceName);
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0512] text-[#f4efe6] font-sans selection:bg-[#d4af37]/30 selection:text-[#f3e5b8]">
      {/* Primary Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenConsultation={() => {
          setSelectedServiceForModal('Prescription Services');
          setIsConsultationModalOpen(true);
        }}
      />

      {/* Main Page Content with smooth transitions */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="w-full"
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={navigateTo}
                onOpenConsultation={() => {
                  setSelectedServiceForModal('Prescription Services');
                  setIsConsultationModalOpen(true);
                }}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onNavigate={navigateTo}
                onOpenConsultation={() => {
                  setSelectedServiceForModal('Prescription Services');
                  setIsConsultationModalOpen(true);
                }}
              />
            )}

            {currentPage === 'services' && (
              <ServicesPage
                onNavigate={navigateTo}
                onOpenConsultationWithService={openConsultationWithService}
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage onNavigate={navigateTo} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Luxury Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Prescription & Healthcare Consultation Modal */}
      <PrescriptionModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        defaultService={selectedServiceForModal}
      />
    </div>
  );
}
