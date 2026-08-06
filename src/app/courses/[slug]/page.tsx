import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, ArrowRight } from 'lucide-react';
import { coursesList } from '@/data/courses-db';
import FacultyCard from '@/components/FacultyCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import LeadForm from '@/features/lead-capture/components/LeadForm';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. Dynamic Page Metadata Resolution
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = coursesList.find((c) => c.slug === slug);
  if (!course) return {};

  return {
    title: course.metaTitle,
    description: course.metaDescription,
    alternates: {
      canonical: `/courses/${slug}`,
    },
    openGraph: {
      title: course.metaTitle,
      description: course.metaDescription,
      url: `/courses/${slug}`,
      type: 'website',
    }
  };
}

// 2. Pre-render all course slugs at build time
export async function generateStaticParams() {
  return coursesList.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const course = coursesList.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  // Get other courses for the Related Courses segment
  const relatedCourses = coursesList.filter((c) => c.id !== course.id).slice(0, 2);

  // Dynamic Course Schema
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `https://www.glaind.com/courses/${course.slug}`,
    "name": course.title,
    "description": course.shortDescription,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "The Global Language Academy",
      "sameAs": "https://www.glaind.com"
    }
  };

  return (
    <div className="flex flex-col overflow-x-hidden text-navy">
      {/* Dynamic SEO JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* 1. Hero Landing Block */}
      <section className="bg-[#00122E] dark:bg-[#020c1b] text-white py-16 sm:py-20 lg:py-24 border-b border-card-border relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start animate-fade-in-up [animation-delay:100ms] fill-mode-forwards">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-navy-muted/50 text-purple-hero px-3 py-1 rounded-full border border-purple-hero/30">
                  Targeted Prep Program
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white tracking-tight animate-fade-in-up [animation-delay:200ms] fill-mode-forwards">
                {course.title}
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up [animation-delay:300ms] fill-mode-forwards">
                {course.longDescription}
              </p>

              {/* Core Details Grid */}
              <div className="grid grid-cols-3 gap-4 border-t border-b border-navy-muted/50 py-4 max-w-xl mx-auto lg:mx-0 animate-fade-in-up [animation-delay:400ms] fill-mode-forwards">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Duration</span>
                  <span className="text-sm font-semibold text-white">{course.durationLabel}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Class Size</span>
                  <span className="text-sm font-semibold text-white">Max {course.maxClassSize} Students</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Intake</span>
                  <span className="text-sm font-semibold text-white">Weekly Batches</span>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none animate-fade-in-up [animation-delay:350ms] fill-mode-forwards">
              <div className="relative p-1.5 rounded-2xl bg-gradient-to-tr from-purple/30 via-white/5 to-purple/10 border border-white/10 shadow-[0_0_50px_rgba(75,36,94,0.3)] animate-glow-pulse">
                <LeadForm defaultCourse={course.slug} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Program Benefits */}
      <section className="bg-card text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="reveal text-xs font-bold uppercase tracking-widest text-purple" style={{ transitionDelay: '0ms' }}>Benefits</span>
            <h2 className="reveal text-3xl font-extrabold font-display text-navy tracking-tight" style={{ transitionDelay: '100ms' }}>Why Prepare with GLA?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {course.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="reveal flex gap-3.5 items-start hover:translate-x-1 transition-transform duration-255"
                style={{ transitionDelay: `${(idx * 100) + 150}ms` }}
              >
                <span className="p-1 rounded-full bg-purple-light text-purple shrink-0 mt-0.5 border border-card-border">
                  <Check className="w-4.5 h-4.5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-navy mb-1">{benefit.split(" leading ")[0]}</h3>
                  <p className="text-xs text-navy-muted leading-relaxed">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Who Should Join */}
      <section className="bg-section-alt text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="reveal text-xs font-bold uppercase tracking-widest text-purple" style={{ transitionDelay: '0ms' }}>Ideal Profile</span>
              <h2 className="reveal text-3xl font-extrabold font-display text-navy tracking-tight" style={{ transitionDelay: '100ms' }}>
                Who Should Enroll in this Course?
              </h2>
              <p className="reveal text-sm text-navy-muted leading-relaxed" style={{ transitionDelay: '200ms' }}>
                Our curriculum is built to address specific professional goals. This course is optimized for:
              </p>
            </div>
            
            <div
              className="reveal lg:col-span-7 bg-card border border-card-border p-8 rounded-xl shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4 transition-colors duration-300"
              style={{ transitionDelay: '250ms' }}
            >
              {course.whoShouldJoin.map((profile, idx) => (
                <div key={idx} className="hover-lift flex items-center gap-3 p-3 bg-section-alt rounded-lg border border-card-border">
                  <Check className="w-4 h-4 text-purple shrink-0" />
                  <span className="text-xs font-semibold text-navy leading-normal">{profile}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Course Overview & Curriculum */}
      <section className="bg-card text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="reveal text-xs font-bold uppercase tracking-widest text-purple" style={{ transitionDelay: '0ms' }}>Curriculum</span>
            <h2 className="reveal text-3xl font-extrabold font-display text-navy tracking-tight" style={{ transitionDelay: '100ms' }}>Syllabus & Level Roadmaps</h2>
            <p className="reveal text-sm text-navy-muted" style={{ transitionDelay: '200ms' }}>
              We divide the program into clear progress phases. Click to expand weekly topics.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            {course.levels.map((level, idx) => (
              <div
                key={idx}
                className="reveal hover-lift border border-card-border rounded-xl overflow-hidden shadow-sm"
                style={{ transitionDelay: `${(idx * 150) + 200}ms` }}
              >
                <div className="bg-[#00122E] dark:bg-[#020c1b] p-5 text-white flex justify-between items-center border-b border-card-border">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-200 bg-purple/35 px-2.5 py-1 rounded-full mr-2.5 border border-purple-300/20">
                      Phase {idx + 1}
                    </span>
                    <h3 className="inline-block text-base font-bold font-display text-white">{level.levelCode}</h3>
                  </div>
                  <div className="flex gap-4 text-xs font-semibold text-slate-300">
                    <span>⏳ {level.durationWeeks} Weeks</span>
                    <span>👥 {level.weeklyHours} Hrs/Wk</span>
                  </div>
                </div>
                <div className="p-6 bg-card flex flex-col gap-4 transition-colors duration-300">
                  <p className="text-sm text-navy-muted leading-relaxed">{level.description}</p>
                  
                  <div className="border-t border-card-border pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-navy mb-3 block">Key Modules Covered</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {level.modules.map((mod, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-2 text-xs text-navy font-medium hover:translate-x-1 transition-transform duration-200">
                          <Check className="w-3.5 h-3.5 text-purple shrink-0" />
                          <span>{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Course Faculty Profile */}
      <section className="bg-section-alt text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="reveal text-xs font-bold uppercase tracking-widest text-purple" style={{ transitionDelay: '0ms' }}>Faculty</span>
            <h2 className="reveal text-3xl font-extrabold font-display text-navy tracking-tight" style={{ transitionDelay: '100ms' }}>Who Will Train You?</h2>
          </div>

          <div className="max-w-xl mx-auto">
            {course.faculty.map((trainer, idx) => (
              <div
                key={trainer.id}
                className="reveal hover-lift rounded-xl bg-card"
                style={{ transitionDelay: `${(idx * 150) + 150}ms` }}
              >
                <FacultyCard faculty={trainer} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Success Stories Testimonials */}
      <section className="bg-card text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="reveal text-xs font-bold uppercase tracking-widest text-purple" style={{ transitionDelay: '0ms' }}>Alumni Scores</span>
            <h2 className="reveal text-3xl font-extrabold font-display text-navy tracking-tight" style={{ transitionDelay: '100ms' }}>Scorecard Results & Reviews</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {course.testimonials.map((test, idx) => (
              <div
                key={test.id}
                className="reveal hover-lift rounded-xl"
                style={{ transitionDelay: `${(idx * 150) + 150}ms` }}
              >
                <TestimonialCard testimonial={test} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Accordion */}
      <section className="bg-card text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="reveal text-xs font-bold uppercase tracking-widest text-purple" style={{ transitionDelay: '0ms' }}>FAQ</span>
            <h2 className="reveal text-3xl font-extrabold font-display text-navy tracking-tight" style={{ transitionDelay: '100ms' }}>Frequently Asked Questions</h2>
          </div>

          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <FAQAccordion faqs={course.faqs} />
          </div>
        </div>
      </section>

      {/* 8. Related/Alternative courses */}
      <section className="bg-section-alt text-navy py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="reveal text-xs font-bold uppercase tracking-widest text-purple" style={{ transitionDelay: '0ms' }}>Explore More</span>
            <h2 className="reveal text-3xl font-extrabold font-display text-navy tracking-tight" style={{ transitionDelay: '100ms' }}>Other Programs at GLA</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {relatedCourses.map((rel, idx) => (
              <div
                key={rel.id}
                className="reveal hover-lift bg-card p-6 rounded-xl border border-card-border shadow-sm flex flex-col gap-4 justify-between transition-all duration-300"
                style={{ transitionDelay: `${(idx * 150) + 150}ms` }}
              >
                <div>
                  <h3 className="text-lg font-bold font-display text-navy mb-1">{rel.title}</h3>
                  <p className="text-xs text-navy-muted leading-relaxed">{rel.shortDescription}</p>
                </div>
                <div className="flex justify-between items-center border-t border-card-border pt-4 mt-2">
                  <span className="text-xs font-bold text-purple">⏱️ {rel.durationLabel}</span>
                  <Link
                    href={`/courses/${rel.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-navy hover:text-purple transition-colors"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
