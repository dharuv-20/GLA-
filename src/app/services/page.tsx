import Link from 'next/link';
import { ClipboardCheck, MapPin, Building, ArrowRight, ShieldCheck } from 'lucide-react';
import { servicesList } from '@/data/courses-db';

export const metadata = {
  title: "Academy Services & Support",
  description: "Explore GLA services including admissions counselling, mock test simulator certifications, and corporate language workshops.",
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MapPin":
        return <MapPin className="w-8 h-8 text-purple" />;
      case "ClipboardCheck":
        return <ClipboardCheck className="w-8 h-8 text-purple" />;
      case "Building":
        return <Building className="w-8 h-8 text-purple" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-purple" />;
    }
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* 1. Header Page Title Hero */}
      <section className="bg-[#00122E] dark:bg-[#020c1b] text-white py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-purple-hero animate-fade-in-up [animation-delay:100ms] fill-mode-forwards">Support Systems</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white animate-fade-in-up [animation-delay:250ms] fill-mode-forwards">
            Comprehensive Career Guidance
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:400ms] fill-mode-forwards">
            Beyond academic classrooms, we provide logistics help to ensure you successfully transition into global study programs and jobs.
          </p>
        </div>
      </section>

      {/* 2. Detailed Services blocks */}
      <section className="bg-card text-navy py-20 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          {servicesList.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.id}
                className={`reveal hover-lift grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border border-card-border p-8 rounded-xl bg-section-alt transition-all duration-300 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                
                {/* Left Description Column */}
                <div className="lg:col-span-6 flex flex-col gap-5">
                  <div className="p-3 bg-card border border-purple-light rounded-lg w-fit shadow-sm">
                    {getIcon(service.icon)}
                  </div>
                  
                  <h2 className="text-2xl font-bold font-display text-navy tracking-tight">
                    {service.title}
                  </h2>
                  
                  <p className="text-sm text-navy-muted leading-relaxed">
                    {service.longDescription}
                  </p>
                  
                  <div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-purple hover:text-purple-hover transition-colors"
                    >
                      <span>Inquire About this Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Benefits Checklist Column */}
                <div className="lg:col-span-6 bg-card p-6 rounded-lg border border-card-border">
                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-navy mb-4">Key Value Pillars</h3>
                  <ul className="flex flex-col gap-3.5">
                    {service.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex gap-2 text-xs font-semibold text-navy leading-normal hover:translate-x-1 transition-transform duration-200">
                        <ShieldCheck className="w-5 h-5 text-purple shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="bg-card text-navy py-20 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="reveal text-2xl sm:text-3xl font-extrabold font-display text-navy tracking-tight" style={{ transitionDelay: '0ms' }}>
            Need customized training or consulting?
          </h2>
          <p className="reveal text-sm text-navy-muted leading-relaxed" style={{ transitionDelay: '100ms' }}>
            Our expert admissions mentors are ready to design custom mock test calendars or prepare visa documentation portfolios matching your profile details.
          </p>
          <div className="reveal flex gap-4" style={{ transitionDelay: '200ms' }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-purple text-white font-semibold text-sm rounded-md shadow-md hover:bg-purple-hover hover:scale-102 transition-all cursor-pointer"
            >
              Consult an Advisor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
