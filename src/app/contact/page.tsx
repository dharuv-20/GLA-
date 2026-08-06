import { MapPin, Phone, Mail, Clock, Sparkles } from 'lucide-react';
import LeadForm from '@/features/lead-capture/components/LeadForm';

export const metadata = {
  title: "Contact & Location Directions",
  description: "Get in touch with The Global Language Academy (GLA) in New Delhi. Find phone numbers, email directories, driving maps, and schedule trial classes.",
};

export default function ContactPage() {
  const steps = [
    {
      title: "1. Diagnostic Call",
      desc: "Our advisor calls you within 2 hours to confirm your scheduled slot and assess your current score goals."
    },
    {
      title: "2. Sample Assessment",
      desc: "Receive a free, 15-minute diagnostic grammar evaluation sheet on your email before your scheduled demo class."
    },
    {
      title: "3. Interactive Demo",
      desc: "Join a synchronous 45-minute live trial class with our certified trainer and get immediate feedback."
    }
  ];

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* 1. Header Page Title Hero */}
      <section className="bg-[#00122E] dark:bg-[#020c1b] text-white py-16 sm:py-20 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-purple-hero animate-fade-in-up [animation-delay:100ms] fill-mode-forwards">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white animate-fade-in-up [animation-delay:250ms] fill-mode-forwards">
            Connect with GLA Advisors
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:400ms] fill-mode-forwards">
            Have questions about levels, fees, or class schedules? Drop us a line, chat on WhatsApp, or book a free trial demo directly.
          </p>
        </div>
      </section>

      {/* 2. Interactive Form & Info splits */}
      <section className="bg-card text-navy py-20 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Info Columns */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              
              {/* Branch details */}
              <div
                className="reveal hover-lift bg-section-alt p-6 rounded-xl border border-card-border flex flex-col gap-4 transition-colors duration-300"
                style={{ transitionDelay: '0ms' }}
              >
                <h3 className="text-base font-bold font-display text-navy border-b border-card-border/40 pb-2">GLA physical Branch</h3>
                
                <div className="flex items-start gap-3 text-sm text-navy-muted hover:translate-x-1 transition-transform duration-200">
                  <MapPin className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <span>1st Floor, Premium Plaza, Main Road Sector 15, Metro Station Gate 3, New Delhi, India</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-navy-muted hover:translate-x-1 transition-transform duration-200">
                  <Phone className="w-5 h-5 text-purple shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-purple text-navy font-semibold transition-colors">+91 98765 43210</a>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-navy-muted hover:translate-x-1 transition-transform duration-200">
                  <Mail className="w-5 h-5 text-purple shrink-0" />
                  <a href="mailto:admissions@gla-academy.com" className="hover:text-purple text-navy font-semibold transition-colors">admissions@gla-academy.com</a>
                </div>

                <div className="flex items-start gap-3 text-sm text-navy-muted hover:translate-x-1 transition-transform duration-200">
                  <Clock className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-navy">Working Hours</p>
                    <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
                    <p className="text-xs text-navy-muted/60">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Next steps pipeline */}
              <div className="flex flex-col gap-4">
                <h3 className="reveal text-base font-bold font-display text-navy flex items-center gap-2" style={{ transitionDelay: '100ms' }}>
                  <Sparkles className="w-5 h-5 text-purple" />
                  <span>What Happens Next?</span>
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="reveal hover-lift p-4 border border-card-border rounded-lg bg-card flex gap-4 transition-colors duration-300"
                      style={{ transitionDelay: `${(idx * 150) + 200}ms` }}
                    >
                      <div className="w-7 h-7 rounded-full bg-section-alt text-purple font-bold text-xs flex items-center justify-center shrink-0 border border-card-border">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-navy mb-1">{step.title}</h4>
                        <p className="text-[11px] text-navy-muted leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Form Column */}
            <div className="reveal lg:col-span-6 w-full max-w-lg mx-auto" style={{ transitionDelay: '300ms' }}>
              <LeadForm />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Maps validation */}
      <section className="bg-section-alt text-navy py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col gap-3">
            <h2 className="reveal text-2xl font-extrabold font-display text-navy tracking-tight" style={{ transitionDelay: '0ms' }}>Interactive Campus Directions</h2>
          </div>
          
          <div
            className="reveal w-full h-80 sm:h-96 bg-card border border-card-border rounded-xl overflow-hidden relative shadow-sm transition-colors duration-300"
            style={{ transitionDelay: '150ms' }}
          >
            <div className="absolute inset-0 bg-[#E5E3DF] dark:bg-slate-900 flex flex-col items-center justify-center p-6 text-center">
              <MapPin className="w-10 h-10 text-purple mb-2 animate-bounce" />
              <h4 className="font-bold text-navy mb-1">The Global Language Academy</h4>
              <p className="text-xs text-navy-muted max-w-xs mb-4">
                Sector 15 Main Road, next to the metro station entrance. Premium Plaza Building.
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple text-white text-xs font-bold rounded-md hover:bg-purple-hover transition-colors duration-200"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
