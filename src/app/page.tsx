'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState<'waitlist' | 'about'>('waitlist');

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about-section');
      if (!aboutSection) return;

      const aboutTop = aboutSection.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (scrollPosition >= aboutTop) {
        setActiveSection('about');
      } else {
        setActiveSection('waitlist');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pb-3">
        <div className="flex gap-1 bg-white/80 backdrop-blur-md rounded-full p-1 shadow-lg border border-gray-200/50">
          <button
            onClick={scrollToTop}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeSection === 'waitlist'
                ? 'watery-gradient-button text-white shadow-purple-glow'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            Waitlist
          </button>
          <button
            onClick={scrollToAbout}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeSection === 'about'
                ? 'watery-gradient-button text-white shadow-purple-glow'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            About
          </button>
        </div>
      </nav>

      {/* Content sections */}
      <Hero />
      <div id="about-section">
        <AboutSection />
      </div>

      <footer className="text-center py-6 text-sm text-gray-400 flex justify-center gap-6">
        <Link href="/faq" className="hover:text-gray-600 transition-colors">
          FAQ
        </Link>
        <Link href="/privacy" className="hover:text-gray-600 transition-colors">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-gray-600 transition-colors">
          Terms of Service
        </Link>
        <Link href="/support" className="hover:text-gray-600 transition-colors">
          Support
        </Link>
      </footer>
    </main>
  );
}
