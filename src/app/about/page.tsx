import Link from 'next/link';
import { Target, Users, Award, Eye, Compass, Quote } from 'lucide-react';
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
      desc: "By capping online and offline classrooms to a strict maximum of 5-7 students, we guarantee that every candidate gets written and oral corrections."
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
          <span className="text-xs font-bold uppercase tracking-widest text-purple-hero animate-fade-in-up [animation-delay:100ms] fill-mode-forwards">Our Story</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white animate-fade-in-up [animation-delay:250ms] fill-mode-forwards">
            Designed for Language Success
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:400ms] fill-mode-forwards">
            The Global Language Academy (GLA) was founded to fill a gap in standard language tutoring: the need for outcome-focused, small-batch exam preparation.
          </p>
        </div>
      </section>

      {/* 2. Who We Are & Director Quote Section */}
      <section className="bg-card text-navy py-20 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="reveal text-xs font-bold uppercase tracking-widest text-purple">Who We Are</span>
              <h2 className="reveal text-3xl font-extrabold font-display text-navy tracking-tight leading-tight">
                Empowering Confidence Through Communication
              </h2>
              <p className="reveal text-sm text-navy-muted leading-relaxed">
                We believe that learning a language can change a person’s life. At The Global Language Academy, we help students build confidence, discover new opportunities, and achieve their dreams through the power of communication and education.
              </p>
              <p className="reveal text-sm text-navy-muted leading-relaxed">
                When we started 6 years ago, very few were aware of the immense opportunities and language learning benefits. We gave them a right way to choose wisely, focusing deeply on their individual language skills.
              </p>
              <p className="reveal text-sm text-navy-muted leading-relaxed">
                Language is a bridge between students and skill development. We provide industry-oriented, practical training to crack interviews, focusing entirely on goals where students get the right way to succeed.
              </p>
            </div>

            {/* Right Quote Card Column */}
            <div className="lg:col-span-5">
              <div className="reveal relative p-8 rounded-2xl bg-section-alt border border-purple-light shadow-md flex flex-col gap-6">
                <span className="absolute top-4 right-4 text-purple opacity-20">
                  <Quote className="w-12 h-12" />
                </span>
                
                <h3 className="text-base font-extrabold uppercase tracking-widest text-purple">Leadership message</h3>
                
                <p className="text-base font-medium italic text-navy leading-relaxed">
                  "Education is the path to achieving youth dreams to change the world. Here we are going to help them achieve success worldwide."
                </p>

                <div className="border-t border-card-border pt-4 flex flex-col gap-1">
                  <h4 className="text-sm font-bold text-navy">Ms. Anuradhika Rana</h4>
                  <p className="text-xs text-navy-muted">Founder & Director</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Section */}
      <section className="bg-section-alt text-navy py-20 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="reveal hover-lift bg-card p-8 rounded-xl border border-card-border flex flex-col gap-4 shadow-sm">
              <div className="p-3 bg-section-alt border border-purple-light rounded-lg w-fit text-purple">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-navy">Our Vision</h3>
              <p className="text-sm text-navy-muted leading-relaxed">
                Backed by almost 20 years of leadership experience with different organizations, our vision is built on understanding the exact troubles and challenges students face, choosing to guide them the right way to navigate global education.
              </p>
            </div>

            {/* Mission Card */}
            <div className="reveal hover-lift bg-card p-8 rounded-xl border border-card-border flex flex-col gap-4 shadow-sm">
              <div className="p-3 bg-section-alt border border-purple-light rounded-lg w-fit text-purple">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-navy">Our Mission</h3>
              <p className="text-sm text-navy-muted leading-relaxed">
                To provide quality training that builds confidence, communication skills, and global opportunities for every learner. To become a trusted organization for career growth and student success.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Pillars grid */}
      <section className="bg-card text-navy py-20 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="reveal text-xs font-bold uppercase tracking-widest text-purple">Core Values</span>
            <h2 className="reveal text-3xl font-extrabold font-display text-navy tracking-tight">
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

      {/* 5. Certified Faculty Profiles */}
      <section className="bg-section-alt text-navy py-20 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="reveal text-xs font-bold uppercase tracking-widest text-purple">Academy Educators</span>
            <h2 className="reveal text-3xl font-extrabold font-display text-navy tracking-tight">
              Certified Instructors & Examiners
            </h2>
            <p className="reveal text-sm text-navy-muted leading-relaxed">
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

      {/* 6. Trust Verification callout */}
      <section className="bg-card text-navy py-20 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="reveal text-2xl sm:text-3xl font-extrabold font-display text-navy tracking-tight">
            Ready to experience our teaching methodology?
          </h2>
          <p className="reveal text-sm sm:text-base text-navy-muted leading-relaxed">
            Attend a free, live, 45-minute demo class led by one of our principal certified trainers. Get feedback on your current language goals and map out a target roadmap.
          </p>
          <div className="reveal flex gap-4">
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
