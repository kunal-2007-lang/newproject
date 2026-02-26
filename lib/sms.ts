import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_PHONE_NUMBER;

const client = accountSid && authToken ? twilio(accountSid, authToken) : null;

export async function sendSMS(to: string, body: string) {
  const isMock = process.env.MOCK_SMS === 'true';

  if (isMock) {
    console.log('--- MOCK SMS SENT ---');
    console.log(`To: ${to}`);
    console.log(`Body: ${body}`);
    console.log('---------------------');
    return { success: true, mock: true };
  }

  if (!client) {
    throw new Error('Twilio credentials not configured');
  }

  try {
    const message = await client.messages.create({
      body,
      from: fromNumber,
      to,
    });
    return { success: true, sid: message.sid };
  } catch (error: any) {
    console.error('Twilio Error:', error);
    // Throw the actual Tiwlio error message if available, otherwise fallback
    throw new Error(error.message || 'Failed to send SMS');
  }
}
