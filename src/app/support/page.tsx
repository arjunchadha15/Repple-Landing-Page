import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support - Repple',
  description: 'Get help with Repple — the fitness gamification app. Contact our support team or find answers to common questions.',
  alternates: {
    canonical: 'https://reppleapp.com/support',
  },
  openGraph: {
    title: 'Support - Repple',
    description: 'Get help with Repple — the fitness gamification app. Contact our support team or find answers to common questions.',
    url: 'https://reppleapp.com/support',
  },
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-20 max-w-3xl mx-auto">
      <div className="mb-12 text-center">
        <Link
          href="/"
          className="inline-block text-sm text-gray-400 hover:text-gray-600 transition-colors mb-8"
        >
          ← Back to Repple
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold watery-gradient-text mb-4">
          Repple Support
        </h1>
        <p className="text-gray-500 text-base max-w-xl mx-auto">
          Need help? We&apos;re here to make sure your experience with Repple is smooth, competitive, and reliable.
          If you&apos;re experiencing issues or have questions, reach out to us anytime.
        </p>
      </div>

      <div className="space-y-10 text-gray-600 leading-relaxed text-sm">

        {/* Contact */}
        <section className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Support</h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium text-gray-700">Email:</span>{' '}
              <a
                href="mailto:support@reppleapp.com"
                className="text-purple-600 hover:text-purple-700 transition-colors"
              >
                support@reppleapp.com
              </a>
            </p>
            <p>
              <span className="font-medium text-gray-700">Response Time:</span> Within 24–48 hours
            </p>
          </div>

          <div className="mt-5">
            <p className="font-medium text-gray-700 mb-2">For faster assistance, include:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Your username</li>
              <li>Device type (iPhone model)</li>
              <li>iOS version</li>
              <li>A brief description of the issue</li>
              <li>Screenshots if possible</li>
            </ul>
          </div>
        </section>

        {/* Common Questions */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-5">Common Questions</h2>
          <div className="space-y-5">

            <div>
              <h3 className="font-semibold text-gray-800 mb-1">How do I join or create a team?</h3>
              <p>Go to the <span className="font-medium text-gray-700">My Team</span> tab and create a team or accept an invite from a teammate.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-1">How are points calculated?</h3>
              <p>Points are based on workout activity, intensity, and matchup rules within the current season.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-1">How do streak multipliers work?</h3>
              <p>Daily activity builds your streak. Longer streaks unlock higher point multipliers and milestone rewards.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-1">How do spin tokens work?</h3>
              <p>Spin tokens are earned through workouts and streak consistency. They can be used in Spin the Slots to unlock multipliers and rewards.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Why isn&apos;t my Apple Health or Watch syncing?</h3>
              <p>
                Make sure Health permissions are enabled in{' '}
                <span className="font-medium text-gray-700">Settings → Privacy &amp; Security → Health → Repple</span>.
                Restarting the app can also refresh sync.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-1">How do I delete my account?</h3>
              <p>
                Email{' '}
                <a
                  href="mailto:support@reppleapp.com?subject=Account%20Deletion%20Request"
                  className="text-purple-600 hover:text-purple-700 transition-colors"
                >
                  support@reppleapp.com
                </a>{' '}
                with the subject line <span className="font-medium text-gray-700">&quot;Account Deletion Request.&quot;</span>{' '}
                Your account and associated data will be permanently deleted within 7 days.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-1">How do I report inappropriate behavior?</h3>
              <p>
                Email{' '}
                <a
                  href="mailto:support@reppleapp.com"
                  className="text-purple-600 hover:text-purple-700 transition-colors"
                >
                  support@reppleapp.com
                </a>{' '}
                with details and screenshots. We review reports promptly to keep competition respectful and fair.
              </p>
            </div>

          </div>
        </section>

        {/* Data & Privacy */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Data &amp; Privacy</h2>
          <p className="mb-4">
            Your privacy matters. You can review our policies below:
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-300">·</span>
            <Link
              href="/terms"
              className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </section>

      </div>

      <div className="mt-16 text-center">
        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-full text-white text-sm font-semibold watery-gradient-button shadow-lg"
        >
          Back to Repple
        </Link>
      </div>
    </main>
  );
}
