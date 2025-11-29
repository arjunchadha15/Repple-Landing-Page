'use client';

import Logo from './Logo';
import WaitlistForm from './WaitlistForm';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full text-center">
        <div className="animate-scale-in">
          <Logo />
        </div>
        
        <h1 className="text-3xl md:text-7xl font-bold text-white mb-6 animate-slide-up-delayed-1 leading-tight">
          <span className="bg-gradient-to-r from-repple-purple to-repple-violet bg-clip-text text-transparent">
            The Gym just became
            <br />
            a Game.
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 mb-10 animate-slide-up-delayed-2 max-w-2xl mx-auto">
          Compete with friends and level up your fitness journey.
        </p>
        
        <div className="animate-slide-up-delayed-3">
          <WaitlistForm />
          <p className="mt-3 text-sm text-white">
            Join the waitlist for early access
          </p>
          <p className="mt-2 text-sm text-white">
            Purdue students get priority access
          </p>
        </div>
      </div>
    </div>
  );
}
