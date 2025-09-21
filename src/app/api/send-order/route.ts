import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Order } from '../../types';

export async function POST(request: Request) {
  try {
    const orderData: Order = await request.json();
    const { customer, items, total } = orderData;

    // Create a transporter (configure for your email provider)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Format the items for the email
    const itemsList = items.map(
      (item) => `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.name}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.quantity}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">$${item.price.toFixed(2)}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">$${(
            item.price * item.quantity
          ).toFixed(2)}</td>
        </tr>
      `
    ).join('');

    // Create the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mohitghanghaniya@gmail.com',
      subject: 'New Order Received',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a5568;">New Order Received</h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #4a5568;">Customer Information:</h3>
            <p><strong>Name:</strong> ${customer.name}</p>
            <p><strong>Address:</strong> ${customer.address}</p>
            <p><strong>Email:</strong> ${customer.email}</p>
          </div>
          
          <div>
            <h3 style="color: #4a5568;">Order Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="background-color: #f7fafc;">
                  <th style="padding: 10px; text-align: left; border-bottom: 1px solid #eee;">Item</th>
                  <th style="padding: 10px; text-align: left; border-bottom: 1px solid #eee;">Quantity</th>
                  <th style="padding: 10px; text-align: left; border-bottom: 1px solid #eee;">Price</th>
                  <th style="padding: 10px; text-align: left; border-bottom: 1px solid #eee;">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                ${itemsList}
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" style="padding: 10px; text-align: right; font-weight: bold;">Total:</td>
                  <td style="padding: 10px; font-weight: bold;">$${total.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Order email sent successfully' });
  } catch (error) {
    console.error('Error sending order email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send order email' },
      { status: 500 }
    );
  }
} 