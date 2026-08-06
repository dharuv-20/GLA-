import { z } from 'zod';

export const leadFormSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must not exceed 50 characters." }),
  phone: z.string()
    .regex(/^[6-9]\d{9}$/, { message: "Please enter a valid 10-digit Indian phone number." }),
  course: z.string().min(1, { message: "Please select a course to continue." }),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
});

export type LeadFormInput = z.infer<typeof leadFormSchema>;
