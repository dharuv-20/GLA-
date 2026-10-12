// Utility functions for GA4 event tracking

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

export function trackLeadSubmission(formType: string, course?: string) {
  trackEvent('generate_lead', {
    event_category: 'engagement',
    event_label: formType,
    course_interest: course || 'general',
  });
}

export function trackWhatsAppClick(source: string) {
  trackEvent('contact_whatsapp', {
    event_category: 'conversion',
    event_label: source,
  });
}

export function trackPhoneClick(source: string) {
  trackEvent('contact_phone', {
    event_category: 'conversion',
    event_label: source,
  });
}
