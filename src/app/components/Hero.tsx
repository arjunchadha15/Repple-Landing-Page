'use client';

import Logo from './Logo';
import WaitlistForm from './WaitlistForm';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-start md:items-center justify-center px-4 pt-16 md:pt-12 pb-12">
      <div className="max-w-4xl w-full text-center">
        <div className="animate-scale-in">
          <Logo />
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold mb-6 animate-slide-up-delayed-1 watery-gradient-text">
          Repple
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-up-delayed-2 leading-tight text-black">
          The Gym just became
          <br />
          a Game.
        </h2>
        
        <p className="text-lg md:text-2xl text-gray-700 mb-10 animate-slide-up-delayed-2 max-w-2xl mx-auto">
          Compete with friends and level up your fitness journey.
        </p>
        
        <div className="animate-slide-up-delayed-3">
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
}