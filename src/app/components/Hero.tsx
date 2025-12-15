'use client';

import Logo from './Logo';
import DownloadButton from './DownloadButton';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-start md:items-center justify-center px-4 pt-16 md:pt-12 pb-12">
      <div className="max-w-4xl w-full text-center">
        <div className="animate-scale-in">
          <Logo />
        </div>
        
        <h1 className="text-3xl md:text-7xl font-bold mb-6 animate-slide-up-delayed-1 leading-tight watery-gradient-text">
          The Gym just became
          <br />
          a Game.
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-700 mb-10 animate-slide-up-delayed-2 max-w-2xl mx-auto">
          Compete with friends and level up your fitness journey.
        </p>
        
        <div className="animate-slide-up-delayed-3">
          <DownloadButton />
          <p className="mt-3 text-sm text-gray-600">
            Available now on iPhone via TestFlight
          </p>
        </div>
      </div>
    </div>
  );
}
