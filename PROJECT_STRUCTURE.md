# 📂 Project Structure

```
repple-landing/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── tsconfig.json             # TypeScript configuration
│   ├── next.config.js            # Next.js configuration
│   ├── tailwind.config.ts        # Tailwind CSS + Repple colors
│   ├── postcss.config.js         # PostCSS configuration
│   └── .gitignore                # Git ignore rules
│
├── 📁 src/
│   ├── 📁 app/
│   │   │
│   │   ├── 📁 api/
│   │   │   └── 📁 waitlist/
│   │   │       └── route.ts      # POST /api/waitlist endpoint
│   │   │
│   │   ├── 📁 components/
│   │   │   ├── Hero.tsx          # Main hero section
│   │   │   ├── Logo.tsx          # Repple logo display
│   │   │   ├── WaitlistForm.tsx  # Email input + submit
│   │   │   └── SuccessModal.tsx  # Confirmation modal
│   │   │
│   │   ├── 📁 lib/
│   │   │   ├── email-validator.ts    # Email validation + Purdue detection
│   │   │   └── json-storage.ts       # File-based storage
│   │   │
│   │   ├── globals.css           # Global styles + Tailwind
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   │
│   └── 📁 types/
│       └── waitlist.ts           # TypeScript interfaces
│
├── 📁 data/
│   └── waitlist.json             # Email storage (auto-created)
│
├── 📁 public/
│   ├── README.md                 # Instructions for adding logo
│   └── Repple_Monkey_Vector.png  # ⚠️ ADD YOUR LOGO HERE!
│
└── 📄 Documentation
    ├── README.md                 # Main documentation
    ├── QUICKSTART.md             # 3-minute setup guide
    ├── DEPLOYMENT.md             # Deployment instructions
    └── PROJECT_STRUCTURE.md      # This file!
```

## 🎨 Key Files to Know

### 🔧 Configuration
- **tailwind.config.ts**: Repple brand colors (#7F3DFF, #8A2BE2)
- **package.json**: All dependencies (Next.js, React, TypeScript, Tailwind)

### 🎭 Components
- **Hero.tsx**: Main landing page content
- **WaitlistForm.tsx**: Email form with validation
- **SuccessModal.tsx**: Confirmation popup

### 🔌 Backend
- **api/waitlist/route.ts**: Email submission API
- **lib/json-storage.ts**: Saves emails to JSON file
- **lib/email-validator.ts**: Email validation + @purdue.edu detection

### 💾 Data Storage
- **data/waitlist.json**: All submitted emails stored here
  ```json
  {
    "entries": [
      {
        "email": "user@example.com",
        "isPurdueUser": false,
        "timestamp": "2025-11-29T...",
        "source": "landing-page"
      }
    ]
  }
  ```

## 🚀 Quick Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel
```

## 📝 Next Steps

1. Add `Repple_Monkey_Vector.png` to `/public` folder
2. Run `npm install`
3. Run `npm run dev`
4. Visit http://localhost:3000
5. Test the waitlist form!

See **QUICKSTART.md** for detailed instructions.
