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

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isScrollingRef = useRef(false);
  const lastScrollTime = useRef(0);

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
      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime.current < 700) return;

      if (Math.abs(e.deltaY) < 10) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.max(0, Math.min(cards.length - 1, activeIndex + direction));

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
      const nextIndex = Math.max(0, Math.min(cards.length - 1, activeIndex + direction));

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
  }, [activeIndex, scrollToIndex]);

  return (
    <div className="about-section-wrapper">
      {/* Scroll dots indicator */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {cards.map((_, i) => (
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
        {cards.map((card, index) => (
          <div key={index} className="about-snap-card">
            <div className="max-w-6xl w-full mx-auto px-4">

              {/* Mobile layout */}
              <div className="md:hidden flex flex-col items-center gap-8">
                <div className={`about-phone-enter ${index === activeIndex ? 'about-phone-active' : ''}`}>
                  <PhoneMockup screenshot={card.screenshot} />
                </div>
                <div className={`space-y-6 max-w-sm about-text-enter ${index === activeIndex ? 'about-text-active' : ''}`}>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 watery-gradient-text">{card.left.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{card.left.description}</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 watery-gradient-text">{card.right.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{card.right.description}</p>
                  </div>
                </div>
              </div>

              {/* Desktop layout: left text — phone — right text */}
              <div className="hidden md:grid md:grid-cols-3 md:gap-12 md:items-center">
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
      </div>
    </div>
  );
}
