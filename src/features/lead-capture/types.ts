import { z } from 'zod';

export const leadFormSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must not exceed 50 characters." }),
  phone: z.string()
    .regex(/^[6-9]\d{9}$/, { message: "Please enter a valid 10-digit Indian phone number." }),
  email: z.string()
    .email({ message: "Please enter a valid email address." }),
  course: z.string().min(1, { message: "Please select a course to continue." }),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
});

export type LeadFormInput = z.infer<typeof leadFormSchema>;

export const germanLeadFormSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must not exceed 50 characters." }),
  phone: z.string()
    .regex(/^[6-9]\d{9}$/, { message: "Please enter a valid 10-digit Indian phone number." }),
  email: z.string()
    .email({ message: "Please enter a valid email address." }),
  education: z.string()
    .min(1, { message: "Please select your current education qualification." }),
  germanLevel: z.string()
    .min(1, { message: "Please select your current German level." }),
  learningMode: z.string()
    .min(1, { message: "Please select your preferred mode of learning." }),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
});

export type GermanLeadFormInput = z.infer<typeof germanLeadFormSchema>;

export const courseEnrollmentLeadSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must not exceed 50 characters." }),
  phone: z.string()
    .regex(/^[6-9]\d{9}$/, { message: "Please enter a valid 10-digit Indian phone number." }),
  email: z.string()
    .email({ message: "Please enter a valid email address." }),
  education: z.string()
    .min(1, { message: "Please select your current education qualification." }),
  level: z.string()
    .min(1, { message: "Please select your level or target." }),
  learningMode: z.string()
    .min(1, { message: "Please select your preferred mode of learning." }),
  courseSlug: z.enum([
    'french-language',
    'japanese-language',
    'spoken-english',
    'pte-academic',
    'ielts-preparation'
  ]),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
});

export type CourseEnrollmentLeadInput = z.infer<typeof courseEnrollmentLeadSchema>;
