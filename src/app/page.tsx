import Link from 'next/link';
import { ShieldCheck, ArrowRight, MessageCircle, Phone, MapPin, Award, CheckCircle, Check } from 'lucide-react';
import { coursesList, testimonialsList } from '@/data/courses-db';
import CourseCard from '@/components/CourseCard';
import TestimonialCard from '@/components/TestimonialCard';
import LeadForm from '@/features/lead-capture/components/LeadForm';
import CountUp from '@/components/CountUp';

export default function HomePage() {
  // Take first 3 courses to highlight on home page
  const featuredCourses = coursesList.slice(0, 3);
  
  const stats = [
    { end: 5000, suffix: "+", label: "Successful Alumni", decimals: 0 },
    { end: 98.4, suffix: "%", label: "Exam Pass Rate", decimals: 1 },
    { end: 100, suffix: "%", label: "Goethe & BC Certified Staff", decimals: 0 },
    { end: 1, suffix: "", label: "Premium Physical Center", decimals: 0 }
  ];

  return (
    <div className="flex flex-col overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative bg-[#00122E] dark:bg-[#020c1b] text-white overflow-hidden py-12 lg:py-28 border-b border-card-border transition-colors duration-300">
        
        {/* Radial Purple Glow Accents */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-purple rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: High-Converting Value Prop */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              
              {/* Trust Tag */}
              <div className="flex justify-center lg:justify-start animate-fade-in-up [animation-delay:100ms] fill-mode-forwards">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple/25 border border-purple-300/35 rounded-full text-xs font-semibold text-purple-200">
                  <ShieldCheck className="w-4 h-4 text-purple-200 shrink-0" />
                  <span>ISO 9001:2015 Certified Language Academy</span>
                </span>
              </div>

              {/* Headline with premium color gradient */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight tracking-tight text-white animate-fade-in-up [animation-delay:200ms] fill-mode-forwards">
                Master Language Exams. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-hero via-indigo-200 to-white">
                  Unlock Global Visas.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up [animation-delay:300ms] fill-mode-forwards">
                Overcome test anxiety and score higher on your first attempt. Join hybrid batches led by Goethe-Institut & British Council certified trainers.
              </p>

              {/* Core outcomes checklist to address customer goals */}
              <div className="grid grid-cols-2 gap-x-5 gap-y-3 mt-2 mx-auto w-fit lg:mx-0 text-xs sm:text-sm animate-fade-in-up [animation-delay:400ms] fill-mode-forwards">
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="p-0.5 rounded-full bg-purple/35 text-purple-200 border border-purple-300/25 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Max 10 students <span className="hidden sm:inline">per batch</span></span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="p-0.5 rounded-full bg-purple/35 text-purple-200 border border-purple-300/25 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Goethe & IDP <span className="hidden sm:inline">certified</span> mentors</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="p-0.5 rounded-full bg-purple/35 text-purple-200 border border-purple-300/25 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>8 Mock testing <span className="hidden sm:inline">runs</span></span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="p-0.5 rounded-full bg-purple/35 text-purple-200 border border-purple-300/25 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>100% Spoken-first <span className="hidden sm:inline">classrooms</span></span>
                </div>
              </div>

              {/* Immediate conversion triggers */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4 animate-fade-in-up [animation-delay:500ms] fill-mode-forwards">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-purple text-white font-bold text-sm rounded-md shadow-md hover:bg-purple-hover hover:scale-102 transition-all cursor-pointer border border-purple-light/10"
                >
                  <span>Explore Course Modules</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                {/* Mobile scroll-to-form trigger */}
                <a
                  href="#hero-lead-form"
                  className="inline-flex lg:hidden items-center justify-center gap-2 px-6 py-3.5 bg-card text-navy font-bold text-sm rounded-md shadow-md hover:bg-section-alt transition-all cursor-pointer border border-card-border"
                >
                  <span>Book Free Demo Class</span>
                </a>
                <a
                  href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20a%20free%20demo%20at%20TGLA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-bold text-sm rounded-md shadow-md hover:opacity-95 hover:scale-102 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Certified Partner Logos */}
              <div className="pt-8 border-t border-navy-muted/50 mt-6 animate-fade-in-up [animation-delay:600ms] fill-mode-forwards">
                <span className="text-[9px] uppercase font-extrabold tracking-widest text-slate-400 block mb-4">Official Preparation Partners</span>
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 text-xs font-bold text-slate-400">
                  <span className="hover:text-white transition-colors duration-200">BRITISH COUNCIL</span>
                  <span className="hover:text-white transition-colors duration-200">IDP EDUCATION</span>
                  <span className="hover:text-white transition-colors duration-200">GOETHE-INSTITUT</span>
                </div>
              </div>
            </div>

            {/* Right Column: Elevated glow container for LeadForm */}
            <div id="hero-lead-form" className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none animate-fade-in-up [animation-delay:350ms] fill-mode-forwards scroll-mt-24">
              <div className="relative p-1.5 rounded-2xl bg-gradient-to-tr from-purple/30 via-white/5 to-purple/10 border border-white/10 shadow-[0_0_50px_rgba(75,36,94,0.3)] animate-glow-pulse">
                <LeadForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Stats Section: Staggered Metrics reveal */}
      <section className="bg-card text-navy border-b border-card-border py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="reveal text-center hover:scale-105 transition-all duration-300"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <span className="block text-3xl sm:text-4xl font-extrabold font-display text-purple mb-1">
                  <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals} />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-navy-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Courses Section: Staggered Course Cards reveal */}
      <section className="bg-section-alt text-navy py-20 lg:py-28 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="reveal text-xs font-extrabold uppercase tracking-widest text-purple" style={{ transitionDelay: '0ms' }}>Core Programs</span>
            <h2 className="reveal text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight" style={{ transitionDelay: '100ms' }}>
              High-Converting Exam & Skill Pathways
            </h2>
            <p className="reveal text-sm sm:text-base text-navy-muted leading-relaxed" style={{ transitionDelay: '200ms' }}>
              We design specialized hybrid classrooms focusing on practice metrics, individual corrections, and proven exam methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, idx) => (
              <div
                key={course.id}
                className="reveal hover-lift rounded-xl"
                style={{ transitionDelay: `${(idx * 150) + 200}ms` }}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/courses"
              className="reveal inline-flex items-center gap-1.5 text-sm font-semibold text-purple hover:text-purple-hover underline hover:no-underline transition-colors duration-200"
              style={{ transitionDelay: '200ms' }}
            >
              <span>View All Language Courses & Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. The Pedagogy Section: Staggered Timeline reveals */}
      <section className="bg-card text-navy py-20 lg:py-28 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Description Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="reveal text-xs font-bold uppercase tracking-widest text-purple" style={{ transitionDelay: '0ms' }}>Our Methodology</span>
              <h2 className="reveal text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight" style={{ transitionDelay: '100ms' }}>
                How We Guarantee Exam & Success
              </h2>
              <p className="reveal text-sm text-navy-muted leading-relaxed" style={{ transitionDelay: '200ms' }}>
                Traditional classrooms rely on general lectures. GLA pioneers an interactive pedagogy tracking individual score dynamics.
              </p>
              
              <ul className="flex flex-col gap-4">
                <li className="reveal flex gap-3 hover:translate-x-1.5 transition-transform duration-200" style={{ transitionDelay: '300ms' }}>
                  <span className="p-1 rounded-full bg-purple-light text-purple shrink-0 mt-0.5 border border-card-border">
                    <CheckCircle className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Small Batches (Max 10-12 Students)</h4>
                    <p className="text-xs text-navy-muted">Guarantees that you receive active feedback on essays and speaking sessions.</p>
                  </div>
                </li>
                <li className="reveal flex gap-3 hover:translate-x-1.5 transition-transform duration-200" style={{ transitionDelay: '400ms' }}>
                  <span className="p-1 rounded-full bg-purple-light text-purple shrink-0 mt-0.5 border border-card-border">
                    <CheckCircle className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Weekly Diagnostic Mock Exams</h4>
                    <p className="text-xs text-navy-muted">Replicates real IDP, British Council, and Goethe-Institut testing settings.</p>
                  </div>
                </li>
                <li className="reveal flex gap-3 hover:translate-x-1.5 transition-transform duration-200" style={{ transitionDelay: '500ms' }}>
                  <span className="p-1 rounded-full bg-purple-light text-purple shrink-0 mt-0.5 border border-card-border">
                    <CheckCircle className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Bespoke Level Milestone Tracking</h4>
                    <p className="text-xs text-navy-muted">Clearly tells you when you are ready to transition from B1 to B2 level.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Visual Roadmap Column */}
            <div className="reveal lg:col-span-7 bg-section-alt border border-card-border p-8 rounded-xl relative overflow-hidden transition-colors duration-300" style={{ transitionDelay: '250ms' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-light rounded-full blur-2xl opacity-40"></div>
              
              <h3 className="reveal text-lg font-bold font-display text-navy mb-8" style={{ transitionDelay: '300ms' }}>The Student Progress Timeline</h3>
              
              <div className="flex flex-col gap-8 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-card-border">
                
                {/* Step 1 */}
                <div
                  className="reveal flex gap-6 relative z-10 hover:translate-x-2 transition-transform duration-300 group"
                  style={{ transitionDelay: '350ms' }}
                >
                  <div className="w-8 h-8 rounded-full bg-purple text-white flex items-center justify-center font-bold text-sm shrink-0 border border-purple shadow-sm group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy group-hover:text-purple transition-colors">Initial Diagnostic Assessment</h4>
                    <p className="text-xs text-navy-muted mt-1 leading-relaxed">
                      We evaluate your grammar, vocabulary baseline, and current speaking accent metrics.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div
                  className="reveal flex gap-6 relative z-10 hover:translate-x-2 transition-transform duration-300 group"
                  style={{ transitionDelay: '450ms' }}
                >
                  <div className="w-8 h-8 rounded-full bg-purple text-white flex items-center justify-center font-bold text-sm shrink-0 border border-purple shadow-sm group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy group-hover:text-purple transition-colors">Interactive Skill Immersion</h4>
                    <p className="text-xs text-navy-muted mt-1 leading-relaxed">
                      Engage in active dialogues, structured essay writing templates, and daily micro-assessments.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div
                  className="reveal flex gap-6 relative z-10 hover:translate-x-2 transition-transform duration-300 group"
                  style={{ transitionDelay: '550ms' }}
                >
                  <div className="w-8 h-8 rounded-full bg-purple text-white flex items-center justify-center font-bold text-sm shrink-0 border border-purple shadow-sm group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy group-hover:text-purple transition-colors">Exam Drill Simulation</h4>
                    <p className="text-xs text-navy-muted mt-1 leading-relaxed">
                      Take 8 full-length simulated examinations under timed criteria to lock in target scores.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Success Stories & Testimonials: Staggered reviews reveal */}
      <section className="bg-section-alt text-navy py-20 lg:py-28 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="reveal text-xs font-bold uppercase tracking-widest text-purple animate-fade-in" style={{ transitionDelay: '0ms' }}>Student Outcomes</span>
            <h2 className="reveal text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight" style={{ transitionDelay: '100ms' }}>
              Verifiable Score Achievement Cards
            </h2>
            <p className="reveal text-sm sm:text-base text-navy-muted leading-relaxed" style={{ transitionDelay: '200ms' }}>
              Read true feedback summaries from students who cleared language scores and landed corporate positions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsList.map((test, idx) => (
              <div
                key={test.id}
                className="reveal hover-lift rounded-xl"
                style={{ transitionDelay: `${(idx * 150) + 200}ms` }}
              >
                <TestimonialCard testimonial={test} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Physical Location Validation: Scroll reveal */}
      <section className="bg-card text-navy py-20 lg:py-28 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="reveal text-xs font-bold uppercase tracking-widest text-purple">Campus Location</span>
              <h2 className="reveal text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight" style={{ transitionDelay: '100ms' }}>
                Visit Our Premium Training Facility
              </h2>
              
              <div className="flex flex-col gap-4 text-sm text-navy-muted leading-relaxed">
                <div className="reveal flex items-start gap-3 hover:translate-x-1 transition-transform duration-200" style={{ transitionDelay: '200ms' }}>
                  <MapPin className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <span>
                    1st Floor, Premium Plaza, Main Road Sector 15, Metro Station Gate 3, New Delhi, India
                  </span>
                </div>
                <div className="reveal flex items-center gap-3 hover:translate-x-1 transition-transform duration-200" style={{ transitionDelay: '300ms' }}>
                  <Phone className="w-5 h-5 text-purple shrink-0" />
                  <a href="tel:+919876543210" className="text-navy font-semibold hover:text-purple transition-colors">+91 98765 43210</a>
                </div>
                <div className="reveal flex items-start gap-3 hover:translate-x-1 transition-transform duration-200" style={{ transitionDelay: '400ms' }}>
                  <Award className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <span>Fully equipped language testing center and classroom infrastructure.</span>
                </div>
              </div>

              <div className="reveal flex gap-4 mt-2" style={{ transitionDelay: '500ms' }}>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-5 py-3 border border-navy text-navy text-xs font-bold rounded-md hover:bg-section-alt transition-all duration-200 hover:scale-102"
                >
                  Get Driving Directions
                </a>
              </div>
            </div>

            {/* Google Maps mock/embed Column */}
            <div className="reveal lg:col-span-7 w-full h-80 sm:h-96 bg-section-alt rounded-xl overflow-hidden shadow-sm relative border border-card-border transition-colors duration-300" style={{ transitionDelay: '300ms' }}>
              <div className="absolute inset-0 bg-[#E5E3DF] dark:bg-slate-900 flex flex-col items-center justify-center p-6 text-center text-navy">
                <MapPin className="w-10 h-10 text-purple mb-2 animate-bounce" />
                <h4 className="font-bold text-navy mb-1">The Global Language Academy Campus Map</h4>
                <p className="text-xs text-navy-muted max-w-sm mb-4">
                  Sector 15 Main Road, next to the metro station entrance. Premium Plaza Building.
                </p>
                <span className="px-3 py-1 bg-card text-navy text-xs font-bold border border-card-border rounded-full shadow-sm">
                  Interactive Maps Widget Loaded
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
