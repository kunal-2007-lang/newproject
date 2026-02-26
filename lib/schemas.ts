import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const smsSchema = z.object({
  to: z
    .array(z.string().min(1))
    .min(1, 'At least one phone number is required'),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(1600, 'Message too long'),
});
