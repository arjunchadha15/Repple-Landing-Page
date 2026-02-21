import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - Repple',
  description: 'Terms of Service for Repple — the fitness gamification app that turns the gym into a game.',
  alternates: {
    canonical: 'https://reppleapp.com/terms',
  },
  openGraph: {
    title: 'Terms of Service - Repple',
    description: 'Terms of Service for Repple — the fitness gamification app that turns the gym into a game.',
    url: 'https://reppleapp.com/terms',
  },
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-gray-400 text-sm">
          Effective Date: February 21, 2026
          <span className="mx-2">·</span>
          Last Updated: February 21, 2026
        </p>
      </div>

      <div className="space-y-10 text-gray-600 leading-relaxed text-sm">

        {/* 1 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
          <p>
            By creating an account, accessing, or using the Repple application (the "Service"), you agree to be bound
            by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
          </p>
          <p className="mt-3">
            We may update these Terms from time to time. Continued use of the Service after any changes constitutes
            acceptance of the updated Terms. We will make reasonable efforts to notify you of material changes.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Description of Service</h2>
          <p className="mb-3">Repple is a fitness tracking and social competition platform that allows users to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Log workouts, exercises, sets, reps, and weights</li>
            <li>Track cardio sessions</li>
            <li>Build and manage training splits and workout plans</li>
            <li>Earn points based on progressive overload performance</li>
            <li>Maintain workout streaks and earn streak-based rewards</li>
            <li>Participate in weekly team challenges and ELO-ranked competition</li>
            <li>Call out opposing team members' exercise logs and submit video proof</li>
            <li>Chat with team members and challenge opponents</li>
            <li>Use virtual power-ups and spin rewards to boost in-app performance</li>
            <li>Generate AI-assisted workout plans</li>
            <li>Connect with friends and invite others to the platform</li>
            <li>Receive push notifications and in-app activity alerts</li>
          </ul>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Eligibility</h2>
          <p className="mb-3">
            You must be at least 13 years of age to use Repple. If you are under 18, you represent that you have
            your parent or guardian's permission to use the Service. Users under 13 are not permitted to create
            accounts.
          </p>
          <p className="mb-2">By using the Service, you represent that:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>You are of eligible age</li>
            <li>You have the legal capacity to enter into these Terms</li>
            <li>You will not use the Service in violation of any applicable laws</li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Account Registration</h2>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">4.1 Registration and Onboarding</h3>
          <p>
            Accounts are created through Supabase authentication using your email address. Upon registration, your
            in-app username, bodyweight, gender, age, and experience level are collected during onboarding. You are
            responsible for providing accurate information.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">4.2 Account Security</h3>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials. You agree to notify
            us immediately of any unauthorized access. We are not liable for losses resulting from unauthorized
            account use.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">4.3 One Account Per User</h3>
          <p>
            You may not create multiple accounts for the purpose of gaining unfair advantages in the points system,
            challenges, or callout features.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">4.4 Account Termination by User</h3>
          <p>
            You may delete your account at any time. Deletion will remove your profile data in accordance with
            Section 9 (Data and Privacy).
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. User Content</h2>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">5.1 Workout and Fitness Data</h3>
          <p>
            You retain ownership of the workout data you log. By using the Service, you grant Repple a non-exclusive,
            worldwide license to store, process, and display this data to operate the Service, including displaying
            your data to other users in the context of challenges, callouts, leaderboards, and team features.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">5.2 Chat Messages</h3>
          <p>
            Messages sent in team chats and matchup chats are visible to all members of the relevant team or
            challenge. Do not share personal, sensitive, or confidential information in chat.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">5.3 Videos</h3>
          <p>
            When you submit a video as proof in response to a callout, you grant Repple a license to store and
            display that video to the relevant parties for the purpose of resolving the callout. Videos are used
            solely for this dispute resolution purpose.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">5.4 Content Standards</h3>
          <p className="mb-2">You agree not to post or transmit content that:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Is abusive, harassing, threatening, defamatory, or hateful toward any person</li>
            <li>Is sexually explicit or pornographic</li>
            <li>Depicts illegal activity</li>
            <li>Infringes on any third party's intellectual property rights</li>
            <li>Contains malware, spam, or unauthorized advertising</li>
            <li>Impersonates another person or entity</li>
          </ul>
          <p className="mt-3">
            Repple reserves the right to remove content that violates these standards and to suspend or terminate
            accounts responsible for such content.
          </p>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Acceptable Use</h2>
          <p className="mb-2">You agree not to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Falsify workout data, weights, reps, or sets to gain an unfair points advantage</li>
            <li>Submit fraudulent or edited video content in callout responses</li>
            <li>Manipulate the points system, spin rewards, or challenge outcomes through exploits or bugs</li>
            <li>Attempt to reverse-engineer, decompile, or interfere with the Service's infrastructure</li>
            <li>Use automated scripts, bots, or tools to interact with the Service</li>
            <li>Attempt to gain unauthorized access to another user's account or data</li>
            <li>Use the callout or challenge features to harass specific users</li>
            <li>Circumvent rate limits or abuse API endpoints</li>
            <li>Use the AI plan generation feature to generate content unrelated to fitness</li>
          </ul>
          <p className="mt-3">Violations may result in suspension or permanent termination of your account.</p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Gamification Features</h2>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">7.1 Points</h3>
          <p>
            Points are calculated based on workout performance using Repple's proprietary weight-scaled algorithm.
            Points have no monetary value and cannot be exchanged for cash, gifts, or any tangible goods. Points may
            be adjusted, reset, or modified by Repple at any time to correct errors, address abuse, or update the
            scoring system.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">7.2 Streaks</h3>
          <p>
            Daily and weekly streaks are tracked based on workout completion. Streak counts are computed server-side
            based on logged workout data. Repple is not responsible for streak resets caused by technical errors;
            however, you may contact support to report suspected errors.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">7.3 Spins and Power-Ups</h3>
          <p className="mb-2">
            Spins are earned through gameplay (streaks, milestones, re-spin rewards). Spinning the wheel grants
            virtual rewards including points, power-ups, or additional spins. Power-ups are virtual items with no
            monetary value. Repple may modify the spin reward pool, odds, and power-up effects at any time.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><span className="font-medium text-gray-700">Streak Freeze:</span> Provides up to 24 hours of streak protection. Freezes do not accumulate or stack.</li>
            <li><span className="font-medium text-gray-700">Multipliers:</span> Boost points for a specific session and are consumed upon activation.</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">7.4 Streak Milestones</h3>
          <p>
            Milestone rewards are granted upon reaching designated daily streak thresholds. Milestones must be
            explicitly claimed within the app. Unclaimed milestones may expire.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">7.5 No Guarantee of Rewards</h3>
          <p>
            Repple does not guarantee the availability of any specific spin outcome, power-up type, or milestone
            reward. The gamification system is entertainment-only and subject to change without notice.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Teams, Challenges, and Callouts</h2>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">8.1 Teams</h3>
          <p>
            Teams are social groups used for competition. The team owner has administrative control over membership,
            join requests, and team settings. Team owners are responsible for managing membership and ensuring their
            team meets challenge eligibility requirements (minimum 3 members).
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">8.2 Weekly Challenges</h3>
          <p>
            Challenges are automated weekly competitions between two teams. ELO ratings are adjusted after each
            completed challenge based on results. ELO ratings are a reflection of competitive performance and have
            no monetary value.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">8.3 Callouts</h3>
          <p className="mb-2">
            The callout feature allows a user to formally dispute an opposing team member's exercise log. By using
            the callout feature:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Challengers must have a legitimate, good-faith basis for believing a log is inaccurate.</li>
            <li>Targets must respond truthfully. Submitting fabricated or edited video is a violation of these Terms.</li>
            <li>Voting members are expected to vote honestly based on the evidence.</li>
            <li>AI review via "Repple Monkey" is final when invoked and cannot be appealed further.</li>
          </ul>
          <p className="mt-3">
            Repple is not responsible for the outcome of individual callouts or any resulting point changes. Using
            the callout system to harass other users is a violation of these Terms.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">8.4 Challenge Invites</h3>
          <p>
            Teams may invite other teams to challenges. Invites expire after 7 days. Public-mode teams are eligible
            for automated ELO matchmaking.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Data and Privacy</h2>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">9.1 Data We Collect</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><span className="font-medium text-gray-700">Account data:</span> email address, username</li>
            <li><span className="font-medium text-gray-700">Profile data:</span> bodyweight, gender, age, experience level, avatar and icon settings</li>
            <li><span className="font-medium text-gray-700">Fitness data:</span> workout splits, exercise logs (exercises, sets, reps, weights, dates), cardio sessions, weekly points history, daily snapshots</li>
            <li><span className="font-medium text-gray-700">Social data:</span> team memberships, friendships, challenge participation, callout records, chat messages, activity feed events</li>
            <li><span className="font-medium text-gray-700">Device data:</span> device tokens, device names, platform, app version — used for push notifications</li>
            <li><span className="font-medium text-gray-700">Usage data:</span> spin history, power-up usage, milestone claims</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">9.2 How We Use Your Data</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Operate the workout tracking, points, and gamification features</li>
            <li>Enable social features including teams, challenges, callouts, chat, and friends</li>
            <li>Send push notifications (reminders, challenge updates, callout alerts, friend requests)</li>
            <li>Generate AI workout plans tailored to your profile data</li>
            <li>Display performance analytics, personal records, and workout progression</li>
            <li>Administer weekly cron-based challenge and scoring cycles</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">9.3 Data Sharing</h3>
          <p>
            Your workout data may be visible to other users in the context of challenges and callouts. Your username,
            streak count, avatar, and points may be visible on leaderboards, challenge scoreboards, and in team
            contexts. We do not sell your personal data to third parties.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">9.4 Data Retention</h3>
          <p>
            Your account data is retained while your account is active. If you delete your account, we will delete
            or anonymize your personal data within a reasonable period, subject to any legal retention obligations.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">9.5 Third-Party Services</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><span className="font-medium text-gray-700">Supabase</span> — authentication and file storage</li>
            <li><span className="font-medium text-gray-700">PostgreSQL</span> — primary database</li>
            <li><span className="font-medium text-gray-700">OpenAI</span> — AI workout plan generation and callout video review</li>
            <li><span className="font-medium text-gray-700">Render</span> — cloud hosting and deployment</li>
            <li>Push notification providers for delivering mobile alerts</li>
          </ul>
        </section>

        {/* 10 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">10. AI Features</h2>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">10.1 AI Workout Plan Generation</h3>
          <p>
            Repple offers AI-assisted workout plan generation using OpenAI's API. AI-generated plans are suggestions
            only and do not constitute professional fitness advice. Always consult a qualified fitness professional
            before starting any new exercise program.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">10.2 AI Video Review (Repple Monkey)</h3>
          <p>
            When a callout is disputed after team rejection, you may request AI review. The AI analyzes submitted
            video to assess exercise form, rep count, and weight accuracy. The AI's decision is final and binding
            within the callout system. We do not warrant the accuracy of AI video analysis, and AI decisions may be
            imperfect. By submitting a video for AI review, you consent to the video being processed by OpenAI for
            analysis.
          </p>
        </section>

        {/* 11 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Push Notifications</h2>
          <p className="mb-2">
            By registering a device and enabling push notifications, you consent to receive notifications including:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Workout reminders</li>
            <li>Streak alerts and milestone notifications</li>
            <li>Challenge start/end and scoring updates</li>
            <li>Callout challenges, video submissions, votes, and decisions</li>
            <li>Friend requests and accepts</li>
            <li>Team chat mentions and matchup chat activity</li>
          </ul>
          <p className="mt-3">
            You may manage notification preferences within the app or revoke permissions at the device level at any
            time.
          </p>
        </section>

        {/* 12 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Fitness and Health Disclaimer</h2>
          <p className="mb-3">
            Repple is not a medical or healthcare service. Nothing in the Service constitutes medical advice,
            diagnosis, or treatment. Workout data, standards comparisons, points, and AI-generated plans are for
            informational and entertainment purposes only.
          </p>
          <p className="mb-3">
            Before beginning any exercise program, particularly if you have a pre-existing medical condition, injury,
            or health concern, consult a qualified healthcare or fitness professional. Repple is not liable for any
            injury, health consequence, or adverse outcome resulting from workouts tracked or plans generated through
            the Service.
          </p>
          <p>
            Exercise inherently carries risk. You assume full responsibility for your own physical safety when
            engaging in any activity informed by Repple.
          </p>
        </section>

        {/* 13 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">13. Intellectual Property</h2>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">13.1 Repple's Rights</h3>
          <p>
            The Repple application, including its code, design, scoring algorithms, branding, and content (excluding
            user-submitted content), is the exclusive property of Repple and is protected by applicable intellectual
            property laws.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">13.2 Restrictions</h3>
          <p>
            You may not copy, reproduce, distribute, modify, create derivative works of, publicly display, or
            reverse engineer any part of the Service without prior written permission from Repple.
          </p>
        </section>

        {/* 14 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">14. Disclaimers</h2>
          <p className="mb-3 uppercase text-xs tracking-wide text-gray-500">
            The service is provided "as is" and "as available" without warranties of any kind, express or implied,
            including but not limited to warranties of merchantability, fitness for a particular purpose, or
            non-infringement.
          </p>
          <p className="mb-2">Repple does not warrant that:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>The Service will be uninterrupted, error-free, or available at all times</li>
            <li>Points, streaks, or other gamification data will be calculated without error</li>
            <li>Challenge outcomes, ELO ratings, or callout decisions are accurate or final</li>
            <li>AI-generated content is accurate, appropriate, or complete</li>
          </ul>
        </section>

        {/* 15 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">15. Limitation of Liability</h2>
          <p className="uppercase text-xs tracking-wide text-gray-500 mb-3">
            To the maximum extent permitted by applicable law, Repple and its officers, employees, and affiliates
            shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including
            but not limited to loss of points, streak resets, challenge losses, or any other in-app loss, whether
            based on warranty, contract, tort, or any other legal theory.
          </p>
          <p className="uppercase text-xs tracking-wide text-gray-500">
            Our total liability to you for any claim arising out of or related to these Terms or the Service shall
            not exceed the greater of (a) the amount you have paid to Repple in the twelve months prior to the
            claim, or (b) $100 USD.
          </p>
        </section>

        {/* 16 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">16. Indemnification</h2>
          <p className="mb-2">
            You agree to indemnify, defend, and hold harmless Repple and its officers, employees, and affiliates
            from and against any claims, liabilities, damages, judgments, and expenses (including reasonable legal
            fees) arising from:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your submission of fraudulent workout data or video content</li>
            <li>Your conduct toward other users (including misuse of callouts, chat, or challenge features)</li>
            <li>Your violation of any third party's rights</li>
          </ul>
        </section>

        {/* 17 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">17. Termination</h2>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">17.1 By You</h3>
          <p>You may stop using the Service and delete your account at any time.</p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">17.2 By Repple</h3>
          <p className="mb-2">
            We reserve the right to suspend or terminate your account at any time, with or without notice, for:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Violation of these Terms</li>
            <li>Fraudulent use of gamification features</li>
            <li>Harassment or abusive behavior toward other users</li>
            <li>Any conduct we determine to be harmful to the Service or its users</li>
          </ul>
          <p className="mt-3">
            Upon termination, your access to the Service will cease and your data will be handled in accordance with
            Section 9.4.
          </p>
        </section>

        {/* 18 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">18. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Delaware, United States, without regard to its
            conflict of laws principles. Any disputes arising from these Terms or the Service shall be resolved
            exclusively in the state or federal courts located in Delaware, and you consent to the personal
            jurisdiction of such courts.
          </p>
        </section>

        {/* 19 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">19. Changes to the Service</h2>
          <p>
            Repple reserves the right to modify, suspend, or discontinue any aspect of the Service at any time,
            including features, scoring algorithms, challenge mechanics, spin rewards, and power-up effects. We are
            not liable to you or any third party for any modification, suspension, or discontinuation of the Service.
          </p>
        </section>

        {/* 20 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">20. Miscellaneous</h2>
          <ul className="space-y-2">
            <li><span className="font-medium text-gray-700">Entire Agreement:</span> These Terms constitute the entire agreement between you and Repple regarding the Service and supersede all prior agreements.</li>
            <li><span className="font-medium text-gray-700">Severability:</span> If any provision of these Terms is found invalid or unenforceable, the remaining provisions remain in full force.</li>
            <li><span className="font-medium text-gray-700">No Waiver:</span> Repple's failure to enforce any right or provision does not constitute a waiver of that right.</li>
            <li><span className="font-medium text-gray-700">Assignment:</span> You may not assign your rights under these Terms. Repple may assign its rights without restriction.</li>
          </ul>
        </section>

        {/* 21 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">21. Contact</h2>
          <p>If you have questions about these Terms, or to report a violation, please contact us at:</p>
          <p className="mt-3">
            <span className="font-medium text-gray-700">Repple</span><br />
            apprepple@gmail.com
          </p>
        </section>

        <p className="text-gray-400 text-xs pt-4 border-t border-gray-100">
          By using Repple, you acknowledge that you have read, understood, and agree to be bound by these Terms of
          Service.
        </p>

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
