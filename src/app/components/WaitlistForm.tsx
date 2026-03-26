'use client';

const APP_STORE_URL = 'https://apps.apple.com/us/app/repple-app/id6756220797';

export default function AppStoreButton() {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-8 py-4 watery-gradient-button text-white font-semibold rounded-2xl hover:shadow-purple-glow-lg transition-all duration-300 hover:scale-105 text-lg"
    >
      Download Today on iOS
    </a>
  );
}
