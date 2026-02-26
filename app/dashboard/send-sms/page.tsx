'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { smsSchema } from '@/lib/schemas';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { toast } from 'sonner';
import { PhoneInput } from '@/components/ui/phone-input';

type SmsFormValues = z.infer<typeof smsSchema>;

export default function SendSmsPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<SmsFormValues>({
    resolver: zodResolver(smsSchema),
    defaultValues: {
      to: [],
      message: '',
    },
  });

  const message = watch('message', '');
  const characterCount = message.length;
  const segmentCount = Math.ceil(characterCount / 160) || 1;

  async function onSubmit(data: SmsFormValues) {
    if (data.to.length === 0) {
      toast.error('Please add at least one phone number');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/sms/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send SMS');
      }

      const result = await response.json();
      const { summary } = result;

      if (summary.failed > 0) {
        toast.warning(`Sent: ${summary.sent}, Failed: ${summary.failed}`);
      } else {
        toast.success(`Successfully sent to ${summary.sent} recipients!`);
      }

      reset({ to: [], message: '' });
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-4 md:gap-8 max-w-2xl mx-auto w-full">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Send SMS</h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Compose Message</CardTitle>
          <CardDescription>
            Send a new SMS to a customer. Standard rates may apply.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="to">Phone Numbers</Label>
              <Controller
                control={control}
                name="to"
                render={({ field }) => (
                  <PhoneInput value={field.value} onChange={field.onChange} />
                )}
              />
              {errors.to && (
                <p className="text-sm text-red-500">{errors.to.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                disabled={isLoading}
                rows={5}
                {...register('message')}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>
                  {characterCount} characters ({segmentCount} segment
                  {segmentCount !== 1 && 's'})
                </span>
                <span>Max 1600 characters</span>
              </div>
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading && (
                <svg
                  className="mr-2 h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              Send Message
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
