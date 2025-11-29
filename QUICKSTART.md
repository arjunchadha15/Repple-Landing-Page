# ⚡ Repple Quick Start

Get your landing page running in 3 minutes!

## 🎯 Steps

### 1. Install Dependencies
```bash
cd repple-landing
npm install
```

### 2. Add Your Logo
- Copy `Repple_Monkey_Vector.png` to the `/public` folder
- Or use any PNG/JPG and update the filename in `src/app/components/Logo.tsx`

### 3. Run Development Server
```bash
npm run dev
```

### 4. Open Your Browser
Visit: **http://localhost:3000**

### 5. Test It Out!
- Enter an email → Click "Join Waitlist"
- Try a `@purdue.edu` email to see the special message
- Check `data/waitlist.json` to see stored emails

## ✅ That's It!

Your landing page is running locally!

## 🚀 Ready to Deploy?

See `DEPLOYMENT.md` for detailed deployment instructions.

**Quick Deploy:**
```bash
npm i -g vercel
vercel
```

## 🎨 Want to Customize?

### Change the headline:
Edit `src/app/components/Hero.tsx`

### Change colors:
Edit `tailwind.config.ts`

### Change email storage:
Modify `src/app/lib/json-storage.ts`

---

**Need help?** Check `README.md` for full documentation!
