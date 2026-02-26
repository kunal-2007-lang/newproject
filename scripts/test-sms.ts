import twilio from 'twilio';

// Bun loads .env files automatically.
// If .env.local isn't loading, verifying manually.
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_PHONE_NUMBER;
const to = '+916397124831';

console.log('--- Configuration ---');
console.log(`Account SID: ${accountSid ? 'Correctly Loaded' : 'Missing'}`);
console.log(`Auth Token: ${authToken ? 'Correctly Loaded' : 'Missing'}`);
console.log(`From (Twilio): ${fromNumber}`);
console.log(`To: ${to}`);
console.log('---------------------');

if (!accountSid || !authToken || !fromNumber) {
  console.error('Error: Missing Twilio configuration.');
  process.exit(1);
}

const client = twilio(accountSid, authToken);

async function sendTestSMS() {
  try {
    console.log('Attempting to send SMS...');
    const message = await client.messages.create({
      body: 'Test message from SMS Service via script',
      from: fromNumber,
      to: to,
    });
    console.log('SUCCESS: SMS sent!');
    console.log(`SID: ${message.sid}`);
  } catch (error: any) {
    console.error('FAILED: Could not send SMS.');
    console.error(`Error Code: ${error.code}`);
    console.error(`Message: ${error.message}`);
    if (error.moreInfo) {
      console.error(`More Info: ${error.moreInfo}`);
    }
  }
}

sendTestSMS();
