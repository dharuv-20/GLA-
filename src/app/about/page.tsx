import Link from 'next/link';
import { Target, Users, Award } from 'lucide-react';
import { facultyList } from '@/data/courses-db';
import FacultyCard from '@/components/FacultyCard';

export const metadata = {
  title: "About Our Academy",
  description: "Learn about the pedagogical history, core learning values, and certified trainers behind The Global Language Academy (GLA).",
};

export default function AboutPage() {
  const valuePillars = [
    {
      icon: <Target className="w-6 h-6 text-purple" />,
      title: "Outcome-Driven Pedagogy",
      desc: "We do not believe in rote memorization. Our interactive course maps are built around passing real Goethe, IDP, and British Council exams."
    },
    {
      icon: <Users className="w-6 h-6 text-purple" />,
      title: "Individualized Focus",
      desc: "By capping physical and hybrid classrooms to a strict maximum of 10-12 students, we guarantee that every candidate gets written and oral corrections."
    },
    {
      icon: <Award className="w-6 h-6 text-purple" />,
      title: "Certified Academic Faculty",
      desc: "All training is delivered by native-fluent or native-certified instructors holding Goethe C2 or British Council examiner credentials."
    }
  ];

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* 1. Header Page Title Hero */}
      <section className="bg-[#00122E] dark:bg-[#020c1b] text-white py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-purple-hero animate-fade-in-up [animation-delay:100ms] fill-mode-forwards">Our Story</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white animate-fade-in-up [animation-delay:250ms] fill-mode-forwards">
            Designed for Language Success
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:400ms] fill-mode-forwards">
            The Global Language Academy (GLA) was founded to fill a gap in standard language tutoring: the need for outcome-focused, small-batch exam preparation.
          </p>
        </div>
      </section>

      {/* 2. Core Pillars grid */}
      <section className="bg-card text-navy py-20 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="reveal text-xs font-bold uppercase tracking-widest text-purple" style={{ transitionDelay: '0ms' }}>Core Values</span>
            <h2 className="reveal text-3xl font-extrabold font-display text-navy tracking-tight" style={{ transitionDelay: '100ms' }}>
              The GLA Learning Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="reveal hover-lift bg-section-alt p-8 rounded-xl border border-card-border flex flex-col gap-4 transition-colors duration-300"
                style={{ transitionDelay: `${(idx * 150) + 150}ms` }}
              >
                <div className="p-3 bg-card border border-purple-light rounded-lg w-fit shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold font-display text-navy">{pillar.title}</h3>
                <p className="text-sm text-navy-muted leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Certified Faculty Profiles */}
      <section className="bg-section-alt text-navy py-20 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="reveal text-xs font-bold uppercase tracking-widest text-purple" style={{ transitionDelay: '0ms' }}>Academy Educators</span>
            <h2 className="reveal text-3xl font-extrabold font-display text-navy tracking-tight" style={{ transitionDelay: '100ms' }}>
              Certified Instructors & Examiners
            </h2>
            <p className="reveal text-sm text-navy-muted leading-relaxed" style={{ transitionDelay: '200ms' }}>
              We do not outsource lectures to uncertified tutors. Learn directly from certified teachers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facultyList.map((fac, idx) => (
              <div
                key={fac.id}
                className="reveal hover-lift rounded-xl bg-card"
                style={{ transitionDelay: `${(idx * 150) + 200}ms` }}
              >
                <FacultyCard faculty={fac} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trust Verification callout */}
      <section className="bg-card text-navy py-20 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="reveal text-2xl sm:text-3xl font-extrabold font-display text-navy tracking-tight" style={{ transitionDelay: '0ms' }}>
            Ready to experience our teaching methodology?
          </h2>
          <p className="reveal text-sm sm:text-base text-navy-muted leading-relaxed" style={{ transitionDelay: '100ms' }}>
            Attend a free, live, 45-minute demo class led by one of our principal certified trainers. Get feedback on your current language goals and map out a target roadmap.
          </p>
          <div className="reveal flex gap-4" style={{ transitionDelay: '200ms' }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-purple text-white font-semibold text-sm rounded-md shadow-md hover:bg-purple-hover hover:scale-102 transition-all cursor-pointer"
            >
              Book Free Demo Session
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center px-6 py-3 border border-navy text-navy font-semibold text-sm rounded-md hover:bg-section-alt transition-all"
            >
              View Our Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
