"use server";

import { germanLeadFormSchema, GermanLeadFormInput } from '../types';

export interface GermanLeadSubmissionResponse {
  success: boolean;
  message: string;
  debugInfo?: string;
}

// Google Form Endpoint and Entry IDs for German Course
const GERMAN_GOOGLE_FORM_ENDPOINT = "https://docs.google.com/forms/d/e/1FAIpQLSf3AIefhntduchzhGVexBAgNLMuLwtBzCsvjXqHQGP4Eyz7tw/formResponse";

const ENTRY_MAP = {
  name: "entry.856793875",
  phone: "entry.1977796070",
  email: "entry.448512702",
  education: "entry.646430350",
  germanLevel: "entry.1393693464",
  learningMode: "entry.2122139248",
};

export async function submitGermanLead(data: GermanLeadFormInput): Promise<GermanLeadSubmissionResponse> {
  try {
    // 1. Server-Side Validation
    const parsedData = germanLeadFormSchema.safeParse(data);
    if (!parsedData.success) {
      const errorMsg = parsedData.error.issues.map((e) => e.message).join(", ");
      return { success: false, message: `Validation Error: ${errorMsg}` };
    }

    const lead = parsedData.data;

    console.log("🇩🇪 Submitting German Lead to Google Form:", {
      Name: lead.name,
      Phone: lead.phone,
      Email: lead.email,
      Education: lead.education,
      GermanLevel: lead.germanLevel,
      LearningMode: lead.learningMode,
      utmSource: lead.utmSource || 'direct',
      utmMedium: lead.utmMedium || 'none',
      utmCampaign: lead.utmCampaign || 'none',
      SubmittedAt: new Date().toISOString()
    });

    // 2. Submit to Google Form
    try {
      const formData = new URLSearchParams();
      formData.append(ENTRY_MAP.name, lead.name);
      formData.append(ENTRY_MAP.phone, lead.phone);
      formData.append(ENTRY_MAP.email, lead.email);
      formData.append(ENTRY_MAP.education, lead.education);
      formData.append(ENTRY_MAP.germanLevel, lead.germanLevel);
      formData.append(ENTRY_MAP.learningMode, lead.learningMode);
      formData.append("fvv", "1");
      formData.append("pageHistory", "0");

      const response = await fetch(GERMAN_GOOGLE_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      console.log("✅ German Lead submitted to Google Form. HTTP Status:", response.status);
    } catch (formErr) {
      console.error("⚠️ Error posting to Google Form (proceeding with confirmation):", formErr);
    }

    return {
      success: true,
      message: "Vielen Dank! Your German consultation & demo class has been booked. Our academic counselor will call you shortly."
    };

  } catch (error: any) {
    console.error("❌ German Lead submission error:", error);
    return {
      success: false,
      message: "An internal server error occurred. Please contact us directly on WhatsApp or call."
    };
  }
}
