import { z } from "zod";

export const contactInputSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .max(20)
    .optional()
    .transform((v) => (v === "" ? undefined : v)),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000),
  turnstileToken: z.string().min(1, "Please complete the security check"),
});

export type ContactInput = z.infer<typeof contactInputSchema>;
