import { z } from "zod";

export const practiceAreas = [
  "Criminal Defense",
  "Civil Litigation",
  "Corporate Law",
  "Commercial Disputes",
  "Legal Advisory",
  "Appeals and Advocacy",
] as const;

const cleanText = (min: number, max: number) =>
  z
    .string()
    .trim()
    .min(min)
    .max(max)
    .refine((value) => !/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(value), {
      message: "Please remove unsupported characters.",
    });

export const consultationSchema = z.object({
  fullName: cleanText(2, 100),
  email: z.string().trim().email().max(254),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(30)
    .regex(/^[+()\d.\-\s]+$/, "Enter a valid phone number.")
    .refine((value) => (value.match(/\d/g)?.length ?? 0) >= 7, "Enter at least 7 digits."),
  practiceArea: z.enum(practiceAreas),
  caseDetails: cleanText(20, 5000),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;
