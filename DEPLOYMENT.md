# 🚀 Repple Deployment Guide

## Quick Deployment Checklist

### ✅ Pre-Deployment

- [ ] Add `Repple_Monkey_Vector.png` to `/public` folder
- [ ] Test locally: `npm run dev`
- [ ] Verify email form works
- [ ] Test Purdue email detection
- [ ] Test mobile responsiveness
- [ ] Run production build: `npm run build`

### ✅ Deploy to Vercel

**Option 1: Vercel CLI (Fastest)**
```bash
npm i -g vercel
vercel login
vercel --prod
```

**Option 2: GitHub + Vercel (Recommended)**
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial Repple landing page"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main

# Then import in Vercel dashboard
```

### ✅ Connect Domain

1. **In Vercel:**
   - Settings → Domains → Add Domain
   - Enter: `yourdomain.com`

2. **In Squarespace:**
   - Settings → Domains → Your Domain → DNS Settings
   - Add A Record: `@` → `76.76.21.21`
   - Add CNAME: `www` → `cname.vercel-dns.com`

3. **Wait & Verify:**
   - DNS propagation: 10 min - 48 hours
   - Check: `https://www.whatsmydns.net`

## Environment Variables

For JSON storage: **None required!** ✨

Future integrations (optional):
```env
# If you migrate to external services later
SUPABASE_URL=your_url
SUPABASE_ANON_KEY=your_key
# etc.
```

## Post-Deployment

### Verify Everything Works:

1. Visit your deployed URL
2. Submit test email
3. Check `data/waitlist.json` (in your local repo)
4. Test @purdue.edu email for special message

### Monitor:

- Check Vercel Dashboard for:
  - Deployment status
  - Build logs
  - Analytics (if enabled)

### Backup Waitlist Data:

Since Vercel is serverless, the `waitlist.json` file **doesn't persist** between deployments.

**Solutions:**

1. **Periodic Manual Backup:**
   ```bash
   # Download from your deployment (if exposed) or
   # Keep local copy when testing
   ```

2. **Upgrade to Database (Recommended for production):**
   - Set up Supabase (5 minutes, free tier)
   - Or use Airtable for easy viewing
   - Or Firebase for real-time

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Domain Not Working
- Wait 24-48 hours for DNS
- Use `dig yourdomain.com` to check DNS
- Clear browser cache
- Try incognito mode

### Emails Not Saving
- Check file permissions on `data/` folder
- Verify API route is working: `/api/waitlist`
- Check Vercel deployment logs

### Logo Not Showing
- Ensure `Repple_Monkey_Vector.png` is in `/public`
- Check file name matches exactly (case-sensitive)
- Verify image format (PNG, JPG, SVG all work)

## Scaling Up

When you're ready for more features:

### Add Email Service
```bash
npm install resend
# or
npm install @sendgrid/mail
```

### Add Database
```bash
# Supabase
npm install @supabase/supabase-js

# or Firebase
npm install firebase

# or Prisma + PostgreSQL
npm install prisma @prisma/client
```

### Add Analytics
```bash
# Vercel Analytics (easiest)
npm install @vercel/analytics

# or Google Analytics
npm install @next/third-parties
```

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Squarespace DNS**: https://support.squarespace.com/hc/en-us/articles/205812378

---

Need help? The Vercel community and Next.js Discord are great resources!
