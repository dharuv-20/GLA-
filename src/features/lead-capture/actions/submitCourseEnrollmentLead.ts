"use server";

import { courseEnrollmentLeadSchema, CourseEnrollmentLeadInput } from '../types';

export interface CourseEnrollmentResponse {
  success: boolean;
  message: string;
}

const GOOGLE_FORM_ENDPOINTS: Record<CourseEnrollmentLeadInput['courseSlug'], string> = {
  'french-language': "https://docs.google.com/forms/d/e/1FAIpQLSck42kMHxcCpSB_ZwevAIWDoioNKZZ4l04uUDsePd8yW_3kBA/formResponse",
  'japanese-language': "https://docs.google.com/forms/d/e/1FAIpQLSe4mXaG6DKsWXACFYwn4XUipGhIbLyTvYEkcH-InRR_PBdieg/formResponse",
  'spoken-english': "https://docs.google.com/forms/d/e/1FAIpQLScuekDkmG5-kl2Ck36IpFhFfXrzfCd4Wzc_kFXzTdKSwmEjlQ/formResponse",
  'pte-academic': "https://docs.google.com/forms/d/e/1FAIpQLSdGSt7guoIuphk0N1abNnM4eiwp-FE0bzIx-OU6KqFL_NxiYA/formResponse",
  'ielts-preparation': "https://docs.google.com/forms/d/e/1FAIpQLSfZYq_bBn-gpB0IsSQmaxu6DxGKv6WlA2Fa-Uh4uOmylsdzrQ/formResponse",
};

const SUCCESS_MESSAGES: Record<CourseEnrollmentLeadInput['courseSlug'], string> = {
  'french-language': "Merci beaucoup! Your French consultation session has been booked. Our academic counselor will call you shortly.",
  'japanese-language': "Arigatō gozaimasu! Your Japanese consultation session has been booked. Our JLPT advisor will call you shortly.",
  'spoken-english': "Welcome aboard! Your Spoken English assessment session has been booked. Our fluency trainer will call you shortly.",
  'pte-academic': "All set! Your PTE Academic consultation has been booked. Our master trainer will call you shortly.",
  'ielts-preparation': "All set! Your IELTS Masterclass consultation has been booked. Our certified IDP/British Council advisor will call you shortly."
};

const ENTRY_MAP = {
  name: "entry.1911499075",
  phone: "entry.138740472",
  email: "entry.1499774623",
  education: "entry.321556839",
  level: "entry.1172742771",
  learningMode: "entry.1356078340",
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
