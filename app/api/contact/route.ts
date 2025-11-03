import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { Name, Email, phone, message } = body;
    
    // Validation
    if (!Name || !Email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }
    
    if (!Email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' }, 
        { status: 400 }
      );
    }
    
    // Get recipient from environment variable
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'mxdevelopment.code@gmail.com';
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'PowerFlow Contact <onboarding@resend.dev>', // Will use Resend's test domain
      to: recipientEmail,
      replyTo: Email,
      subject: 'New Contact Message - PowerFlow',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #667eea; }
            .value { margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">New Contact Message</h2>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">PowerFlow Gym & Fitness</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${Name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${Email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' }, 
        { status: 500 }
      );
    }

    return NextResponse.json({ status: 'sent' }, { status: 200 });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}
