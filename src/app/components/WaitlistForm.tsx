'use client';

const APP_STORE_URL = 'https://apps.apple.com/us/app/repple-app/id6756220797';

export default function AppStoreButton() {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-8 py-4 watery-gradient-button text-white font-semibold rounded-2xl hover:shadow-purple-glow-lg transition-all duration-300 hover:scale-105 text-lg"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 814 1000" className="w-6 h-6 fill-white">
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-148.2-105.5C189.5 796 155.4 695.7 155.4 600.4c0-74.7 14.3-147.8 43.8-210 42.5-88.8 120.2-148.1 206.2-148.1 75 0 121.5 40.4 188.6 40.4 65.3 0 105.5-40.4 196.4-40.4 33.9 0 121.5 4.7 190 94.1zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
      </svg>
      Download Today on iOS
    </a>
  );
}
