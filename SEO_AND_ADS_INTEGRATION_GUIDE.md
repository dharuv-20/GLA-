# SEO, Meta Pixel & Google Ads Integration Guide
### The Global Language Academy (TGLA) — `https://tglalearning.com`

> [!CAUTION]
> ### ⚠️ STRICT CODE INTEGRITY & LIABILITY DISCLAIMER
> 1. **SCOPE LIMITATION:** This guide is intended **EXCLUSIVELY** for inserting marketing tracking pixels (Meta Pixel, Google Tag Manager, Google Analytics, Google Ads) and domain verification tags.
> 2. **NO STRUCTURAL CODE MODIFICATIONS:** Do **NOT** modify, delete, rename, or reorder any files, folders, React components, CSS stylesheets, navigation elements, routing structures, or backend configurations.
> 3. **ZERO LIABILITY NOTICE:** All application code, styling, and functionality have been delivered in fully verified, production-ready, working condition. If the client’s marketing or SEO team modifies any application code outside the designated tracking block, introduces syntax errors, breaks site components, or causes website downtime, **the original developers bear ZERO responsibility**. Any developer support required to diagnose, repair, or restore broken code will be billed as separate billable maintenance hours.

---

## 1. Prerequisites (Access Setup)

The repository owner must invite your GitHub account as a collaborator:
1. Accept the GitHub invitation sent to your email for repository:  
   👉 **`https://github.com/dharuv-20/GLA-`**
2. Once accepted, you will have write permissions to push tracking updates to the `main` branch.

---

## 2. Method 1: The Easiest Way (Directly in Browser — No Terminal Needed)

You do **not** need to install Git, Node.js, or any developer tools on your computer. You can insert your tracking tags directly from your web browser in 3 minutes:

1. Open this exact file link on GitHub:  
   👉 **[https://github.com/dharuv-20/GLA-/blob/main/src/app/layout.tsx](https://github.com/dharuv-20/GLA-/blob/main/src/app/layout.tsx)**
2. In the top-right corner of the code box, click the **Pencil icon** (✏️ *"Edit this file"*).
3. Scroll down to line **117** where you will see this marked block:
   ```tsx
   {/* ========================================================================= */}
   {/* MARKETING, SEO & ADS TRACKING SCRIPTS (PASTE META PIXEL & GTM HERE)       */}
   {/* NOTICE: DO NOT MODIFY, MOVE, OR REMOVE ANY OTHER LINES OF CODE ON THIS PAGE*/}
   {/* ========================================================================= */}
   ```
4. Paste your required tracking code snippets (choose from Section 4 below) immediately below that line.
5. In the top-right corner, click the green button: **"Commit changes..."**
6. Type a message like `feat(tracking): add Meta Pixel and GA4`, select **"Commit directly to the main branch"**, and click **Commit changes**.
7. **Done!** Netlify will automatically detect your change, compile the site, and push your tags live within **60 to 90 seconds**.

---

## 3. Method 2: Local Git Workflow (For Technical Users)

If you prefer working locally using VS Code and Git:

```bash
# 1. Clone repository
git clone https://github.com/dharuv-20/GLA-.git
cd GLA-

# 2. Install dependencies
npm install

# 3. Edit src/app/layout.tsx to insert your scripts (see Section 4)

# 4. CRITICAL: Test compilation locally to ensure no syntax errors
npm run build

# 5. If build succeeds ("✓ Compiled successfully"), commit and push to main:
git add src/app/layout.tsx
git commit -m "feat(tracking): add Meta Pixel and Google Ads tracking"
git push origin main
```

---

## 4. Ready-to-Use Tracking Code Templates

> [!IMPORTANT]
> Because this website is built with **Next.js (React)**, standard HTML `<script>` tags must use the Next.js `<Script>` component. Use the exact formats provided below.

### 4.1 Meta (Facebook) Pixel
Paste this code under line 117 in [`src/app/layout.tsx`](src/app/layout.tsx), replacing **`YOUR_PIXEL_ID`** with your actual 15-16 digit Meta Pixel ID:

```tsx
        {/* Meta (Facebook) Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
```

---

### 4.2 Google Tag Manager (GTM)
If you manage tags through GTM, paste this under line 117, replacing **`GTM-XXXXXXX`** with your GTM Container ID:

```tsx
        {/* Google Tag Manager (GTM) */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
```

---

### 4.3 Google Analytics 4 (GA4) / Google Ads Direct Tag
If not using GTM, paste this under line 117, replacing **`G-XXXXXXXXXX`** with your GA4 or Google Ads Measurement ID:

```tsx
        {/* Google Analytics 4 / Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-custom" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
```

---

### 4.4 Search Console & Meta Domain Verification Meta Tags
If you need to verify domain ownership for Google Search Console, Pinterest, or Facebook Domain Verification:
1. Locate the `export const metadata: Metadata = { ... }` block near **line 33** in `src/app/layout.tsx`.
2. Add the `verification` key as shown:

```tsx
export const metadata: Metadata = {
  // ... leave all existing title, description, keywords untouched ...
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
    other: {
      "facebook-domain-verification": ["YOUR_META_DOMAIN_VERIFICATION_CODE"],
    },
  },
};
```

---

## 5. How to Verify Live Tracking

Once your changes are committed to the `main` branch, wait **2 minutes** and verify:
1. Open [`https://tglalearning.com`](https://tglalearning.com) in Google Chrome.
2. Use official browser extensions to confirm:
   - **Meta Pixel Helper**: Look for green checkmarks indicating active `PageView` events.
   - **Google Tag Assistant (Tag Explorer)**: Look for active GTM / GA4 container status.
3. Check the real-time analytics dashboard in Google Analytics 4 and Meta Events Manager.

---
*Document prepared for: Client SEO & Marketing Team, The Global Language Academy.*
