import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://reppleapp.com'),
  title: 'Repple - Turn the Gym Into a Game',
  description: 'Track your workouts, compete with friends, and level up your fitness journey. Join the waitlist for early access.',
  keywords: 'fitness, workout, gym, tracking, gamification, repple, gym game, workout app, fitness gamification, compete workout, gym competition',
  authors: [{ name: 'Repple' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#7F3DFF',
  icons: {
    icon: '/Repple_Monkey_Vector.png',
    shortcut: '/Repple_Monkey_Vector.png',
    apple: '/Repple_Monkey_Vector.png',
  },
  alternates: {
    canonical: 'https://reppleapp.com',
  },
  openGraph: {
    title: 'Repple - Turn the Gym Into a Game',
    description: 'Track your workouts, compete with friends, and level up your fitness journey. Join the waitlist for early access.',
    url: 'https://reppleapp.com',
    siteName: 'Repple',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Repple - Turn the Gym Into a Game',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Repple - Turn the Gym Into a Game',
    description: 'Track your workouts, compete with friends, and level up your fitness journey. Join the waitlist for early access.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MobileApplication',
      name: 'Repple',
      description:
        'Repple turns the gym into a game. Earn points every workout, build streaks, compete in weekly head-to-head matchups, and climb the ELO leaderboard with your friends.',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'iOS',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      url: 'https://reppleapp.com',
    },
    {
      '@type': 'Organization',
      name: 'Repple',
      url: 'https://reppleapp.com',
      logo: 'https://reppleapp.com/Repple_Monkey_Vector.png',
      description:
        'Repple is a fitness gamification app that turns the gym into a game. Track workouts, compete with friends, build streaks, and level up your fitness journey.',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
