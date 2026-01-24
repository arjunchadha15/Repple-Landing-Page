import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Repple - Turn the Gym Into a Game',
  description: 'Track your workouts, compete with friends, and level up your fitness journey. Join the waitlist for early access.',
  keywords: 'fitness, workout, gym, tracking, gamification, repple',
  authors: [{ name: 'Repple' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#7F3DFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          type="text/javascript"
          src="https://app.viral-loops.com/widgetsV2/core/loader.js"
          data-campaign-id="a9qJGkxniH1oRo5ewFwddDty2uE"
          id="viral-loops-loader"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
