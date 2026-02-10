'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import PhoneMockup from './PhoneMockup';

const cards = [
  {
    screenshot: '/screenshot-home.png',
    left: {
      title: 'Your Grind Score',
      description: 'Every rep, every run, every session earns points. Watch your score climb throughout the week and prove you showed up.',
    },
    right: {
      title: 'Streaks & momentum',
      description: 'Build your streak, boost your multiplier. Miss a day and it resets. The pressure is real and that\'s the point.',
    },
  },
  {
    screenshot: '/screenshot-matchups.png',
    left: {
      title: 'Weekly matchups',
      description: 'Your team vs. theirs. Every workout fuels the score. It\'s not about being the best, it\'s about not letting your people down.',
    },
    right: {
      title: 'Real competition',
      description: 'ELO rankings, head-to-head battles, and a leaderboard that actually means something. Every point counts.',
    },
  },
  {
    screenshot: '/screenshot-profile.png',
    left: {
      title: 'Your fitness identity',
      description: 'Custom avatars, analytics, and a calendar that shows the world you\'re consistent. Your profile tells your story.',
    },
    right: {
      title: 'Track everything',
      description: 'Friends, challenges, workout plans, all in one place. See your history, share your progress, stay accountable.',
    },
  },
];

// Create mobile cards - alternating image and text
const mobileCards = cards.flatMap((card, index) => [
  { type: 'image' as const, screenshot: card.screenshot, index },
  { type: 'text' as const, left: card.left, right: card.right, index },
]);

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isScrollingRef = useRef(false);
  const lastScrollTime = useRef(0);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const totalCards = isMobile ? mobileCards.length : cards.length;

  const scrollToIndex = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container || isTransitioning) return;

    setIsTransitioning(true);
    setActiveIndex(index);

    const cardHeight = container.offsetHeight;
    container.scrollTo({
      top: index * cardHeight,
      behavior: 'smooth',
    });

    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  }, [isTransitioning]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Allow scrolling back up to the main page when at the top card
      if (activeIndex === 0 && e.deltaY < 0) {
        return; // Don't prevent default, allow normal page scroll
      }

      // Only prevent default if we're handling the scroll within cards
      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime.current < 700) return;

      if (Math.abs(e.deltaY) < 10) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.max(0, Math.min(totalCards - 1, activeIndex + direction));

      if (nextIndex !== activeIndex) {
        lastScrollTime.current = now;
        scrollToIndex(nextIndex);
      }
    };

    // Touch handling for mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 700) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) < 50) return;

      const direction = diff > 0 ? 1 : -1;
      const nextIndex = Math.max(0, Math.min(totalCards - 1, activeIndex + direction));

      if (nextIndex !== activeIndex) {
        lastScrollTime.current = now;
        scrollToIndex(nextIndex);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeIndex, scrollToIndex, totalCards]);

  return (
    <div className="about-section-wrapper">
      {/* Scroll dots indicator */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {/* Desktop: show 3 dots, Mobile: show 6 dots */}
        {(isMobile ? mobileCards : cards).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'watery-gradient-button scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Snap scroll container */}
      <div
        ref={containerRef}
        className="about-snap-container"
      >
        {/* Desktop layout - 3 cards with side text */}
        {!isMobile && cards.map((card, index) => (
          <div key={`desktop-${index}`} className="about-snap-card">
            <div className="max-w-6xl w-full mx-auto px-4">
              <div className="grid grid-cols-3 gap-12 items-center">
                <div className={`text-right about-text-enter ${index === activeIndex ? 'about-text-active' : ''}`} style={{ transitionDelay: '0.1s' }}>
                  <h3 className="text-2xl font-bold mb-3 watery-gradient-text">{card.left.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed">{card.left.description}</p>
                </div>

                <div className={`flex justify-center about-phone-enter ${index === activeIndex ? 'about-phone-active' : ''}`}>
                  <PhoneMockup screenshot={card.screenshot} />
                </div>

                <div className={`text-left about-text-enter ${index === activeIndex ? 'about-text-active' : ''}`} style={{ transitionDelay: '0.15s' }}>
                  <h3 className="text-2xl font-bold mb-3 watery-gradient-text">{card.right.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed">{card.right.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Mobile layout - 6 cards alternating image and text */}
        {isMobile && mobileCards.map((card, index) => (
          <div key={`mobile-${index}`} className="about-snap-card">
            <div className="max-w-6xl w-full mx-auto px-4">
              {card.type === 'image' ? (
                // Image card
                <div className="flex flex-col items-center justify-center h-full">
                  <div className={`about-phone-enter ${index === activeIndex ? 'about-phone-active' : ''}`}>
                    <PhoneMockup screenshot={card.screenshot} />
                  </div>
                </div>
              ) : (
                // Text card
                <div className="flex flex-col items-center justify-center h-full">
                  <div className={`space-y-8 max-w-sm about-text-enter ${index === activeIndex ? 'about-text-active' : ''}`}>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-3 watery-gradient-text">{card.left.title}</h3>
                      <p className="text-gray-600 text-base leading-relaxed">{card.left.description}</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-3 watery-gradient-text">{card.right.title}</h3>
                      <p className="text-gray-600 text-base leading-relaxed">{card.right.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
