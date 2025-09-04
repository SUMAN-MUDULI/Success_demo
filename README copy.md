# SuccessMantrr Landing — Next.js + Tailwind

## Quick Start
1. Replace referral link: In your deploy settings set environment variable `NEXT_PUBLIC_AFF_LINK` to your Success Mantrr referral URL.
2. Run locally:
   - `npm install`
   - `npm run dev`

## Deploy to Render (quick steps)
1. Push this repo to GitHub.
2. On Render, create a new **Web Service** and connect your GitHub repo.
3. Build Command: `npm install && npm run build`
4. Start Command: `npm run start`
5. Add environment variable: `NEXT_PUBLIC_AFF_LINK` = `https://successmantrr.com/?ref=YOUR_ID`
6. (Optional) Add custom domain in Render dashboard.

Notes: For analytics add Google Analytics / Facebook Pixel ID as env vars and insert scripts into `pages/_document.js` or via a small component.