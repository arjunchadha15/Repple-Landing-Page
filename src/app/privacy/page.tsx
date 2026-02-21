import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Repple',
  description: 'Privacy Policy for Repple — learn what data we collect, how we use it, and your rights as a user.',
  alternates: {
    canonical: 'https://reppleapp.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - Repple',
    description: 'Privacy Policy for Repple — learn what data we collect, how we use it, and your rights as a user.',
    url: 'https://reppleapp.com/privacy',
  },
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-sm">
          Effective Date: February 21, 2026
          <span className="mx-2">·</span>
          Last Updated: February 21, 2026
        </p>
      </div>

      <div className="prose prose-gray max-w-none space-y-10 text-gray-600 leading-relaxed">

        {/* 1. Introduction */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
          <p>
            Repple ("we," "our," or "us") is a fitness tracking and gamification application. This Privacy Policy
            explains what information we collect, how we use it, who we share it with, and your rights regarding
            your personal data.
          </p>
          <p className="mt-3">
            By using Repple, you agree to the collection and use of information as described in this policy.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>

          <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">2.1 Account &amp; Authentication Information</h3>
          <p className="mb-4">When you register, we collect and store:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Data</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Email address', 'Your primary account identifier, required at registration'],
                  ['Username', 'Chosen during onboarding; may be null until set'],
                  ['Password hash', 'Stored via Supabase Auth; we never see your raw password'],
                  ['Supabase User ID', 'Internal UUID assigned by our authentication provider'],
                  ['Account timestamps', 'When your account was created and last updated'],
                ].map(([d, desc]) => (
                  <tr key={d}>
                    <td className="border border-gray-200 px-4 py-2 font-medium text-gray-700 whitespace-nowrap">{d}</td>
                    <td className="border border-gray-200 px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm">
            Authentication is handled by Supabase Auth, which issues JWT tokens (ES256/RS256 asymmetric keys) that we
            validate on every request.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">2.2 Profile &amp; Personal Characteristics</h3>
          <p className="mb-4">After onboarding, you may provide the following optional profile data:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Data</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Body weight (lbs)', 'Used to look up strength standards and calibrate performance benchmarks'],
                  ['Gender', 'Used to look up gender-specific strength standards'],
                  ['Age', 'Optional; used for exercise standard comparisons'],
                  ['Experience level', 'One of: beginner, novice, intermediate, advanced, elite'],
                  ['Timezone', 'Used to schedule push notifications and workout reminders'],
                  ['Profile settings', 'JSON object including avatar/icon selection'],
                  ['Push notification preferences', 'Global toggle, per-category preferences, and quiet hours (start/end hour)'],
                ].map(([d, desc]) => (
                  <tr key={d}>
                    <td className="border border-gray-200 px-4 py-2 font-medium text-gray-700 whitespace-nowrap">{d}</td>
                    <td className="border border-gray-200 px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">2.3 Workout &amp; Exercise Data</h3>
          <p className="mb-2">The core fitness data we collect includes:</p>
          <p className="font-medium text-gray-700 mt-3 mb-1">Workout Splits &amp; Structure:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Split name, description, plan mode (regimented or free-for-all), and days-per-week target</li>
            <li>Workout day names, focus type (push/pull/legs/chest/back/shoulders/arms/core/full body/rest), and order within the split</li>
            <li>Exercise selections from our reference catalog</li>
            <li>Per-exercise notes (e.g., form cues you write)</li>
            <li>Cardio blocks associated with workout days</li>
          </ul>
          <p className="font-medium text-gray-700 mt-3 mb-1">Exercise Logs (per workout session):</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Date the workout was performed</li>
            <li>Sets, reps, and weight for each exercise</li>
            <li>Per-set granular data: set number, reps, weight, and RPE (Rate of Perceived Exertion, 1–10 scale)</li>
            <li>Weight unit (lbs or kg)</li>
          </ul>
          <p className="font-medium text-gray-700 mt-3 mb-1">Workout Completion Tracking:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Which workout days you completed, and on which calendar dates</li>
            <li>Your position in your split cycle over time</li>
            <li>Weekly and daily streak counts</li>
            <li>Last workout date</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">2.4 Points &amp; Performance History</h3>
          <p className="mb-2">We maintain a detailed record of your performance scoring:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Weekly points records: total points, exercise points, missed-workout-day penalties, perfect week bonuses, streak bonuses, and whether a week was "perfect"</li>
            <li>Daily point snapshots: a nightly snapshot (created automatically at 23:59 UTC) of your points, exercises completed, workout days completed, streak status, and a full exercise-level breakdown</li>
            <li>Split snapshots: a frozen copy of your workout structure taken each Monday at 00:00 UTC to ensure consistent weekly calculations</li>
            <li>Pending changes: if you modify your split mid-week, the change is queued and applied the following Monday</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">2.5 Gamification Data</h3>
          <div className="space-y-2 text-sm">
            {[
              ['Power-ups', 'Type, rarity, status (available/active/used), how earned, when activated, bonus points provided, which exercise or workout type applies'],
              ['Spin balance', 'Available spins, maximum spins, lifetime spins earned/used, last spin timestamps; new users receive 3 welcome spins'],
              ['Streak milestones', 'Per-day records of streak achievements, reward type (points/power-up/icon/spin), whether claimed, and when claimed'],
              ['Icon unlocks', 'Which avatar icons you have unlocked and how they were earned'],
              ['Cumulative stats', 'Total lifetime points, current weekly/daily streak counts'],
            ].map(([d, desc]) => (
              <div key={d} className="flex gap-3">
                <span className="font-medium text-gray-700 min-w-[130px]">{d}:</span>
                <span>{desc}</span>
              </div>
            ))}
          </div>

          <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">2.6 Teams &amp; Social Data</h3>
          <p className="font-medium text-gray-700 mb-1 text-sm">Teams:</p>
          <ul className="list-disc list-inside space-y-1 text-sm mb-3">
            <li>Team name, description, and icon</li>
            <li>Whether the team is public or private</li>
            <li>Team invite code (8-character code generated for sharing)</li>
            <li>Maximum team size and challenge mode setting</li>
            <li>Team creation and modification timestamps</li>
          </ul>
          <p className="font-medium text-gray-700 mb-1 text-sm">Team Membership:</p>
          <ul className="list-disc list-inside space-y-1 text-sm mb-3">
            <li>Which teams you belong to, your role (owner or member), and when you joined</li>
          </ul>
          <p className="font-medium text-gray-700 mb-1 text-sm">Team Join Requests:</p>
          <ul className="list-disc list-inside space-y-1 text-sm mb-3">
            <li>Your request status (pending/approved/declined/expired)</li>
            <li>An optional message you write explaining why you want to join</li>
            <li>Request expiration (7 days from creation)</li>
            <li>Who approved or declined your request and when</li>
          </ul>
          <p className="font-medium text-gray-700 mb-1 text-sm">Friend Relationships:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Accepted friendships (stored as a pair of user IDs)</li>
            <li>Pending and historical friend requests (sender, receiver, status, timestamps)</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">2.7 Challenges &amp; Competition Data</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Which challenges your team participated in, week, status, and results</li>
            <li>Team scores, average member scores, member contribution breakdown, and which user IDs were on the team at challenge time</li>
            <li>ELO rating before and after each challenge, ELO change, and final rank</li>
            <li>Peak ELO achieved and the date it was reached</li>
            <li>Win/loss/draw records</li>
            <li>Challenge invites: which team sent/received the invite, week targeted, invite status, and response timestamps</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">2.8 Callouts (Workout Verification)</h3>
          <p className="mb-3 text-sm">Callouts are challenges issued when a team member disputes another member's logged workout. We collect:</p>
          <div className="space-y-2 text-sm">
            {[
              ['Who challenged whom', 'Challenger user ID and target user ID'],
              ['Disputed log details', 'Exercise name, claimed weight, sets, reps, when it was logged'],
              ['Points at stake', 'Penalty and reward points'],
              ['Callout status', 'Pending → video submitted → under review → approved/rejected/disputed'],
              ['Submitted video URL', 'URL to the proof video uploaded to Supabase Storage'],
              ['Video submission timestamp', 'When the video was uploaded'],
              ['Dispute metadata', 'Whether disputed, who requested the dispute, and when'],
              ['AI review results', 'Whether AI reviewed the video, AI confidence score (0–100), AI decision (approve/reject), and the full AI analysis JSON'],
              ['Votes', "Each team member's vote (approve or reject) and any written comment justifying their vote"],
            ].map(([d, desc]) => (
              <div key={d} className="flex gap-3">
                <span className="font-medium text-gray-700 min-w-[180px]">{d}:</span>
                <span>{desc}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm">
            Video evidence is stored in Supabase Storage (bucket: callout-videos) and is also sent to OpenAI for
            automated review.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">2.9 Chat &amp; Messaging</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Data</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Message content', 'The text you write in team chats or challenge matchup chats'],
                  ['Message type', 'Text, system message, or callout event'],
                  ['Sender identity', 'Your user ID'],
                  ['Chat context', 'Which team or challenge the message belongs to'],
                  ['@Mentions', 'Records of which users were @mentioned in a message'],
                  ['Timestamps', 'When each message was sent'],
                ].map(([d, desc]) => (
                  <tr key={d}>
                    <td className="border border-gray-200 px-4 py-2 font-medium text-gray-700 whitespace-nowrap">{d}</td>
                    <td className="border border-gray-200 px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">2.10 Activity Feed</h3>
          <p className="mb-2 text-sm">For each team, we generate an activity feed that records:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Who completed a workout</li>
            <li>Who set a personal record</li>
            <li>Who created or resolved a callout</li>
            <li>Who joined the team</li>
            <li>Points associated with each activity</li>
            <li>Which exercise or workout day the activity relates to</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">2.11 Notifications</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Data</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Notification content', 'Title and body text'],
                  ['Category', 'One of: callout, challenge, motivation, achievement, reminder, social, system'],
                  ['Read status', 'Whether you have read the notification'],
                  ['Priority', 'Low, medium, high, or urgent'],
                  ['Deep link', 'URL for in-app navigation (e.g., repple://challenge/123)'],
                  ['Related entity', 'Which callout or challenge triggered the notification'],
                  ['Push delivery status', 'Whether a push notification was sent and when'],
                ].map(([d, desc]) => (
                  <tr key={d}>
                    <td className="border border-gray-200 px-4 py-2 font-medium text-gray-700 whitespace-nowrap">{d}</td>
                    <td className="border border-gray-200 px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">2.12 Device Information</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Data</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Device token', 'Unique push notification token from your iOS or Android device'],
                  ['Platform', 'iOS or Android'],
                  ['Device name', 'Human-readable name you provide (e.g., "iPhone 14 Pro")'],
                  ['App version', 'Version of Repple installed on the device'],
                  ['Last active timestamp', 'When this device last made an API call'],
                ].map(([d, desc]) => (
                  <tr key={d}>
                    <td className="border border-gray-200 px-4 py-2 font-medium text-gray-700 whitespace-nowrap">{d}</td>
                    <td className="border border-gray-200 px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">2.13 AI-Generated Content &amp; Image Analysis</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Data</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Uploaded images', 'Workout plan photos or screenshots you submit'],
                  ['Requested workout parameters', 'Target days per week you request'],
                  ['Generated results', 'The AI-produced workout plan stored in our database'],
                  ['Processing status', 'Task status (pending/completed/error) and any error messages'],
                ].map(([d, desc]) => (
                  <tr key={d}>
                    <td className="border border-gray-200 px-4 py-2 font-medium text-gray-700 whitespace-nowrap">{d}</td>
                    <td className="border border-gray-200 px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm">Images and workout descriptions are sent to OpenAI for processing.</p>

          <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">2.14 Invite Links</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Data</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Invite code', '12-character unique code'],
                  ['Link type', 'Friend invite, team invite, or team join link'],
                  ['Creator', 'Your user ID'],
                  ['Target', 'Team ID (for team invites)'],
                  ['Expiration', '7 days from creation'],
                  ['Redemption', 'Who used the link and when'],
                ].map(([d, desc]) => (
                  <tr key={d}>
                    <td className="border border-gray-200 px-4 py-2 font-medium text-gray-700 whitespace-nowrap">{d}</td>
                    <td className="border border-gray-200 px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. How We Use Your Information */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Purpose</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Data Used</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Providing the service', 'All workout, exercise log, and split data to display your training history'],
                  ['Calculating points and rankings', 'Exercise logs, weights, completion status, streaks'],
                  ['Strength standard comparisons', 'Body weight, gender, age, experience level'],
                  ['Team challenges and ELO', 'Weekly points, team membership, challenge history'],
                  ['Automated scoring', 'Nightly cron jobs create daily snapshots and weekly split snapshots'],
                  ['AI workout plan generation', 'Uploaded images, requested parameters'],
                  ['AI callout review', 'Submitted proof videos'],
                  ['Push notifications', 'Device tokens, notification preferences, timezone, quiet hours'],
                  ['Activity feeds', 'Workout completions, callout events, team joins'],
                  ['Gamification', 'Streak milestones, power-ups, spin balance, icon unlocks'],
                  ['Account security', 'Email, password hash, JWT tokens'],
                ].map(([purpose, data]) => (
                  <tr key={purpose}>
                    <td className="border border-gray-200 px-4 py-2 font-medium text-gray-700 whitespace-nowrap">{purpose}</td>
                    <td className="border border-gray-200 px-4 py-2">{data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Third-Party Services */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Third-Party Services</h2>
          <p className="mb-4">We share data with the following third-party services to operate the app:</p>

          {[
            {
              title: '4.1 Supabase (Authentication & Storage)',
              rows: [
                ['Data shared', 'Email address, password (hashed by Supabase), JWT session data, callout video files'],
                ['Purpose', 'Authentication (login/signup/session management) and storage of proof videos'],
                ['Storage location', 'Supabase-managed infrastructure'],
                ['Privacy policy', 'supabase.com/privacy'],
              ],
            },
            {
              title: '4.2 OpenAI',
              rows: [
                ['Data shared', 'Workout plan images you upload, natural language workout descriptions, callout proof videos'],
                ['Purpose', 'AI-powered workout plan parsing and callout video review ("Repple Monkey" AI reviewer)'],
                ['Note', "Once data is sent to OpenAI, it is subject to OpenAI's data usage policies"],
                ['Privacy policy', 'openai.com/policies/privacy-policy'],
              ],
            },
            {
              title: '4.3 Apple Push Notification Service (APNS)',
              rows: [
                ['Data shared', 'Your iOS device token, notification title and body text'],
                ['Purpose', 'Delivering push notifications to iOS devices'],
                ['Privacy policy', 'apple.com/legal/privacy'],
              ],
            },
            {
              title: '4.4 Firebase Cloud Messaging (Google FCM)',
              rows: [
                ['Data shared', 'Your Android device token, notification title and body text'],
                ['Purpose', 'Delivering push notifications to Android devices'],
                ['Privacy policy', 'policies.google.com/privacy'],
              ],
            },
          ].map((service) => (
            <div key={service.title} className="mt-5">
              <h3 className="text-base font-semibold text-gray-800 mb-2">{service.title}</h3>
              <ul className="space-y-1 text-sm">
                {service.rows.map(([label, value]) => (
                  <li key={label}>
                    <span className="font-medium text-gray-700">{label}:</span> {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* 5. Data Retention */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Retention</h2>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">5.1 Account Deletion</h3>
          <p className="mb-2 text-sm">When you delete your account, the following data is permanently deleted:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {[
              'All workout splits, workout days, exercises, and exercise logs',
              'All exercise log set records',
              'All weekly points, daily snapshots, and split snapshots',
              'All team memberships and join requests',
              'All challenge participation records',
              'All chat messages and @mentions',
              'All notifications and activity feed entries',
              'All device tokens',
              'All power-ups, spins, streak milestones, and icon unlocks',
              'All callouts, callout votes, and submitted proof videos',
              'All friend relationships and friend requests',
              'All invite links you created',
              'All AI plan generation tasks and results',
              'Your user profile record',
            ].map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="mt-3 text-sm">
            Some records that reference your account may have the user ID set to NULL rather than deleted (e.g., if
            you approved a team join request on behalf of a team you no longer own).
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">5.2 Automatic Expiration</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Data</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Expiration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Team join requests', '7 days from creation'],
                  ['Friend invite links', '7 days from creation'],
                  ['Team invite links', '7 days from creation'],
                  ['Challenge invites', 'End of the targeted challenge week'],
                  ['Callout response deadlines', 'Sunday 10:00 PM EST of the challenge week'],
                ].map(([d, exp]) => (
                  <tr key={d}>
                    <td className="border border-gray-200 px-4 py-2 font-medium text-gray-700">{d}</td>
                    <td className="border border-gray-200 px-4 py-2">{exp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">5.3 Automated Data Generation</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Data</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Schedule</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Daily points snapshots', 'Every night at 23:59 UTC'],
                  ['Split snapshots', 'Every Monday at 00:00 UTC'],
                  ['Weekly challenge setup', 'Every Monday at 00:05 UTC'],
                  ['Challenge completion', 'Every Sunday at 22:05 UTC'],
                ].map(([d, sched]) => (
                  <tr key={d}>
                    <td className="border border-gray-200 px-4 py-2 font-medium text-gray-700">{d}</td>
                    <td className="border border-gray-200 px-4 py-2">{sched}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Data Security */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Security</h2>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-gray-700">Authentication:</span> Your password is never stored in plaintext. Supabase handles all password hashing. We validate your identity using cryptographically signed JWT tokens.</li>
            <li><span className="font-medium text-gray-700">Secrets:</span> API keys and credentials are stored in server-side environment variables and never committed to source code.</li>
            <li><span className="font-medium text-gray-700">Transport:</span> All API communication occurs over HTTPS.</li>
            <li><span className="font-medium text-gray-700">Cron endpoints:</span> Administrative cron endpoints are protected by a secret key (X-Cron-Secret header) and are not accessible to regular users.</li>
            <li><span className="font-medium text-gray-700">Database:</span> All data is stored in a PostgreSQL database hosted on Render. User ownership is enforced on every data access query.</li>
          </ul>
        </section>

        {/* 7. Children's Privacy */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Children's Privacy</h2>
          <p>
            Repple is not intended for users under the age of 13. We do not knowingly collect personal data from
            children under 13. If we become aware that we have collected data from a child under 13, we will delete
            it promptly.
          </p>
        </section>

        {/* 8. Your Rights */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Your Rights</h2>
          <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Delete your account and all associated data</li>
            <li>Object to certain types of data processing</li>
            <li>Data portability — request a copy of your data in a machine-readable format</li>
            <li>Withdraw consent for optional data (e.g., disable push notifications, remove device tokens)</li>
          </ul>
          <p className="mt-3 text-sm">To exercise any of these rights, contact us at the address below.</p>
        </section>

        {/* 9. Changes */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will update the "Last Updated" date
            at the top. If changes are significant, we will notify you via push notification or in-app message.
          </p>
        </section>

        {/* 10. Contact */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at:
          </p>
          <p className="mt-3 text-sm">
            <span className="font-medium text-gray-700">Repple</span><br />
            apprepple@gmail.com
          </p>
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
