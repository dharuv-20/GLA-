import Link from 'next/link';

export const metadata = {
  title: "Terms of Service",
  description: "Review the Terms and Conditions governing enrollment, fee policies, batch schedules, and class guidelines at The Global Language Academy (GLA).",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col text-navy">
      {/* Header Page Title Hero */}
      <section className="bg-[#00122E] dark:bg-[#020c1b] text-white py-16 sm:py-20 border-b border-card-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold font-display tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
            Last Updated: August 6, 2026. Please read these terms carefully before enrolling in our courses.
          </p>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="bg-card py-16 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 text-sm leading-relaxed text-navy-muted">
          
          <div>
            <h2 className="text-lg font-bold font-display text-navy mb-3">1. Enrollment & Course Access</h2>
            <p>
              By registering for IELTS, PTE, German, or Personality Development classes at The Global Language Academy (GLA), you agree to provide truthful contact and background credentials. Course access is limited to the student name listed on the enrollment receipt and is non-transferable.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold font-display text-navy mb-3">2. Batch Transfers & Attendance</h2>
            <p>
              To maintain academic progress metrics, students are expected to attend scheduled sessions regularly. Batches are kept at a small maximum size (10-12 students). If you need to request a batch transfer due to work conflicts, you must notify the academy coordinators 7 days in advance.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold font-display text-navy mb-3">3. Mock Exams & Assessment Rules</h2>
            <p>
              We conduct timed diagnostic mock exams weekly. To receive certification evaluations or official trainer scorecards, candidates must complete tasks within the designated deadlines and follow examiner testing codes of conduct.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold font-display text-navy mb-3">4. Intellectual Property</h2>
            <p>
              All curriculum courseware, essay blueprints, Goethe level vocabulary sheets, audio listening samples, and digital slides provided during training remain the intellectual property of GLA. Sharing materials online or duplicating course frameworks for commercial tutoring is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold font-display text-navy mb-3">5. Disclaimer on Scores</h2>
            <p>
              While our batch curriculum tracks Goethe-Institut, IDP, and British Council criteria using certified educators, final test bands depend heavily on independent review hours. GLA provides diagnostic mock metrics and support systems but does not issue visa approvals or guarantee test board score parameters.
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
