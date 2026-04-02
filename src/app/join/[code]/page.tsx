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
          url: 'https://reppleapp.com/og-image.png',
          width: 1024,
          height: 1024,
          alt: 'Repple - Turn the Gym Into a Game',
        },
      ],
      url: `https://reppleapp.com/join/${code}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Join my team on Repple!',
      description: 'You\'ve been invited to join a team on Repple. Compete with friends in fitness challenges!',
      images: ['https://reppleapp.com/og-image.png'],
    },
  };
}

export default async function JoinPage({ params }: JoinPageProps) {
  const { code } = await params;
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
          {/* Open in app (works if already installed) */}
          <Link
            href={deepLinkUrl}
            className="block w-full watery-gradient-button text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Open in Repple
          </Link>

          {/* Beta access info */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-sm text-purple-700">
            Repple is currently in beta. Ask the person who shared this link for an invite to join!
          </div>
        </div>

        {/* Footer text */}
        <p className="text-sm text-gray-400">
          Repple - Turn the Gym Into a Game
        </p>
      </div>

      {/* Try to open app on iOS — no auto-redirect to App Store since app is in beta */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
              if (isIOS) {
                window.location.href = '${deepLinkUrl}';
              }
            })();
          `,
        }}
      />
    </main>
  );
}
