# 🎮 Repple Landing Page

**Repple turns the gym into a game.** It's a gamified fitness iOS app for college students with workout logging, competitive matchups, and seasonal leaderboards. It grew to 1,000+ users and 500,000+ social media views in its first month.

This repo is Repple's website: the landing page, the email waitlist, and the invite and join pages that deep-link friends into the app.

Built with Next.js 14, TypeScript, and Tailwind CSS.

**Related:** [Repple AI Workout Planner](https://github.com/arjunchadha15/Workout-Planner), the backend that generates each user's training plan.

## ✨ Features

- 🎨 Purple-themed design matching Repple brand aesthetic
- 📧 Email waitlist with automatic Purdue student detection
- 🎓 Priority access tagging for @purdue.edu emails
- 💾 Simple JSON file storage (no database required)
- 📱 Fully responsive mobile design
- ⚡ Built with Next.js 14 App Router
- 🎭 Smooth animations and glassmorphism effects
- 🔒 Type-safe with TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project:**
```bash
cd repple-landing
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
repple-landing/
├── src/
│   ├── app/
│   │   ├── api/waitlist/route.ts    # API endpoint for email submissions
│   │   ├── components/              # React components
│   │   │   ├── Hero.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── WaitlistForm.tsx
│   │   │   └── SuccessModal.tsx
│   │   ├── lib/                     # Utility functions
│   │   │   ├── email-validator.ts
│   │   │   └── json-storage.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── types/
│       └── waitlist.ts              # TypeScript interfaces
├── data/
│   └── waitlist.json                # Email storage
├── public/
│   └── Repple_Monkey_Vector.png     # Logo (add your logo here!)
└── [config files]
```

## 🎨 Customization

### Colors

The brand colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  repple: {
    purple: '#7F3DFF',
    violet: '#8A2BE2',
    dark: '#0F0F0F',
    // ...
  }
}
```

### Content

Edit the hero text in `src/app/components/Hero.tsx`:
- Headline
- Subheadline
- Success messages

## 📧 Waitlist Data

Emails are stored in `data/waitlist.json` with the following structure:

```json
{
  "entries": [
    {
      "email": "student@purdue.edu",
      "isPurdueUser": true,
      "timestamp": "2025-11-29T12:00:00.000Z",
      "source": "landing-page"
    }
  ]
}
```

### Accessing Waitlist Data

You can:
- View the JSON file directly
- Import it into Excel/Google Sheets
- Process it with scripts
- Migrate to a database later

## 🚀 Deployment to Vercel

### Option 1: Vercel CLI

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

Follow the prompts and your site will be live!

### Option 2: GitHub Integration (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js and deploy

### Important Notes for Deployment

⚠️ **Waitlist Data Persistence**: 

The `data/waitlist.json` file will reset on each deployment with Vercel's serverless architecture. For production, consider:

**Option A: Commit the data file** (simple but not recommended for scale)
- Remove `/data/waitlist.json` from `.gitignore`
- Commit changes after each deployment to preserve data

**Option B: Upgrade to a database** (recommended for production):
- Supabase (PostgreSQL)
- Firebase Firestore
- Airtable
- MongoDB Atlas

All have generous free tiers and easy setup!

## 🌐 Domain Connection (Squarespace → Vercel)

### Step 1: Add Domain in Vercel

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Domains**
3. Click **Add Domain**
4. Enter your domain (e.g., `repple.com` or `www.repple.com`)
5. Vercel will provide DNS records to add

### Step 2: Configure DNS in Squarespace

1. Log into Squarespace
2. Go to **Settings** → **Domains**
3. Click on your domain
4. Navigate to **Advanced Settings** → **DNS Settings**

### Step 3: Add DNS Records

**For Root Domain (repple.com):**

Add A Record:
```
Type: A
Host: @
Value: 76.76.21.21
TTL: 3600
```

**For www subdomain:**

Add CNAME Record:
```
Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Step 4: Verify in Vercel

1. Return to Vercel Dashboard
2. Click **Verify** next to your domain
3. Wait for DNS propagation (can take 24-48 hours, usually faster)

### Alternative: Use Subdomain

If you want to use a subdomain (e.g., `app.yourdomain.com`):

```
Type: CNAME
Host: app
Value: cname.vercel-dns.com
```

## 🛠️ Scripts

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

## 📱 Testing

### Test Cases to Verify:

1. ✅ Email validation (invalid emails rejected)
2. ✅ Purdue email detection (@purdue.edu)
3. ✅ Duplicate email prevention
4. ✅ Success modal appears after submission
5. ✅ Special message for Purdue users
6. ✅ Mobile responsive layout
7. ✅ Form loading states
8. ✅ Error messages display correctly

### Test Emails:

```
test@gmail.com        → Regular user
student@purdue.edu    → Purdue user (priority)
invalid-email         → Should show error
duplicate@test.com    → Should prevent duplicate
```

## 🎯 Next Steps

### After Launch:

1. **Add Analytics**
   - Google Analytics
   - Vercel Analytics
   - Plausible (privacy-focused)

2. **Upgrade Storage** (when you have more signups):
   - Migrate to Supabase/Firebase/Airtable
   - Set up email notifications
   - Create admin dashboard

3. **Add Features**:
   - Email confirmation
   - Refer-a-friend system
   - Countdown timer
   - Social media links
   - Preview screenshots/video

4. **SEO Optimization**:
   - Add sitemap
   - Optimize meta tags
   - Add Open Graph images
   - Submit to Google Search Console

## 🤝 Support

Need help? Check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## 📄 License

This project is private and proprietary to Repple.

---

Made with 💜 for Repple
