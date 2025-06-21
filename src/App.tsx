import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import CertificateVerification from './components/CertificateVerification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NewCursor from './components/NewCursor';
import FuturisticLoader from './components/Loader'; 
import { useScrollTracking } from './hooks/useScrollTracking';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY, activeSection, scrollToSection } = useScrollTracking();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <FuturisticLoader />; 

  return (
    <div className="min-h-screen font-orbitron tracking-widestCustom bg-slate-900 text-white overflow-x-hidden">
      <NewCursor />
     
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollY={scrollY}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Programs />
      <CertificateVerification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
