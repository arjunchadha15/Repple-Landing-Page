import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface JoinPageProps {
  params: Promise<{ code: string }>;
}

export async function generateMetadata({ params }: JoinPageProps): Promise<Metadata> {
  const { code } = await params;
  
  return {
    title: 'Join my team on Repple!',
    description: 'You\'ve been invited to join a team on Repple. Compete with friends in fitness challenges and level up together!',
    openGraph: {
      title: 'Join my team on Repple!',
      description: 'You\'ve been invited to join a team on Repple. Compete with friends in fitness challenges!',
      images: [
        {
          url: 'https://repple.app/og-image.png',
          width: 1024,
          height: 1024,
          alt: 'Repple - Turn the Gym Into a Game',
        },
      ],
      url: `https://repple.app/join/${code}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Join my team on Repple!',
      description: 'You\'ve been invited to join a team on Repple. Compete with friends in fitness challenges!',
      images: ['https://repple.app/og-image.png'],
    },
  };
}

export default async function JoinPage({ params }: JoinPageProps) {
  const { code } = await params;
  const appStoreUrl = 'https://apps.apple.com/app/repple/id6740083794';
  const deepLinkUrl = `repple://team/join/${code}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/og-image.png"
            alt="Repple"
            width={120}
            height={120}
            className="rounded-3xl shadow-lg"
          />
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-gray-900">
            You&apos;re Invited!
          </h1>
          <p className="text-lg text-gray-600">
            Someone wants you to join their team on Repple
          </p>
        </div>

        {/* Team Code Display */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-purple-100">
          <p className="text-sm text-gray-500 mb-2">Team Invite Code</p>
          <p className="text-2xl font-mono font-bold text-purple-600">{code}</p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4">
          {/* Try to open in app first */}
          <Link
            href={deepLinkUrl}
            className="block w-full watery-gradient-button text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Open in Repple
          </Link>

          {/* Fallback to App Store */}
          <Link
            href={appStoreUrl}
            className="block w-full bg-gray-900 text-white font-semibold py-4 px-6 rounded-xl shadow-md hover:bg-gray-800 transition-all duration-200"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Get it on the App Store
            </span>
          </Link>
        </div>

        {/* Footer text */}
        <p className="text-sm text-gray-400">
          Repple - Turn the Gym Into a Game
        </p>
      </div>

      {/* Auto-redirect script for iOS devices */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
              if (isIOS) {
                // Try to open the app
                window.location.href = '${deepLinkUrl}';
                // If app doesn't open, redirect to App Store after delay
                setTimeout(function() {
                  window.location.href = '${appStoreUrl}';
                }, 2500);
              }
            })();
          `,
        }}
      />
    </main>
  );
}
