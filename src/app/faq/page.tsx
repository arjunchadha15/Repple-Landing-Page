import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ - Repple | Gym Game & Fitness Gamification App',
  description: 'Frequently asked questions about Repple — the fitness gamification app that turns the gym into a game. Learn how Grind Scores, weekly matchups, and ELO rankings work.',
  alternates: {
    canonical: 'https://reppleapp.com/faq',
  },
  openGraph: {
    title: 'FAQ - Repple | Gym Game & Fitness Gamification App',
    description: 'Everything you need to know about Repple — the app that turns your gym sessions into competitive, gamified workouts.',
    url: 'https://reppleapp.com/faq',
  },
};

const faqs = [
  {
    question: 'What is Repple?',
    answer:
      'Repple is a fitness gamification app that turns the gym into a competitive game. You earn points for every workout, build streaks, compete in weekly head-to-head matchups against friends, and climb an ELO leaderboard — all based on your real gym activity.',
  },
  {
    question: 'How does Repple turn the gym into a game?',
    answer:
      'Every workout you log earns Grind Score points. The more consistently you train, the higher your streak multiplier, and the more points you accumulate. Those points are used in weekly team matchups where you compete head-to-head against other users. Win matchups to climb the ELO rankings.',
  },
  {
    question: 'What is a Grind Score?',
    answer:
      'Your Grind Score is a weekly point total that reflects how active you\'ve been. Every rep, run, and gym session contributes to it. The score resets weekly, so every week is a fresh competition. Maintaining a streak boosts your multiplier and makes each session worth more points.',
  },
  {
    question: 'How do weekly matchups work?',
    answer:
      'Each week you\'re matched up against another user or team. Your combined workout activity during the week generates points for your side. At the end of the week, whoever accumulated more Grind Score points wins the matchup. Wins and losses affect your ELO ranking.',
  },
  {
    question: 'What is ELO ranking in a fitness app?',
    answer:
      'ELO is a competitive ranking system originally used in chess, adapted by Repple for fitness. Your ELO rating goes up when you win matchups and down when you lose. Because ELO accounts for opponent strength, beating a highly ranked user earns you more points than beating a lower-ranked one.',
  },
  {
    question: 'How do streaks work in Repple?',
    answer:
      'A streak is built by working out on consecutive days. The longer your streak, the higher your multiplier — which amplifies how many Grind Score points each session earns you. Miss a day and the streak resets to zero, so consistency is rewarded directly.',
  },
  {
    question: 'Does Repple work at any gym?',
    answer:
      'Yes. Repple is gym-agnostic. You can log workouts whether you train at a commercial gym, a home gym, outdoors, or anywhere else. The app tracks what you do, not where you do it.',
  },
  {
    question: 'What exercises and workouts can I track with Repple?',
    answer:
      'Repple is designed to track strength training, cardio, and general gym activity. You can log individual exercises, sets, reps, and duration. All logged activity counts toward your Grind Score.',
  },
  {
    question: 'Is Repple free?',
    answer:
      'Repple is currently in development and accepting waitlist signups. The app will be free to download and use. Sign up at reppleapp.com to get early access when it launches.',
  },
  {
    question: 'When will Repple be available?',
    answer:
      'Repple is currently in early development with a waitlist open for iOS. Join the waitlist at reppleapp.com to be among the first to access the app when it launches.',
  },
  {
    question: 'What is fitness gamification?',
    answer:
      'Fitness gamification is the practice of applying game mechanics — points, levels, streaks, leaderboards, and competition — to exercise and gym activity. The goal is to make working out more engaging and motivating by giving it the same reward loops that make games compelling. Repple is built entirely around this idea.',
  },
  {
    question: 'How do I compete with friends at the gym using Repple?',
    answer:
      'After creating an account, you can add friends and be placed in weekly matchups against them. Your respective workout activity during the week determines who wins. You can also see each other\'s Grind Scores, streaks, and ELO rankings on the leaderboard.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white px-4 py-20 max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <Link
            href="/"
            className="inline-block text-sm text-gray-400 hover:text-gray-600 transition-colors mb-8"
          >
            ← Back to Repple
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold watery-gradient-text mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Everything you need to know about Repple — the app that turns the gym into a game.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 pb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h2>
              <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-4">Ready to turn your gym into a game?</p>
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-full text-white text-sm font-semibold watery-gradient-button shadow-lg"
          >
            Join the Waitlist
          </Link>
        </div>
      </main>
    </>
  );
}
