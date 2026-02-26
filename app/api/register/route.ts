import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Extract fields
    const name = formData.get('name') as string;
    const mobile = formData.get('mobile') as string;
    const address = formData.get('address') as string;
    const amount = formData.get('amount') as string;
    const referral = formData.get('referral') as string;
    const screenshot = formData.get('screenshot') as File;

    if (!name || !mobile || !address || !screenshot) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    // Convert file to buffer
    const buffer = Buffer.from(await screenshot.arrayBuffer());

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this if you are not using Gmail
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending to yourself, or change as needed
      subject: `New Registration for Sarv Samaj Kalyan Seva Trust from ${name}`,
      html: `
        <h2>New Registration Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Amount:</strong> ${amount}</p>
        <p><strong>Referral Member:</strong> ${referral || 'N/A'}</p>
      `,
      attachments: [
        {
          filename: screenshot.name,
          content: buffer,
          contentType: screenshot.type,
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Registration sent successfully',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send registration' },
      { status: 500 },
    );
  }
}
