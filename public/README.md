# 📁 Public Assets

## 🎨 Add Your Logo Here!

Please add your `Repple_Monkey_Vector.png` file to this folder.

### Requirements:
- **File name**: `Repple_Monkey_Vector.png` (must match exactly)
- **Format**: PNG (transparent background recommended)
- **Size**: 512x512px or similar (will be scaled to 96x96 / 128x128)
- **Location**: `/public/Repple_Monkey_Vector.png`

The logo will appear at the top of the landing page.

### If you need to use a different filename:

Edit `src/app/components/Logo.tsx` and update the image path:

```tsx
<Image
  src="/YOUR_LOGO_NAME.png"  // Change this
  alt="Repple Logo"
  // ...
/>
```
