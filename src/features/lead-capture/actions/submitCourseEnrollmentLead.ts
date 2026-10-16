"use server";

import { courseEnrollmentLeadSchema, CourseEnrollmentLeadInput } from '../types';

export interface CourseEnrollmentResponse {
  success: boolean;
  message: string;
}

const GOOGLE_FORM_ENDPOINTS: Record<CourseEnrollmentLeadInput['courseSlug'], string> = {
  'french-language': "https://docs.google.com/forms/d/e/1FAIpQLSddPd-td1rHqYMV4C64nqJPug_8uEqiYLSfBNTLNCfF3jUirQ/formResponse",
  'japanese-language': "https://docs.google.com/forms/d/e/1FAIpQLSdJivVvqtGMZY1YUWdhel75W6LIzJSJtup_pULIpyE8m3KpoA/formResponse",
  'spoken-english': "https://docs.google.com/forms/d/e/1FAIpQLSdt9Zuy36EMi0xEAa2Ph0CK3YDmog7pDm7B-YcThYeyShMWmA/formResponse",
  'pte-academic': "https://docs.google.com/forms/d/e/1FAIpQLSfwscRuEp0clF-lQYP2pftgKvDRm-IP5APWauPdhaKAp914Ng/formResponse",
  'ielts-preparation': "https://docs.google.com/forms/d/e/1FAIpQLSekoK021YwjLIeDiwkEpqNSruU7X3va3sZNGZKQTlJ64upP8w/formResponse",
};

const SUCCESS_MESSAGES: Record<CourseEnrollmentLeadInput['courseSlug'], string> = {
  'french-language': "Merci beaucoup! Your French consultation session has been booked. Our academic counselor will call you shortly.",
  'japanese-language': "Arigatō gozaimasu! Your Japanese consultation session has been booked. Our JLPT advisor will call you shortly.",
  'spoken-english': "Welcome aboard! Your Spoken English assessment session has been booked. Our fluency trainer will call you shortly.",
  'pte-academic': "All set! Your PTE Academic consultation has been booked. Our master trainer will call you shortly.",
  'ielts-preparation': "All set! Your IELTS Masterclass consultation has been booked. Our certified IDP/British Council advisor will call you shortly."
};

const ENTRY_MAP = {
  name: "entry.856793875",
  phone: "entry.1977796070",
  email: "entry.448512702",
  education: "entry.646430350",
  level: "entry.1393693464",
  learningMode: "entry.2122139248",
};

export async function submitCourseEnrollmentLead(data: CourseEnrollmentLeadInput): Promise<CourseEnrollmentResponse> {
  try {
    const parsed = courseEnrollmentLeadSchema.safeParse(data);
    if (!parsed.success) {
      const errorMsg = parsed.error.issues.map((e) => e.message).join(", ");
      return { success: false, message: `Validation Error: ${errorMsg}` };
    }

    const lead = parsed.data;
    const endpoint = GOOGLE_FORM_ENDPOINTS[lead.courseSlug];

    if (!endpoint) {
      return { success: false, message: "Unknown course configuration." };
    }

    console.log(`📡 Submitting Course Lead for ${lead.courseSlug}:`, {
      Name: lead.name,
      Phone: lead.phone,
      Email: lead.email,
      Education: lead.education,
      Level: lead.level,
      LearningMode: lead.learningMode,
      CourseSlug: lead.courseSlug,
      utmSource: lead.utmSource || 'direct',
      SubmittedAt: new Date().toISOString()
    });

    try {
      const formData = new URLSearchParams();
      formData.append(ENTRY_MAP.name, lead.name);
      formData.append(ENTRY_MAP.phone, lead.phone);
      formData.append(ENTRY_MAP.email, lead.email);
      formData.append(ENTRY_MAP.education, lead.education);
      formData.append(ENTRY_MAP.level, lead.level);
      formData.append(ENTRY_MAP.learningMode, lead.learningMode);
      formData.append("fvv", "1");
      formData.append("pageHistory", "0");

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      console.log(`✅ Lead for ${lead.courseSlug} submitted to Google Form. Status: ${response.status}`);
    } catch (formErr) {
      console.error(`⚠️ Error posting to Google Form for ${lead.courseSlug}:`, formErr);
    }

    return {
      success: true,
      message: SUCCESS_MESSAGES[lead.courseSlug] || "Your consultation session has been booked. Our academic counselor will call you shortly."
    };
  } catch (error: any) {
    console.error("❌ Course lead submission error:", error);
    return {
      success: false,
      message: "An internal server error occurred. Please contact us directly on WhatsApp or call."
    };
  }
}
