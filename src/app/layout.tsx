import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
