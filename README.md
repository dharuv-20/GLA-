# Global Language Academy (GLA) Digital Engine
A premium, production-ready, search-optimized educational portal built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**.

---

## 1. Project Directory Map
```
root/
├── src/
│   ├── app/                    # Next.js Pages & Suspense Routing
│   │   ├── layout.tsx          # Global HTML, Next Font, Analytics wrappers
│   │   ├── page.tsx            # Branded Home Page
│   │   ├── about/              # About the Academy & Faculty Grid
│   │   ├── contact/            # Physical center contact & inline forms
│   │   ├── courses/            # Course directory hub
│   │   │   └── [slug]/         # Dynamic course landing pages (SSG)
│   │   ├── services/           # Visa help & mock test workshops
│   │   ├── sitemap.ts          # Dynamic search-engine sitemap generator
│   │   └── robots.ts           # Dynamic indexing configuration
│   ├── components/             # Reusable UI primitives
│   │   └── layout/             # Header, Footer, AnnouncementBar, Sticky CTA
│   ├── features/               # Isolated domain structures
│   │   └── lead-capture/       # Lead capture form validation and API hooks
│   ├── types/                  # Shared TypeScript interfaces
│   ├── data/                   # JSON databases (Course syllabus, FAQs)
│   └── styles/
│       └── globals.css         # Tailwind v4 theme variables
```

---

## 2. Fast Setup Guide

### 2.1 Install Dependencies
```bash
npm install
```

### 2.2 Run Development Server
```bash
npm run dev
```

### 2.3 Compile Production Bundle
```bash
npm run build
```

---

## 3. Environment Variables Configuration (`.env`)
Create a `.env` or `.env.local` file at the root:
```ini
# Core Application URLs
NEXT_PUBLIC_APP_URL=https://www.gla-academy.com

# Google Sheets Lead Targets (Server Actions)
GOOGLE_SERVICE_ACCOUNT_EMAIL=gla-leads@gla-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SPREADSHEET_ID=1A2B3C4D5E6F7G8H9I0J

# Email Delivery notifications
RESEND_API_KEY=re_123456789
NOTIFICATION_RECEIVER_EMAIL=admissions@gla-academy.com

# CF Turnstile Spam Protection
CLOUDFLARE_TURNSTILE_SECRET=0x4AAAAAA...
NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITEKEY=0x4AAAAAA...
```

---

## 4. Operational Maintenance & Scale-Up Guidelines

### 4.1 Launching a New Course Landing Page
To launch a new course (e.g. "French language course"), update the static array inside `src/data/courses-db.ts`:
1. Append a new course configuration matching the `Course` type signature.
2. Provide slug target: `french-language`.
3. Provide duration, level breakdowns, certified faculty profile links, and FAQ answers.
4. Save the file. Next.js dynamic routing will automatically capture the entry, compile it at the next build run, index it in `sitemap.xml`, and serve it under `/courses/french-language` without writing new component code.

### 4.2 Accessibility Standards (WCAG AA)
Maintain these rules for any new layout adjustments:
*   Ensure all buttons and links are focusable and display outline markers on `:focus-visible`.
*   Ensure all custom forms reference errors using `aria-invalid` and `aria-describedby` helper properties.
*   Ensure color combinations pass the `4.5:1` contrast ratio limit against light/dark backgrounds.
