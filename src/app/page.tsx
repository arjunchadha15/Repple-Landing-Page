'use client';

import Hero from './components/Hero';
import AboutSection from './components/AboutSection';

export default function Home() {
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
            className="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          >
            Waitlist
          </button>
          <button
            onClick={scrollToAbout}
            className="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
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
    </main>
  );
}
