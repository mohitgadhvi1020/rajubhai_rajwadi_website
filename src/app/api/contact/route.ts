import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // For now, just log the contact form data
    // In production, you would integrate with your email service
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    // Create a WhatsApp message that can be sent manually
    const whatsappMessage = `🔔 *NEW CONTACT FORM MESSAGE*

👤 *From:* ${name}
📧 *Email:* ${email}

💬 *Message:*
${message}

📅 *Received:* ${new Date().toLocaleString()}

---
From: Rajubhai's Rajwadi Website Contact Form`;

    console.log('WhatsApp message format:', whatsappMessage);

    // Return success response
    return NextResponse.json({ 
      message: 'Message received successfully',
      data: {
        name,
        email,
        message,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
