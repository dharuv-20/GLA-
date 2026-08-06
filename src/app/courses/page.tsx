import { BookOpen, GraduationCap, Building } from 'lucide-react';
import { coursesList } from '@/data/courses-db';
import CourseCard from '@/components/CourseCard';

export const metadata = {
  title: "Language & Skill Development Courses",
  description: "Browse premium exam preparation and language classes including IELTS, PTE Academic, German Language (A1-B2), and Personality Development.",
};

export default function CoursesPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* 1. Header Page Title Hero */}
      <section className="bg-[#00122E] dark:bg-[#020c1b] text-white py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-purple-hero animate-fade-in-up [animation-delay:100ms] fill-mode-forwards">Our Programs</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white animate-fade-in-up [animation-delay:250ms] fill-mode-forwards">
            Curricula Designed to Convert
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:400ms] fill-mode-forwards">
            Select a target exam prep program or skill booster to review module breakdowns, schedules, fees, and verified student results.
          </p>
        </div>
      </section>

      {/* 2. Grid Directory */}
      <section className="bg-card text-navy py-20 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {coursesList.map((course, idx) => (
              <div
                key={course.id}
                className="reveal hover-lift rounded-xl bg-card"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Class Formats highlight */}
      <section className="bg-section-alt text-navy py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="reveal text-xs font-bold uppercase tracking-widest text-purple" style={{ transitionDelay: '0ms' }}>Flexible Learning</span>
            <h2 className="reveal text-3xl font-extrabold font-display text-navy tracking-tight" style={{ transitionDelay: '100ms' }}>
              Class Delivery Formats
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Format 1 */}
            <div
              className="reveal hover-lift bg-card p-8 rounded-xl border border-card-border shadow-sm flex flex-col gap-4"
              style={{ transitionDelay: '150ms' }}
            >
              <div className="p-3 bg-purple-light text-purple rounded-lg w-fit border border-card-border">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-navy">Physical Classroom Batches</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Attend intensive lessons at our branch. Equipped with state-of-the-art computer labs for PTE and spoken classes.
              </p>
            </div>

            {/* Format 2 */}
            <div
              className="reveal hover-lift bg-card p-8 rounded-xl border border-card-border shadow-sm flex flex-col gap-4"
              style={{ transitionDelay: '250ms' }}
            >
              <div className="p-3 bg-purple-light text-purple rounded-lg w-fit border border-card-border">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-navy">Live Synchronous Online</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Join our small group virtual classrooms. Interact in real-time, share screen, and receive direct assignments with certified trainers.
              </p>
            </div>

            {/* Format 3 */}
            <div
              className="reveal hover-lift bg-card p-8 rounded-xl border border-card-border shadow-sm flex flex-col gap-4"
              style={{ transitionDelay: '350ms' }}
            >
              <div className="p-3 bg-purple-light text-purple rounded-lg w-fit border border-card-border">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-navy">Custom One-on-One Mentorship</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Need urgent score results or personalized focus? Schedule individual sessions tailored directly to your schedule and weak areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
