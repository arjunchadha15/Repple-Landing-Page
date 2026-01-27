'use client';

import { useEffect } from 'react';

export default function WaitlistForm() {
  useEffect(() => {
    // Load KickoffLabs script
    const script = document.createElement('script');
    script.src = 'https://b.kickoffpages.com/2.2.0/kol.js';
    script.id = 'koljs';
    script.setAttribute('data-campaign-id', '193002');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.getElementById('koljs');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div data-kol-snippet="embedpage" data-kolPageId="404657" className="kol-embed-page-frame default"></div>
    </div>
  );
}
