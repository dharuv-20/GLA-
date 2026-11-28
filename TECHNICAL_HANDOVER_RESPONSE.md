# Technical Handover & Production Specification Response
### The Global Language Academy (TGLA) — `https://tglalearning.com`

---

## 1. Netlify Server Credentials & Hosting Configuration

| Specification | Details / Configuration |
| :--- | :--- |
| **Netlify Account Access** | Managed through Netlify Team Workspace. Client/SEO team can be invited directly as **Collaborators / Team Members** via Netlify Dashboard (`app.netlify.com`). |
| **Netlify Team / Workspace** | Primary Workspace for **TGLA Learning** (`tglalearning`). |
| **Site Name & Domain** | **Site Domain:** `https://tglalearning.com`<br>**Netlify Subdomain:** Visible in Netlify Dashboard under *Site Overview*. |
| **Site ID (API ID)** | Accessible under **Netlify Dashboard > Site configuration > General > Site details > Site ID (API ID)**. |
| **DNS Configuration Details** | **Apex Domain (`tglalearning.com`):** `A Record` pointing to Netlify Load Balancer IP: `75.2.60.5`<br>**WWW Subdomain (`www.tglalearning.com`):** `CNAME Record` pointing to your Netlify site URL.<br>*Status:* Fully configured, verified, and resolving with `HTTP 200 OK`. |
| **Environment Variables** | Configured in **Netlify Dashboard > Site configuration > Environment variables**:<br>• `NEXT_PUBLIC_GA_ID`: (Optional for Google Analytics 4 Measurement ID)<br>*(Note: No secret runtime database passwords are required due to serverless Jamstack architecture).* |
| **Netlify Functions Configuration** | **N/A** — Pure Next.js 16 App Router Edge/Static architecture. No custom standalone AWS Lambda or Netlify serverless functions required. |
| **SSL Certificate Status** | **Active & Secure.** Automated **Let's Encrypt Wildcard SSL** certificate with automatic 90-day background renewals and forced HTTPS redirect enabled. |
| **Netlify Access Token** | Not required for normal website operation or Git-based deployments. If external CLI or third-party automated API access is needed, generate securely under **User Settings > Applications > Personal Access Tokens**. |

---

## 2. Database Hosting & Credentials

> [!NOTE]
> ### 🛡️ Architecture Notice: Serverless / Git-Backed Flat-File CMS
> This website is built on a modern **Jamstack / Next.js Static & ISR Architecture**. It deliberately **does NOT use a traditional SQL database server (No MySQL / No PostgreSQL / No MongoDB)**. 
> 
> **Key Security & Performance Advantages:**
> 1. **Zero SQL Injection Vulnerability:** There is no exposed SQL database port, username, or password that can be hacked, breached, or injected.
> 2. **100% Uptime & No Connection Bottlenecks:** No database connection pool limits or slow query lag during peak ad traffic.
> 3. **Instant Global Edge Caching:** Content loads at sub-second speeds globally.

| Specification | Details / Architecture Mapping |
| :--- | :--- |
| **Database Hosting Provider** | **Serverless Flat-File System + GitHub Version Control + Google Cloud Sheets CRM**. |
| **Database Server / Hostname** | **N/A** (No external SQL server required). |
| **Database Name / Username / Password** | **N/A** (Protected by Git version control and Netlify Identity authentication). |
| **Database Port** | **N/A** (No database ports open to the public internet). |
| **Database Type** | **Flat-File JSON & Markdown CMS (Decap CMS) + Google Cloud Forms CRM**. |
| **Content Storage Locations** | • **Blog Articles & Categories:** Version-controlled inside `src/content/blogs/` and `src/content/categories.json`.<br>• **Course Data & Pricing:** Managed in `src/data/courses-db.ts`.<br>• **Student Inquiries & Leads:** Stored directly in dedicated Google Sheets via connected Google Forms. |
| **Database Backup Access & Latest Backup** | **Automated via GitHub Git Version History:** Every single blog article, syllabus update, and content change is permanently committed and backed up with atomic version history in GitHub (`https://github.com/dharuv-20/GLA-`). Any previous state can be rolled back with 1 click. |

---

## 3. Application & Deployment

| Specification | Details |
| :--- | :--- |
| **Source Code Repository Access** | **Received & Active:** [https://github.com/dharuv-20/GLA-.git](https://github.com/dharuv-20/GLA-.git) (`main` branch). |
| **Production Environment Configuration** | • **Framework:** Next.js 16.3 (App Router)<br>• **UI Library:** React 19, Tailwind CSS<br>• **Runtime:** Node.js 20 LTS<br>• **Build Command:** `next build`<br>• **Publish Directory:** `.next` (Netlify Next.js Runtime Plugin) |
| **API Credentials & Third-Party Integrations** | 1. **Google Forms Lead Endpoints (7 Connected Forms):** Configured and operational for General Enquiries, German, French, Japanese, PTE, IELTS, and Spoken English.<br>2. **Decap CMS:** Admin portal at `https://tglalearning.com/admin` authenticated via Netlify Identity / Git Gateway.<br>3. **Google Analytics:** Pre-configured via `NEXT_PUBLIC_GA_ID` in `src/components/analytics/GoogleAnalytics.tsx`. |
| **Domain & DNS Access** | Domain managed at registrar; DNS pointed to Netlify Anycast IP `75.2.60.5`. |
| **Deployment Process Documentation** | **Automated Continuous Deployment (CI/CD):** Pushing any commit to the `main` branch automatically triggers an atomic production build and deploys to `tglalearning.com` in 60–90 seconds.<br>Full step-by-step guides available in repo: `HANDOVER_AND_SOP.md` and `SEO_AND_ADS_INTEGRATION_GUIDE.md`. |
| **Application Logs Access** | Real-time build, deployment, and routing logs are available directly under **Netlify Dashboard > Deploys > [Select Deploy]**. |
| **Error Monitoring Configuration** | • Native Netlify deploy failure email alerts.<br>• Built-in Next.js global error boundary ([`src/app/error.tsx`](src/app/error.tsx)) and custom 404 page ([`src/app/not-found.tsx`](src/app/not-found.tsx)). |

---

## 4. Security & Handover Sign-off

| Checklist Item | Current Status |
| :--- | :--- |
| **Verify All Credentials** | ✅ **Verified.** Blog admin login credentials and GitHub collaborator access configured. |
| **Confirm Production Application is Working** | ✅ **Confirmed.** Live and operational at `https://tglalearning.com` with `HTTP 200 OK` status across all routes. |
| **Confirm Database Connectivity** | ✅ **Confirmed.** Flat-file Git CMS and Google Sheets form webhooks tested and receiving data in real time. |
| **Confirm Backup Availability** | ✅ **Confirmed.** Full atomic git commit history on GitHub (`dharuv-20/GLA-`) + 1-click Netlify deploy rollback capability. |
| **Document Credential Owner** | Primary Owner: **The Global Language Academy (TGLA)** (`care@tglalearning.com`). |
| **Transfer Credentials Through Secure Channel** | Transferred via official handover documentation and direct Netlify/GitHub invitation. |
| **Revoke Temporary Access After Handover** | Ready to be executed once client team confirms receipt. |

---
*Document prepared for: Client SEO Specialist & Technical Handover Team, The Global Language Academy.*
