'use client';

import { useState } from 'react';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';

type Tab = 'waitlist' | 'about';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('waitlist');

  return (
    <main className="min-h-screen">
      {/* Tab navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pb-3">
        <div className="flex gap-1 bg-white/80 backdrop-blur-md rounded-full p-1 shadow-lg border border-gray-200/50">
          <button
            onClick={() => setActiveTab('waitlist')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'waitlist'
                ? 'watery-gradient-button text-white shadow-purple-glow'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Waitlist
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'about'
                ? 'watery-gradient-button text-white shadow-purple-glow'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            About
          </button>
        </div>
      </nav>

      {/* Tab content */}
      {activeTab === 'waitlist' ? <Hero /> : <AboutSection />}
    </main>
  );
}
