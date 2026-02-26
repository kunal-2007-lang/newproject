import { NextResponse } from 'next/server';
import { verifyJWT } from '@/lib/auth';
import { smsSchema } from '@/lib/schemas';
import { sendSMS } from '@/lib/sms';
import { cookies } from 'next/headers'; // Import cookies utility

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token || !(await verifyJWT(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const result = smsSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: result.error.flatten() },
        { status: 400 },
      );
    }

    const { to, message } = result.data;

    const results = await Promise.all(
      to.map(async (phoneNumber) => {
        try {
          const res = await sendSMS(phoneNumber, message);
          return { phoneNumber, status: 'success', ...res };
        } catch (error: any) {
          return { phoneNumber, status: 'failed', error: error.message };
        }
      }),
    );

    const successCount = results.filter((r) => r.status === 'success').length;
    const failureCount = results.filter((r) => r.status === 'failed').length;

    return NextResponse.json({
      success: true,
      summary: { total: to.length, sent: successCount, failed: failureCount },
      details: results,
    });
  } catch (error: any) {
    console.error('SMS API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send SMS' },
      { status: 500 },
    );
  }
}
