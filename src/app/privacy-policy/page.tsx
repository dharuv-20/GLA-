import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy of The Global Language Academy (GLA) detailing how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col text-navy">
      {/* Header Page Title Hero */}
      <section className="bg-[#00122E] dark:bg-[#020c1b] text-white py-16 sm:py-20 border-b border-card-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold font-display tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
            Last Updated: August 6, 2026. Your privacy and trust are our core priorities.
          </p>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="bg-card py-16 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 text-sm leading-relaxed text-navy-muted">
          
          <div>
            <h2 className="text-lg font-bold font-display text-navy mb-3">1. Information We Collect</h2>
            <p>
              When you submit a demo class slot or inquiry form on The Global Language Academy (GLA), we collect personal contact credentials including your full name, email address, phone number, and targeted language goals (such as German levels, IELTS, or PTE prep requirements).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold font-display text-navy mb-3">2. How We Use Your Data</h2>
            <p className="mb-2">
              All captured lead parameters are stored securely inside our administrative spreadsheets and email automation servers to:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>Confirm and schedule your free trial demo classes.</li>
              <li>Share relevant mock exam scores and personalized study roadmaps.</li>
              <li>Send weekly batch timings or curriculum updates via SMS, email, or WhatsApp.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold font-display text-navy mb-3">3. Cookies & Tracking Metrics</h2>
            <p>
              We utilize analytics tracking integrations (such as Google Analytics or Meta tracking pixels) to monitor user behavior patterns on the GLA website. This helps us optimize lead registration workflows, correct rendering bugs, and measure digital campaign performance metrics.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold font-display text-navy mb-3">4. Security Credentials</h2>
            <p>
              We implement industry-standard SSL certificates to encrypt all data transfers. We do not sell, trade, or distribute your email database parameters to third-party advertisers. Access to your contact coordinates is strictly restricted to certified academic advisors at GLA.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold font-display text-navy mb-3">5. Consent & Data Opt-Out</h2>
            <p>
              By filling out our demo forms or scheduling consultations, you consent to receive direct telephone advisories from GLA. If you wish to delete your database records or unsubscribe from updates, contact us directly at <a href="mailto:care@glaind.com" className="text-purple hover:underline font-bold">care@glaind.com</a>.
            </p>
          </div>

          <div className="pt-6 border-t border-card-border mt-4 text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-purple text-white text-xs font-bold rounded-md hover:bg-purple-hover transition-colors"
            >
              Return to Homepage
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
