'use client';

import { useEffect, useState } from 'react';

export default function DownloadButton() {
  const [isIPhone, setIsIPhone] = useState(false);

  useEffect(() => {
    // Detect if user is on iPhone
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipod/.test(userAgent);
    setIsIPhone(isIOS);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <a
        href="https://testflight.apple.com/join/eHKnAmSY"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full sm:w-auto px-8 py-5 watery-gradient-button text-white font-semibold rounded-2xl hover:shadow-purple-glow-lg transition-all duration-300 hover:scale-105 text-lg"
      >
        {isIPhone ? 'Download Beta for iPhone' : 'Download Beta'}
      </a>
      
      {isIPhone && (
        <p className="mt-4 text-sm text-gray-600 animate-slide-up">
          You'll be redirected to TestFlight to install the beta
        </p>
      )}
    </div>
  );
}
